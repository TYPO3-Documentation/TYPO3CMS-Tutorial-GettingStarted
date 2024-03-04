.PHONY: help
help: ## Displays this list of targets with descriptions
	@echo "The following commands are available:\n"
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: check
check: check-php

.PHONY: check-php
check-php:
	vendor/bin/php-cs-fixer check

.PHONY: docs
docs: ## Generate projects docs (from "Documentation" directory)
	mkdir -p Documentation-GENERATED-temp

	docker run --rm --pull always -v "$(shell pwd)":/project -t ghcr.io/typo3-documentation/render-guides:latest --config=Documentation

.PHONY: fix
fix: fix-php

.PHONY: fix-php
fix-php:
	vendor/bin/php-cs-fixer fix
