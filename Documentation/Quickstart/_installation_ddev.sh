# Create project directory
mkdir my_project && cd my_project

# Initialize DDEV project
ddev config --php-version 8.4 --docroot public --project-type typo3

# Start DDEV
ddev start

# Install TYPO3 via Composer
ddev composer create-project "typo3/cms-base-distribution:^14"

# Run TYPO3 CLI setup (database credentials are pre-filled)
ddev typo3 setup --server-type=other --driver=mysqli --host=db --port=3306 --dbname=db --username=db --password=db --create-site

# Open the Backend login in a browser
ddev launch /typo3/
