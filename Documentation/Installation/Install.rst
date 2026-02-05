:navigation-title: Installation
..  include:: /Includes.rst.txt
..  index:: installation, deployment, requirements

..  _install:

==========================
Installing TYPO3 with DDEV
==========================

This guide provides step-by-step instructions for installing TYPO3 using DDEV
and Composer.

If DDEV is not yet installed on your local machine, see
`Installing and using DDEV <https://docs.typo3.org/permalink/t3start:ddev>`_.

DDEV is intended for local development only.
To deploy your TYPO3 site to a production server, see:
`Deploying TYPO3 <https://docs.typo3.org/permalink/t3start:deployment>`_.

Throughout the Getting Started Tutorial, we assume that you are running TYPO3
locally with DDEV and have installed it using Composer.

For an overview of alternative installation methods, see the
`TYPO3 installation overview in the TYPO3 Explained manual <https://docs.typo3.org/permalink/t3coreapi:installation-index>`_.

..  contents:: Table of contents

..  _install-quick:

Quick Start: TYPO3 Installation with DDEV
==========================================

The following commands will create a new TYPO3 project, initialize DDEV, install
TYPO3 via Composer, and run the setup. Copy and paste them into your terminal.

..  code-block:: bash

    # Create project directory
    mkdir my_project && cd my_project

    # Initialize DDEV project
    ddev config --php-version 8.4 --docroot public --project-type typo3

    # Start DDEV
    ddev start

    # Install TYPO3 via Composer
    ddev composer create-project "typo3/cms-base-distribution:^14"

    # Recommended: Require the default theme
    ddev composer req typo3/theme-camino

    # Run TYPO3 CLI setup (database credentials are pre-filled)
    ddev typo3 setup --server-type=other --driver=mysqli --host=db --port=3306 --dbname=db --username=db --password=db

    # Open the Backend login in a browser
    ddev launch /typo3/

Next steps: `TYPO3 setup on first installation <https://docs.typo3.org/permalink/t3start:typo3-setup>`_

..  note::
    The directory that you run these commands in must be empty.
    Do not initialize Git or open the folder in an IDE before running the
    commands, as these may create files in the directory (for example hidden files).

..  _installation-ddev-tutorial:

Step-by-step: TYPO3 Installation with DDEV
==========================================

..  _installation-video:

Video: Installing TYPO3 with DDEV
----------------------------------

The video demonstrates how to install TYPO3 v11 LTS with DDEV.

Although TYPO3 v11 is outdated, the installation process is largely
the same for newer versions.

..  youtube:: HW7J3G1SqZw

..  _installation-empty-directory:

Create the installation directory
----------------------------------

Create an empty directory for your TYPO3 project and change into it:

..  code-block:: bash

    mkdir my_project
    cd my_project

..  note::
    The directory where you run the following commands must be empty.

    Do not initialize Git or open the folder in an IDE before running the
    commands, as these may create files in the directory (for example hidden files).

..  _installation-ddev-project:

Create a New DDEV Project
--------------------------

Initialize a new DDEV project. The ``ddev config`` command will prompt you for details of your setup.
TYPO3 is included in the list of preconfigured project types.

..  code-block:: bash

    ddev config --php-version 8.4 --docroot public --project-type typo3

Docroot Location
    The docroot is the folder containing the files accessible to the webserver,
    including the entry point :file:`index.php`. It is commonly named `public`.

    Do not change the docroot during this installation process. You
    can change it later if necessary, however most guides assume your docroot is
    called `public`.

Project Type
    Always set the project type to `typo3`.

..  _installation-ddev-start:

Start the DDEV
--------------

Start the DDEV project:

..  code-block:: bash

    ddev start

The webserver environment is now running, but TYPO3 is not yet installed.

..  _installation-typo3:

Install TYPO3
-------------

Install TYPO3 using Composer:

..  code-block:: bash

    ddev composer create-project "typo3/cms-base-distribution:^14"

    # Recommended: Require the default theme
    ddev composer req typo3/theme-camino

You now have a **Composer-based TYPO3 installation**.

..  _installation-typo3-default-theme:

Recommended: Require the default theme (Camino)
-----------------------------------------------

..  versionadded:: 14.1

    A default theme has been added to TYPO3.

When you are installing TYPO3 for the first time we recommend you use the
default theme, :composer:`typo3/theme-camino` shipped with the TYPO3 Core.
Its main purpose is to build new sites more rapidly in TYPO3 v14.

The theme is customizable in a limited way. It demonstrates basic page
structures as well as some default content elements.

You can create your own customized theme, also called
`site package <https://docs.typo3.org/permalink/t3start:creating-a-site-package>`_
later on.

..  code-block:: bash

    ddev composer req typo3/theme-camino

..  seealso::

    *   `TYPO3 Theme: Camino <https://docs.typo3.org/permalink/typo3-theme-camino:start>`_

Directory structure after composer installation
-----------------------------------------------

At this point, your project folder should contain the following files and directories:

..  code-block:: bash

    ~/projects/typo3/sites/my_project$ ls -a
    composer.json  composer.lock  config  .ddev  .gitignore  LICENSE  packages  public  README.md  vendor

Additional folders like :directory:`var` and subfolders like
:directory:`config/sites` will be created during the setup process.

..  _installation-setup:

Next steps: Setup TYPO3
-----------------------

At this point, important files and folders are still missing, and your database
does not yet contain any tables.

All of these will be created during the setup process.
For detailed instructions, see:
`TYPO3 setup on first installation <https://docs.typo3.org/permalink/t3start:typo3-setup>`_
