.. include:: /Includes.rst.txt

.. index:: resetting password, new password, new user

.. _troubleshooting_typo3:

=====
TYPO3
=====

Resetting Passwords
===================

.. _backend-admin-password:

Backend Administrator Password
------------------------------

When the password for a backend user needs to be reset, log into the backend as a
different user and use the :guilabel:`System > Backend Users` tool to reset
the password. Note that only backend users with administrative rights can
access the `Backend Users` tool to make this change.

If an alternative administrator account is not available or it doesn't have the
appropriate access, open the Install Tool directly
using the following address to create a new administrative user::

   https://examle.com/typo3/install.php

The Install Tool requires the "Installation Password" that would have been set
when TYPO3 was installed.

.. include:: ../Images/AutomaticScreenshots/InstallTool/InstallToolPassword.rst.txt

Once logged in to the Admin Tool go to :guilabel:`Maintenance > Create Administrative User`
and select :guilabel:`Create Administrator`. Here you
can create a new administrative user.

.. include:: ../Images/AutomaticScreenshots/BackendUsers/CreateAdministrator.rst.txt

.. include:: ../Images/AutomaticScreenshots/BackendUsers/CreateAdministratorForm.rst.txt

Use this new administrator account to log into the TYPO3 backend. In the module
:guilabel:`Backend Users` you can change the passwords of existing users,
including administrators.

.. _install-tool-password:

Install Tool Password
---------------------

Write access to :file:`typo3conf/LocalConfiguration.php` is required to reset the
Install Tool password.

Before editing this file, visit::

   https://examle.com/typo3/install.php


Enter the new password in the dialog box. As the new password is not correct,
the following response will be returned::

   "Given password does not match the install tool login password. Calculated hash:
   $argon2i$v=xyz"

Copy this hash including the :php:`$argon2i` part and any trailing dots.

Then edit :file:`typo3conf/LocalConfiguration.php` and replace the following
array entry with the new hashed password::

   'BE' => [
      'installToolPassword' => '$argon2i$v=xyz',
   ],

.. note::

   If the new install tool password does not work, check if it gets overridden
   later in LocalConfiguration.php or in AdditionalConfiguration.php
   if either of these files exists. If you still cannot log into the install tool check if
   there are errors in the logs when debugging is enabled.

.. _debug-mode:

Debug Settings
==============

During troubleshooting, in the :guilabel:`"Settings > Configuration Presets"`
section of the Install Tool, under "Debug settings", the "Debug" preset can be
changed to show errors in the frontend.

.. include:: ../Images/AutomaticScreenshots/DebugSettings/ConfigurationPresets.rst.txt

.. include:: ../Images/AutomaticScreenshots/DebugSettings/DebugSettings.rst.txt

The following TypoScript setting can also be added to the root template for
the site to show additional debugging information.
This is particularly useful when debugging Fluid errors:

.. code-block:: typoscript

   config.contentObjectExceptionHandler = 0

.. seealso::

   :ref:`t3coreapi:error-handling-configuration-examples-debug`

.. important::

   Once debugging has been completed, remove any debug TypoScript and
   set Debug back to 'Live'.

Additionally, the following logs should be checked for additional information:

*  Webserver log files for general problems (e.g. :file:`/var/log/apache2` or :file:`/var/log/httpd` on
   Linux based systems)
*  TYPO3 Administration log in :guilabel:`SYSTEM > Log` via TYPO3's backend.
*  TYPO3 logs written by the :ref:`Logging Framework <t3coreapi:logging>` located in :file:`var/log` 
   or :file:`typo3temp/var/log` depending on the installation setup.

.. _troubleshooting-caching:

Caching
=======

Cached Files in typo3temp/
--------------------------

TYPO3 generates temporary "cached" files and PHP scripts in :file:`<var-path>/cache/`
(either :file:`typo3temp/var/cache` or :file:`var/cache` depending on the installation).
You can remove the entire :file:`<var-path>/cache` directory at any time; the directory
structure and all the caches will be re-written the next time a visitor
accesses the site.

A shortcut to remove these caches can be found in the :guilabel:`Install Tool`,
under :guilabel:`Important Actions`. This might be useful in the event of your
cache files becoming damaged and your system not running correctly. The
Install Tool won't load any of these caches or any extensions, so it
should be safe to use regardless of the corrupt state of the caches.

Amongst other caches, under :file:`<var-path>/cache/code/core/`
you will find::

   -rw-rw----   1 www-data   www-data   61555  2014-03-26 16:28   ext_localconf_8b0519db6112697cceedb50296df89b0ce04ff70.php
   -rw-rw----   1 www-data   www-data   81995  2014-03-26 16:28   ext_tables_c3638687920118a92ab652cbf23a9ca69d4a6469.php

These files contain all :file:`ext\_tables.php` and
:file:`ext\_localconf.php` files of the installed extensions
concatenated in their loading order. Therefore including one of
these files would be the same as including potentially hundreds of PHP
files and should improve performance.



.. _possible-problems-with-the-cached-files:

Possible Problems With the Cached Files
---------------------------------------

.. _changing-the-absolute-path-to-typo3:

Changing the absolute path to TYPO3
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you change the path of the TYPO3 installation, you might receive
errors like "Failed opening ..." or "Unable to access ...". The
problem is that absolute file paths are hard-coded inside the cached
files.

Fix: Clean the cache using the Install Tool: Go to "Important Actions"
and use the "Clear all caches" function. Then hit the page again.


.. _changing-image-processing-settings:

Changing Image Processing Settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When you change the settings for Image Processing (in normal mode),
you must take into account that old images may still be in the
:file:`typo3temp/` folder and that they prevent new files from being
generated! This is especially important to know if you are trying to
set up image processing for the first time.

The problem is solved by clearing the files in the :file:`typo3temp/`
folder. Also make sure you clear the database table "cache\_pages".
