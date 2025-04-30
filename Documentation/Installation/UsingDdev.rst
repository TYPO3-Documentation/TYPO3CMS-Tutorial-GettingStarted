:navigation-title: Using DDEV

..  include:: /Includes.rst.txt
..  _ddev:

=========================
Installing and using DDEV
=========================

DDEV is a powerful tool for local TYPO3 development. It automates
the setup of PHP, database, webserver, and other services using Docker, making
local development easy, fast, and consistent across platforms.

This guide assumes that you are setting up TYPO3 locally using DDEV.
For deploying TYPO3 to a live server, see
`Deploying TYPO3 <https://docs.typo3.org/permalink/t3start:deployment>`_.

Some hosting providers also host DDEV projects,
allowing you to develop locally and deploy seamlessly.

..  note::
    Like TYPO3, DDEV is open source software that only exists due to the
    generosity of community members and sponsors. Read more about
    `how to support DDEV <https://ddev.com/support-ddev/>`__.

..  contents:: Table of contents

..  _ddev-install-docker:

Install Docker
==============

Docker is required to run DDEV containers.

-   Visit `docker.com <https://www.docker.com/>`__ and download the latest
    version for your operating system.
-   Follow the installation instructions for your platform (Windows, macOS, or
    Linux).

..  _ddev-install-ddev:

Install DDEV
============

Once Docker is running, install DDEV by following the official installation
instructions:

`Installing DDEV <https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/>`_

This page covers installation for macOS, Linux, Windows, and WSL, and is kept
up-to-date.

..  _ddev-check-installation:

Check your DDEV installation
============================

After installing, verify that Docker and DDEV are available:

..  code-block:: bash

    docker --version
    ddev version

If both commands return version information, installation was successful.

..  note::
    If you encounter problems installing DDEV, support is available via the
    `DDEV Discord server <https://discord.gg/kDvSFBSZfs>`__.

When DDEV is up and running, you can continue with
`Installing TYPO3 with DDEV <https://docs.typo3.org/permalink/t3start:install>`_.

..  _ddev-update:

Update DDEV
===========

DDEV releases frequent updates with new features, bug fixes, and improvements.
It is recommended to keep DDEV up to date.

For instructions on how to update DDEV on your operating system, see the official
`DDEV Upgrade Guide
<https://ddev.readthedocs.io/en/stable/users/install/ddev-upgrade/>`_.

After updating, verify the installed version:

..  code-block:: bash

    ddev version

..  _ddev-managing-database:

Managing the database
======================

Running :bash:`ddev start` automatically creates a database for you.
DDEV also creates the file :file:`config/system/additional.php`, containing the
database credentials.

You can access your database using any local database client.

On Windows, you can quickly open the database in HeidiSQL:

..  code-block:: bash

    ddev heidisql

Other popular database clients include TablePlus, Sequel Ace, and DBeaver.

For more details, see the DDEV documentation on
`Database GUIs
<https://ddev.readthedocs.io/en/stable/users/usage/database-management/#database-guis/>`__.

..  _ddev-sending-email:

Sending emails
==============

DDEV captures outgoing mails and stores them for review.
You can view sent emails with:

..  code-block:: bash

    ddev launch -m

..  _ddev-stopping-instance:

Stopping a DDEV instance
========================

If you want to stop all running DDEV projects, run:

..  code-block:: bash

    ddev poweroff

The projects will remain configured and databases will be persisted.

..  _ddev-deleting-instance:

Deleting a DDEV instance
========================

If you want to delete the project you created, run the following command inside
your project root folder:

..  code-block:: bash

    ddev delete --omit-snapshot

This removes all containers for the project and deletes the database.

Afterwards you can safely delete the project root folder manually if needed.

..  _ddev-documentation:

DDEV documentation
===================

You can find detailed documentation at
`DDEV Documentation <https://ddev.readthedocs.io/>`_.
There is also a `TYPO3 Quick Start
<https://ddev.readthedocs.io/en/stable/users/quickstart/#typo3/>`_ that
parallels this guide.
