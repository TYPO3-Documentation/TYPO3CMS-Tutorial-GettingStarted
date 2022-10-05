.. include:: /Includes.rst.txt

.. index:: installation; Tutorial DDEV

.. _installation-ddev-tutorial:

==========================
Installing TYPO3 with DDEV
==========================

This is a step-by-step guide detailing how to install TYPO3 using DDEV, Docker and Composer.

DDEV is used for local development only.

The scripts used in this guide will install TYPO3 v12.0 which is the latest release of the CMS. If you wish to
install the long term support (LTS) release of TYPO3, visit the :ref:`TYPO3 v11
Installation instructions <t3start11:install>`.

..  youtube:: HW7J3G1SqZw

Pre-Installation Checklist
--------------------------

#. **Install Docker** - Visit `docker.com <https://www.docker.com/>`__ to download and install the recommended version of Docker for your operating system.

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

    ddev config --php-version 8.1

    # Give the following answers when prompted:

    Project name (t3example):

    Docroot Location (current directory): public

    Create docroot at /home/myuser/projects/t3/t3example/public? [Y/n] (yes): Y

    Project Type [php, typo3, ...] (php): typo3

project-type
    Should always be "typo3"

docroot
    Is the folder in which all files that have to be reached by
    the browser. This folder is commonly called :file:`public`.

create-docroot
    As the directory does not exist yet, this allows DDEV to create it for you.

Alternatively you can skip the prompt by supplying all of the required parameters in a single command:

..  code-block:: bash

    ddev config  --project-type=typo3 --docroot=public --create-docroot --php-version 8.1

Start the project
-----------------

..  code-block:: bash

    ddev start

The webserver is now running but TYPO3 is not installed.

Install TYPO3
-------------

..  code-block:: bash

    ddev composer create "typo3/cms-base-distribution:^12"

As we just created the project and have no, answer yes
when prompted if it is ok to overwrite files in this directory.

You now have a **Composer-based TYPO3 installation**.

Run the Installation Setup Tool
-------------------------------

Create a file called :file:`FIRST_INSTALL` in your webroot

..  code-block:: bash

    ddev exec touch public/FIRST_INSTALL

Open the installer

..  code-block:: bash

    ddev launch typo3/install.php

Go to the TYPO3 backend:

..  code-block:: bash

    ddev launch typo3

And login with the credentials you just provided.


Managing the Database
---------------------

Upon calling :bash:`ddev config` DDEV automatically created a database for
you. DDEV also created a file called :file:`public/typo3conf/AdditionalConfiguration.php`
in which it stored the database credentials for you.

During the installation setup process TYPO3 created all the tables it needed. If you want to have a look at the database, you can run the following command:

..  code-block:: bash

    ddev launch -p

Sending E-Mail
--------------

DDEV creates :file:`public/typo3conf/AdditionalConfiguration.php`
to fake sending mails. You can see what mails have been sent here:

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
