.. include:: /Includes.rst.txt

.. index:: installation; Tutorial DDEV

.. _installation-ddev-tutorial:

=============================================
Tutorial "Installing TYPO3 v11 LTS with DDEV"
=============================================

We show you step-by-step how to install TYPO3 on a local machine utilizing
DDEV, Docker and Composer.

..  youtube:: HW7J3G1SqZw

.. contents::
   :local:

Preparations to install DDev
============================

Do the following steps if DDEV is not installed on your system yet:

..  rst-class:: bignums-xxl

#.  Install Docker

    Go to `the Docker website <https://www.docker.com/>`__ and install the
    version of Docker recommended for your operation system.

#.  Install DDEV

    Follow the steps at `Get Started with
    DDEV <https://ddev.readthedocs.io/en/stable/>`__ for your operation
    system.

..  hint::
    If you need help installing DDEV, go to the
    `DDEV Discord server <https://discord.gg/kDvSFBSZfs>`__.

Install TYPO3 in DDEV
=====================

..  rst-class:: bignums-xxl

#.  Create a directory to install your TYPO3 in

    ..  code-block:: bash

        mkdir t3example
        cd t3example

#.  Create a preconfigured DDEV project

    .. rst-class:: bignums-warning

    a.  By answering the prompt (easier to do by heart):

        ..  code-block:: bash

            ddev config

            # Give the following answers when prompted:

            Project name (t3example):

            Docroot Location (current directory): public

            Create docroot at /home/myuser/projects/t3/t3example/public? [Y/n] (yes): Y

            Project Type [php, typo3, ...] (php): typo3

    b.  Or by supplying the parameters (easier to do automatically):

        ..  code-block:: bash

            ddev config  --project-type=typo3 --docroot=public --create-docroot

    project-type
        Should always be "typo3"

    docroot
        Is the folder in which all files that have to be reached by
        the browser. This folder is commonly called :file:`public`.

    create-docroot
        As the directory does not exist yet allow DDEV to create it for you.

#.  Start the project

    ..  code-block:: bash

        ddev start

    Now the webserver is running but TYPO3 is not installed yet.

#.  Install a basic installation of TYPO3

    ..  code-block:: bash

        ddev composer create "typo3/cms-base-distribution:^11"

    As we just created the project and have no data there yet, answer yes
    when prompted if it is ok to overwrite most files in this directory.

    ..  note::
        You now have a **Composer-based TYPO3 installation**. In case anyone
        asks you.

#.  Run the install tool setup

    .. rst-class:: bignums-warning

    a.  You can do this from console:

        ..  code-block:: bash

            ddev typo3cms install:setup

        When prompted enter a username and password for you main admin user
        (who is also system maintainer).

        And enter a name for the site that will be displayed in the backend.

        You can set up a very basic site :bash:`site` displaying "Hello World"
        or just do nothing :bash:`no`.

    b.  Or via GUI:

        #.  Create a file called FIRST_INSTALL in your webroot

            ..  code-block:: bash

                ddev exec touch public/FIRST_INSTALL

        #.  Open the installer

            ..  code-block:: bash

                ddev launch typo3/install.php

#.  Go to the TYPO3 backend:

    ..  code-block:: bash

        ddev launch typo3

    And login with the credentials you just created.


What about the database?
========================

Upon calling :bash:`ddev config` DDEV automatically created a database for
you. DDEV also created a file :file:`public/typo3conf/AdditionalConfiguration.php`
in which it stored the credentials for you.

During the installation setup process TYPO3 created all the tables needed by
default. If you want to have a look at the database, you can find it here:

..  code-block:: bash

    ddev launch -p

What about sending mails?
=========================

DDEV preconfigured the :file:`public/typo3conf/AdditionalConfiguration.php`
to fake sending mails. You can see what mails have been send here:

..  code-block:: bash

    ddev launch -m

How do I get rid of that project now?
=====================================

If you want to all projects from running on DDEV you can call:

..  code-block:: bash

    ddev poweroff

The projects will stay configured and the database persisted.

If you want to delete the project you just deleted you can delete it by
calling the following in your new projects root folder:

..  code-block:: bash

     ddev delete --omit-snapshot

..  attention::
    This will remove all containers from the project and delete the database.

Afterwards you can safely delete the projects root folder.
