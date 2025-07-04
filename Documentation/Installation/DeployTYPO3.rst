..  include:: /Includes.rst.txt
..  index:: deployment, composer, production setup

..  _deploytypo3:
..  _deployment:

===============
Deploying TYPO3
===============

..  _deployment-git-composer:

Using Git and Composer on the webserver
=======================================

*   Check if Composer is available on the production server. If it is not
    available consider to use the
    `latest composer.phar <https://getcomposer.org/download/>`__.
*   Keep all development related files in a Git repository.
*   Clone this repository on your production server.
*   Copy the database to the production server.
*   Install TYPO3 without dev dependencies on the production server:

    ..  code-block::

        composer install --no-dev

*   Compare the database
*   Fix file permissions
*   Clear caches

..  todo: Link these steps once documented

If you do a `composer install` directly on the production server you might
experience some problems. For this reason some developers and administrators
decide not to do it:

*   There can be several minutes of downtime even if the installation goes
    smoothly.
*   The installation might fail if some packages are not available.
*   You might accidentally call `composer update` as is often done during
    development and do unintended, untested updates.
*   You might omit the `--no-dev` option and accidentally install packages
    that are not save to be used during production.

Some of these problems can be fixed by using a symlink strategy where one
directory is running on production and another one is being updated.

..  _deployment-copy-files:

Build locally and copy all files and symlinks to the server
===========================================================

*   Build the local environment (installing everything necessary for the website)
*   Run :bash:`composer install --no-dev` to install without development dependencies
*   Copy files to the production server
*   Copy the database to the production server
*   Compare the database
*   Fix file permissions
*   Clear caches

..  todo: Link these steps once documented

There can be several problems with this strategy:

*   Copying files or unzipping files can be slow, there can be several minutes
    of downtime.
*   A TYPO3 installation depends on symlinks. Make sure these symlinks are
    preserved during copying and or compressing files.

..  _deployment-automatic:

Automatic deployment
====================

There are multiple tools that can be used to automate deployment. Read more
about it: :ref:`TYPO3 Explained, automatic deployment <t3coreapi:automated-deployment>`.
