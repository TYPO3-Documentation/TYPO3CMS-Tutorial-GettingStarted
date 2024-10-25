:navigation-title: Installation

..  include:: /Includes.rst.txt

..  _install:
..  _install-access-typo3-via-a-web-browser:
..  _installation-ddev-tutorial:

==========================
Installing TYPO3 with DDEV
==========================

This is a step-by-step guide detailing how to install TYPO3 using DDEV, Docker and Composer.

DDEV is used for local development only.

..  youtube:: HW7J3G1SqZw

Pre-Installation Checklist
--------------------------

#.  **Install Docker** - Visit `docker.com <https://www.docker.com/>`__ to download and install the recommended version of Docker for your operating system.

#.  **Install DDEV** - Follow the `DDEV installation guide <https://ddev.readthedocs.io/en/stable/>`__ to install DDEV.

DDEV and Docker need to be installed on your local machine before TYPO3 can be installed. If you need help installing DDEV, support can be found on the `DDEV Discord server <https://discord.gg/kDvSFBSZfs>`__.

Create the Installation Directory
---------------------------------

Create an empty directory to install TYPO3 in and then change into that directory:

..  code-block:: bash

    mkdir t3example
    cd t3example

Create a new DDEV Project
-------------------------

The `ddev config` command will prompt for information about your project. TYPO3 is in the list
of preconfigured projects.

..  code-block:: bash

    ddev config --php-version 8.3

    # Give the following answers when prompted:

    Project name (t3example):

    Docroot Location (current directory): public

    Project Type [php, typo3, ...] (php): typo3

Docroot Location
    Is the folder containing files that have to be reached by
    the webserver. It contains the vital entry point :file:`index.php`. The folder is commonly called :file:`public`.

Project Type
    Should always be "typo3"

..  note::
    The PHP version (:yaml:`php_version`) should be set manually to the required
    version in :file:`.ddev/config.yaml`.

Alternatively you can skip the prompt by supplying all of the required parameters in a single command:

..  code-block:: bash

    ddev config  --project-type=typo3 --docroot=public --php-version 8.3

Start the project
-----------------

..  code-block:: bash

    ddev start

The webserver is now running but TYPO3 is not yet installed.

Install TYPO3
-------------

..  code-block:: bash

    ddev composer create "typo3/cms-base-distribution:^12"

You now have a **Composer-based TYPO3 installation**.

Run the Installation Setup Tool
-------------------------------

Setup TYPO3 in the console
~~~~~~~~~~~~~~~~~~~~~~~~~~

..  versionadded:: 12.1
    Starting with TYPO3 12.1 a new CLI command `setup` is introduced as
    an alternative to the existing GUI-based web installer.

Interactive / guided setup (questions/answers):

..  code-block:: bash

    ddev typo3 setup

When prompted give the following answers to work with the default DDEV configuration:

..  code-block:: bash

    Which web server is used?
    > apache

    Database driver?
    > mysqli

    Enter the database "username" [default: db] ? db

    Enter the database "password" ? db

    Enter the database "port" [default: 3306] ? 3306

    Enter the database "host" [default: db] ? db

    Select which database to use:
    > db

Setup TYPO3 with the 1,2,3 Install Tool in the browser
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create a file called :file:`FIRST_INSTALL` in your webroot

..  code-block:: bash

    ddev exec touch public/FIRST_INSTALL

Open the installer

..  code-block:: bash

    ddev launch /typo3/install.php

Go to the TYPO3 backend:

..  code-block:: bash

    ddev launch /typo3

And login with the credentials you just provided.


Managing the Database
---------------------

:bash:`ddev start` automatically created a database for
you. DDEV also created the file :file:`config/system/additional.php`
in which it configured the database credentials for you.

Many database browsers, including phpMyAdmin, are available to let you browse the database, see `Database GUIs <https://ddev.readthedocs.io/en/stable/users/usage/database-management/#database-guis/>__`

Sending E-Mail
--------------

DDEV creates configuration in :file:`config/system/additional.php`
to capture sent mails. You can see what mails have been sent here:

..  code-block:: bash

    ddev launch -m

Stopping a DDEV Instance
------------------------

If you want to stop all projects from running you can call:

..  code-block:: bash

    ddev poweroff

The projects will stay configured and databases will be persisted.

Deleting a DDEV Instance
------------------------

If you want to delete the project you just created you can remove it by
calling the following command in your new projects root folder:

..  code-block:: bash

     ddev delete --omit-snapshot

This will remove all containers from the project and delete the database.

Afterwards you can safely delete the project's root folder.

DDEV Documentation
------------------

You will want to visit `DDEV's documentation <https://ddev.readthedocs.io/>__`,
which also has a `TYPO3 Quick Start <https://ddev.readthedocs.io/en/stable/users/quickstart/#typo3/>__`
which parallels this one.
