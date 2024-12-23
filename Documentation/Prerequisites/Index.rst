:navigation-title: Prerequisites
..  include:: /Includes.rst.txt

..  _prerequisites:

=================================
Prerequisites to start with TYPO3
=================================

Before you start working on this tutorial, you should have DDEV installed on
your computer.

This TYPO3 tutorial assumes that the reader has some basic knowledge in the following areas:

*   `HTML, CSS and JavaScript <https://www.w3schools.com/html/default.asp>`__
*   `Basic Command Line Interface (CLI) Commands <https://www.w3schools.com/whatis/whatis_cli.asp>`__

..  _composer_cheat_sheat:

Composer cheat sheet
====================

Composer is a powerful tool for managing dependencies in PHP projects, including
TYPO3. Here you will find an overview of the four most important commands with a
simple explanation of what they do.

..  _composer_require:

composer require
----------------

..  code-block:: bash

    composer require vendor/extension-name

It installs a new package (e.g. a TYPO3 extension) and automatically adds it to your :guilabel:`composer.json`.
Composer determines the appropriate version based on your current configuration.
All required dependencies for the package are also installed.

..  _composer_remove:

composer remove
---------------

..  code-block:: bash

    composer remove vendor/extension-name

Uninstalls an existing package from your project.
Removes the entry from :guilabel:`composer.json` and deletes related files from the
:guilabel:`vendor` folder.
Removes unused dependencies that were only required fro the removed package.

..  _composer_install:

composer install
----------------

..  code-block:: bash

    composer install

It installs exactly the versions specified in the :guilabel:`composer.lock` file.

..  _composer_update:

composer update
---------------

..  code-block:: bash

    composer update

It updates all installed packages to their latest version, as allowed by the version constraints in :guilabel:`composer.json`.
The :guilabel:`composer.lock` file, which records the exact package versions, is updated.
Downloads the updated packages to the :guilabel:`vendor` folder.
