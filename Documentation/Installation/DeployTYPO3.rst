..  include:: /Includes.rst.txt

..  index:: deployment, composer, production setup

..  _deploytypo3:
..  _deployment:

===============
Deploying TYPO3
===============

This guide outlines the steps required to manually deploy TYPO3 and ensure the installation
is secure and ready to be used in a production context. This guide also highlights a number of
automation tools that can help automate the deployment process.

There are several different ways to deploy TYPO3. One of the more simple
options is to manually copy its files and database
from a local machine to the live server, adjusting the configuration where
necessary.

General Deployment Steps
========================

*   Build the local environment (installing everything necessary for the website)
*   Run :bash:`composer install --no-dev` to install without development dependencies
*   Copy files to the production server
*   Copy the database to the production server
*   Clearing the caches

.. note::

    The :bash:`composer install` command should not be run on the live environment.
    Ideally, Composer should only run locally or on a dedicated deployment machine,
    to allow testing before going live.

    To avoid conflicts between the local and the server's PHP version,
    the server's PHP version can be defined in the :file:`composer.json` file
    (e.g. ``{"platform": {"php": "8.1"}}``), so Composer will always check
    the correct dependencies.
