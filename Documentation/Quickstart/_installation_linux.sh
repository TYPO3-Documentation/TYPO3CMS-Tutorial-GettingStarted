# Create project directory
mkdir my_project && cd my_project

# Use at least php 8.2 and create a mysql or mariadb database

# Install TYPO3 via Composer
composer create-project "typo3/cms-base-distribution:^14"

# Run TYPO3 CLI setup
vendor/bin/typo3 setup --create-site
