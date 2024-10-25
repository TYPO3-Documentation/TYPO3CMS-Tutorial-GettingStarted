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
about it: :ref:`TYPO3 Explained, automatic deployment <t3coreapi:deployment-automatic>`.

Deployment Automation
=====================

A typical setup for deploying web applications consists of three different parts:

*   The local environment (for development)
*   The build environment (for reproducible builds). This can be a controlled local environment or a remote continuous integration server (for example Gitlab CI or Github Actions)
*   The live (production) environment

To get an application from the local environment to the production system, the usage of a deployment tool and/or a continuous integration solution is recommended. This ensures that only version-controlled code is deployed and that builds are reproducible. Ideally setting a new release live will be an atomical operation and lead to no downtime. If there are errors in any of the deployment or test stages, most deployment tools will initiate an automatic "rollback" preventing that an erroneous build is released.

One widely employed strategy is the "symlink-switching" approach:

In that strategy, the webserver serves files from a virtual path :path:`releases/current/public` which consists of a symlink :path:`releases/current` pointing to the latest deployment ("release"). That symlink is switched after a new release has been successfully prepared.
The latest deployment contains symlinks to folders that should be common among all releases (commonly called "shared folders").

Usually the database is shared between releases and upgrade wizards and schema upgrades are run automatically before or
shortly after the new release has been set live.

This is an exemplatory directory structure of a "symlink-switching" TYPO3 installation:

..  directory-tree::

    *   :path:`shared`

        *   :path:`fileadmin`
        *   :path:`var`

            *   :path:`charset`
            *   :path:`lock`
            *   :path:`log`
            *   :path:`session`

    *   :path:`releases`

        *   :path:`current -> ./release1` (symlink to current release)
        *   :path:`release1`

            *   :path:`public` (webserver root, via releases/current/public)

                *   :path:`typo3conf`
                *   :path:`fileadmin -> ../../../shared/fileadmin` (symlink)
                *   :file:`index.php`

            *   :path:`var`

                *   :path:`build`
                *   :path:`cache`
                *   :path:`charset -> ../../../shared/var/charset` (symlink)
                *   :path:`labels`
                *   :path:`lock -> ../../../shared/var/lock` (symlink)
                *   :path:`log -> ../../../shared/var/log` (symlink)
                *   :path:`session -> ../../../shared/var/session` (symlink)

            *   :path:`vendor`
            *   :file:`composer.json`
            *   :file:`composer.lock`


The files in :path:`shared` are shared between different releases of a web site.
The :path:`releases` directory contains the TYPO3 code that will change between the release of each version.

When using a deployment tool this kind of directory structure is usually created automatically.

The following section contains examples for various deployment tools and how they can be configured to use TYPO3:

..  toctree::
    :titlesonly:

    Deployer/Index
    Surf/Index
    Magallanes/Index
