.PHONY: help
help: ## Displays this list of targets with descriptions
	@echo "The following commands are available:\n"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: check
check: check-php test-docs ## Run all tests including code styles and rendering test

.PHONY: check-php
check-php: ## Check the coding styles for PHP
	vendor/bin/php-cs-fixer check

.PHONY: docs
docs: ## Generate projects docs (from "Documentation" directory)
	mkdir -p Documentation-GENERATED-temp

	docker run --rm --pull always -v "$(shell pwd)":/project -t ghcr.io/typo3-documentation/render-guides:latest --config=Documentation

.PHONY: test-docs
test-docs: ## Test the documentation rendering
	mkdir -p Documentation-GENERATED-temp

	docker run --rm --pull always -v "$(shell pwd)":/project -t ghcr.io/typo3-documentation/render-guides:latest --config=Documentation --no-progress --fail-on-log --output-format=html

.PHONY: fix
fix: fix-php ## Run all automatic fixes

.PHONY: fix-php
fix-php: ## Fix the coding styles for PHP
	vendor/bin/php-cs-fixer fix
