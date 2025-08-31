.PHONY: help
help: ## Displays this list of targets with descriptions
	@echo "The following commands are available:\n"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: docs
docs: ## Generate projects documentation (from "Documentation" directory)
	mkdir -p Documentation-GENERATED-temp

	docker run --user $(shell id -u):$(shell id -g) --rm --pull always -v "$(shell pwd)":/project -t ghcr.io/typo3-documentation/render-guides:latest --config=Documentation

.PHONY: test-docs
test-docs: ## Test the documentation rendering
	mkdir -p Documentation-GENERATED-temp

	docker run --user $(shell id -u):$(shell id -g) --rm --pull always -v "$(shell pwd)":/project -t ghcr.io/typo3-documentation/render-guides:latest --config=Documentation --no-progress --fail-on-log

.PHONY: test-lint
test-lint: ## Regenerate code snippets
	Build/Scripts/runTests.sh -s lint

.PHONY: test-cgl
test-cgl: ## Regenerate code snippets
	Build/Scripts/runTests.sh -s cgl

.PHONY: test-yaml
test-yaml: ## Regenerate code snippets
	Build/Scripts/runTests.sh -s yamlLint

.PHONY: composerUpdate
composerUpdate: ## Update all dependencies (the composer.lock is not committed)
	Build/Scripts/runTests.sh -s composerUpdate

.PHONY: install
install: composerUpdate## Update all dependencies (the composer.lock is not committed)

.PHONY: test
test: test-docs test-lint test-cgl test-yaml## Test the documentation rendering

.PHONY: fix-cgl
fix-cgl: ## Fix cgl
	Build/Scripts/runTests.sh -s cgl

.PHONY: Fix all
fix: fix-cgl## Test the documentation rendering
