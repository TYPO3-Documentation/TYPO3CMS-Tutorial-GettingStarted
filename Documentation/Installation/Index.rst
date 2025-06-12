:navigation-title: Installation

..  include:: /Includes.rst.txt
..  _installation_index:

=====================================
Prepare / Install local TYPO3 project
=====================================

Setting up your local TYPO3 project requires a few simple steps.
This chapter will guide you through preparing your development environment,
installing TYPO3, and getting ready to build your first website.

The rest of the Getting Started guide assumes that TYPO3 has been installed locally
using DDEV and Composer, as described here.

If you prefer a to use a different installation method (for example, manual
installation on a server), see the full
`TYPO3 installation guide <https://docs.typo3.org/permalink/t3coreapi:installation-index>`_.

..  toctree::
    :hidden:
    :titlesonly:

    UsingDdev
    Install
    Setup
    Version
    Hosting
    DeployTYPO3
    Updates/Index
    ApplicationContext
    SystemRequirements/Index

..  card-grid::
    :columns: 1
    :columns-md: 2
    :gap: 4
    :class: pb-4
    :card-height: 100

    ..  card:: :ref:`Using DDEV <ddev>`

        Learn how to install, update, and manage DDEV to run your TYPO3
        projects locally.

    ..  card:: :ref:`Installing TYPO3 with DDEV <install>`

        Follow a quick and simple guide to install TYPO3 locally using DDEV,
        Docker, and Composer.

    ..  card:: :ref:`Setting up TYPO3 after installation <typo3-setup>`

        Complete TYPO3 setup by creating an admin user and configuring
        initial options.

    ..  card:: :ref:`Choosing a TYPO3 version <typo3-version>`

        Find out which TYPO3 version to start with and where to get it.

    ..  card:: :ref:`Keeping TYPO3 up to date <getting-started-typo3-updates>`

        Learn about TYPO3 update cycles and how to keep your installation secure
        and up to date.

    ..  card:: :ref:`Deploying TYPO3 to a server <DeployTYPO3>`

        Learn how to move your TYPO3 project from your local DDEV environment
        to a live web server.

..  _installation_advanced:

Advanced installation topics
=============================

..  card-grid::
    :columns: 1
    :columns-md: 2
    :gap: 4
    :class: pb-4
    :card-height: 100

    ..  card:: :ref:`Application context <application-context>`

        Use the TYPO3 application context to manage different settings for
        development, testing, and production.

    ..  card:: `System Requirements <https://docs.typo3.org/permalink/t3coreapi:system-requirements>`_

        If you want to install TYPO3 manually or deploy to a production server, check
        the full system requirements for PHP, database, and web server.

    ..  card:: `Tuning TYPO3 <https://docs.typo3.org/permalink/t3coreapi:tunetypo3>`_

        Learn how to configure, optimize, and fine-tune the infrastructure
        running TYPO3 for better performance and scalability.
