:navigation-title: Administrator

..  include:: /Includes.rst.txt
..  _backend-users-admin:

===========================
TYPO3 backend administrator
===========================

Each administrator that uses the TYPO3 backend should have their own personal
backend user account. This allows you to see who made which changes later on.

The administrator account that was automatically created for you during
`Installation <https://docs.typo3.org/permalink/t3start:installation-index>`_
has the widest rights possible and is a System Maintainer. The System Maintainer
is an Administrator who can also see and use the section
`System maintainer area <https://docs.typo3.org/permalink/t3start:system-maintainer-area>`_
in the backend.

..  tip::
    If your backend user account does not seem to work for some reason, check
    chapter `Troubleshooting common TYPO3 backend login
    problems <https://docs.typo3.org/permalink/t3start:troubleshooting-backend-login>`_.

..  contents:: Table of Contents
    :local:
    :depth: 1

..  _backend-users-admin-creation:

Creating a TYPO3 backend administrator
======================================

There are 3 ways to create a new TYPO3 backend administrator:

..  contents:: Table of Contents
    :local:
    :depth: 1

..  _backend-users-admin-cli:

Create an administrator using a console command
-----------------------------------------------

In DDEV or on a server if you can use the console there is a console
command to create a new administrator:

..  tabs::

    ..  group-tab:: DDEV

        ..  code-block:: bash

            ddev typo3 backend:user:create

    ..  group-tab:: On server

        ..  code-block:: bash

            vendor/bin/typo3 backend:user:create

When prompted answer that you want to create an administrator. If they should
also be a system maintainer, answer yes during the prompt.

..  _backend-users-admin-backend-module:

Using the backend module "Backend Users" to create admins
---------------------------------------------------------

The first administrator got created for you during
`Installation <https://docs.typo3.org/permalink/t3start:installation-index>`_.

When you log into the backend (See `Backend login <https://docs.typo3.org/permalink/t3start:backend-login>`_)
you can go to module `Administration > Users <https://docs.typo3.org/permalink/t3start:administration-modules-backend-users>`_
and create a new administrator there.

..  figure:: /Images/ManualScreenshots/BackendUser/CreateUser.png
    :zoom: gallery
    :alt: Screenshot of the "Backend Users" module demonstrating the location of the "Create new backend user" button in the module header

    Open the module :guilabel:`Administration > Users` and click on "Create new backend user"

When creating the user check the "Admin" option:

..  figure:: /Images/ManualScreenshots/BackendUser/CreateAdmin.png
    :zoom: gallery
    :alt: The Admin option is the first option in the tab "General" in the backend user edit form

    When you check the Admin option the form needs to reload once. Answer the dialogue with "OK".

You can :ref:`Grant System Maintainer rights <backend-users-system-maintainer>`
in module :guilabel:`System > Maintenance` later on.

..  _backend-users-admin-install-tool:

Using the Install Tool to create an administrator
-------------------------------------------------

Access the Install Tool at `https://my-site.ddev.site/typo3/install.php` using
the Install Tool password defined during the installation process.

..  figure:: /Images/ManualScreenshots/BackendUser/InstallTool.png
    :zoom: gallery
    :alt: The Install Tool: Create Administrative User, Create new administrative users and grant them system maintainer privileges (optional).

    In the module "Maintenance" module use the button "Create Administrator".

If they should be a System Maintainer check the box.

..  _backend-users-system-maintainer:

Granting System Maintainer rights
=================================

..  note::
    You must be logged in with a System Maintainer account or use the
    Install Tool to grant System Maintainer rights. In
    `Application context Development <https://docs.typo3.org/permalink/t3start:application-context>`_
    all backend administrators can use the module.

..  versionchanged:: 14.0
    This module has been moved from :guilabel:`Admin tools` to :guilabel:`System`
	see `Feature: #107628 - Improved backend module naming and structure <https://docs.typo3.org/permalink/changelog:feature-107628-1729026000>`_.

Using the module :guilabel:`System > Settings` and card
"Manage System Maintainers Access" you can manage which administrator accounts
should be granted "System Maintainer" rights.

..  figure:: /Images/ManualScreenshots/BackendUser/ManageSystemMaintainers.png
    :zoom: gallery
    :alt: "Manage System Maintainers" window in the module System > Settings.

    Disabled backend admins are marked with [DISABLED], you can choose them any way.

On saving the changes are written to file :file:`config/system/settings.php`
therefore this file needs to be writable.

If your installation also has a file called :file:`config/system/additional.php`
the settings can be overridden here. In this case changes you make in the
module :guilabel:`System > Settings` do not take effect.

A setting overriding the System Maintainer list could look like this:

..  code-block:: php
    :caption: config/system/additional.php

    $GLOBALS['TYPO3_CONF_VARS']['SYS']['systemMaintainers'] => [
        1,
        3,
        42
    ];

This setting is also documented in
:ref:`systemMaintainers <t3coreapi:confval-globals-typo3-conf-vars-sys-systemmaintainers>`.
