..  include:: /Includes.rst.txt
..  _admin-tools:

===========
Admin Tools
===========

In the :ref:`User Management <t3coreapi:user-management>` chapter we covered the
*Access* and *Backend Users* module. In this section we take a look
at the remaining modules.

The following modules are available in a full TYPO3 installation:

..  toctree::
    :glob:
    :titlesonly:

    Maintenance
    Settings
    Upgrade
    Environment
    ContentSecurityPolicy
    Extensions

..  contents::

..  _admin-tools-access:

Accessing the Admin Tools
=========================

The Admin Tools can only be accessed from the backend if:

*   :composer:`typo3/cms-install` is installed. This system extension became
    optional with TYPO3 13.
*   The currently logged in backend user has admin privileges and is a system
    maintainer.
*   On systems in the :ref:`application context "Production" <production-settings>`
    the user has to reconfirm their login.

If the TYPO3 backend is not accessible you can access the "Install Tool", which
features the Admin Tool modules provided by :composer:`typo3/cms-install`:

..  _install-tools-access:

Accessing the Install Tools without TYPO3 Backend access
========================================================

On any TYPO3 installation with :composer:`typo3/cms-install` you can access the
Install Tools by calling the following URL: `https://example.org/typo3/index.php`.

To prove that you have writing access to the file system where TYPO3 is installed
you **have to** create a file in path :file:`var/transient/ENABLE_INSTALL_TOOL`
or :file:`config/ENABLE_INSTALL_TOOL`. The file can be empty, TYPO3 has to have
write access to the file. You can create it like this on:

..  code-block:: bash

    touch config/ENABLE_INSTALL_TOOL

See also :ref:`TYPO3 Explained, ENABLE_INSTALL_TOOL <t3coreapi:file-config-enable-install-tool>`.

You **must** now enter the Install Tool password.

..  versionadded:: 14.0
    You can now set a new Install Tool password using the console command
    `vendor/bin/typo3 install:password:set <https://docs.typo3.org/permalink/t3coreapi:console-command-install-password-set>`_.

You can set a new Install Tool password using the console command (recommended)
`vendor/bin/typo3 install:password:set <https://docs.typo3.org/permalink/t3coreapi:console-command-install-password-set>`_:

..  tabs::

    ..   group-tab:: Composer-mode

        ..  code-block:: bash

            vendor/bin/typo3 install:password:set

    ..  group-tab:: Classic mode

        ..  code-block:: bash

            typo3/sysext/core/bin/typo3 install:password:set

    ..  group-tab:: DDEV

        ..  code-block:: bash

            ddev typo3 install:password:set

Or you can also set a new password by entering the desired password on the
Install Tool login page, then copy the calculated hash:

..  figure:: /Images/ManualScreenshots/AdminTools/InstallToolHash.png
    :alt: Screenshot demonstrating copying the calculated hash in the install tool

    Copy the calculated hash

Open file :file:`config/system/settings.php` and adjust the Install tool
password like so:

..  code-block:: diff
    :caption: config/system/settings.php (Difference)

     <?php
     return [
         'BE' => [
    -        'installToolPassword' => '$argon2i$v=19$m=65536,t=16,p=1$Z1BRbnZDdGx4T3pJVmpLVw$Bjhz+rSW1Bps5hIdXUBXrtlZ52E4Qx4lw4NU0MiEUyg',
    +        'installToolPassword' => '$argon2i$v=19$m=65536,t=16,p=1$Z0tiZjVVdzN5VUEuLzhmYw$xTalKXJVMCALCO+0OklDt24Y/7NkffNc1bOeg2jo00I',
             'passwordHashing' => [
                 'className' => 'TYPO3\\CMS\\Core\\Crypto\\PasswordHashing\\Argon2iPasswordHash',
                 'options' => [],
             ],
         ],
     ];
