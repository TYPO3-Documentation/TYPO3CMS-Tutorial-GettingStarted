.. include:: ../Includes.txt

.. _typo3:

=====
TYPO3
=====

Resetting Passwords
===================


Backend Administrative User Passwords
-----------------------------------

When the password for a backend user needs to be reset, log into the backend with an
alternative user and use the :guilabel:`System > Backend Users` tool to reset the users password. Note that only
backend users with administrative rights can access the `Backend Users` tool to make this change.

If an alternative administrator account is not available or it doesn't have the appropriate access, the Install Tool can be accessed directly
using the following address to create a new administrative user::

   https://examle.com/typo3/install.php

The Install Tool requires the "Installation Password" that would have been set when TYPO3 was installed.

Once logged in to the Admin Tool go to :guilabel:`Maintenance > Create Administrative User`
and select :guilabel:`Create Administrator`. In this dialogue you
can create a new administrative user.

Use this new administrator account to log into the TYPO3 backend. In the module
:guilabel:`Backend Users` you can change the passwords of existing users,
including administrators.

Install Tool Password
---------------------

Write access to :file:`typo3conf/LocalConfiguration.php` is required to reset the
Install Tool password.

Before editing this file, visit::

   https://examle.com/typo3/install.php


Enter the new password into the dialogue box. As the new password is not correct, the following response will be returned::

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
   later in the LocalConfiguration.php or in the AdditionalConfiguration.php
   if one exists. If you can still not log into the install tool check if
   there are errors in the logs when debugging is enabled.

Debug Settings
==============

During troubleshooting, in the :guilabel:`"Settings > Configuration Presets"` section of the Install
Tool, under "Debug settings", the "Debug" preset can be change to show errors in the frontend.

The following TypoScript setting can also be added the the root template for the site to show additional debug information.
This is particularly useful when debugging Fluid errors:

.. code-block:: typoscript

   config.contentObjectExceptionHandler = 0

.. seealso::

   :ref:`t3coreapi:error-handling-configuration-examples-debug`

.. important::

   Once debugging has been completed, make sure to remove any debug Typoscript and
   set Debug setting back to 'Live'.

Additionally, the following logs should be checked for additional information:

* Webserver log files for general problems (e.g. :file:`/var/log/apache2` on
  Linux based system)
* TYPO3 Administration log in :guilabel:`SYSTEM > Log` (in the backend)
* TYPO3 logs writting by :ref:`Logging Framework <t3coreapi:logging>` in :file:`typo3temp/var/log`

Caching
=======

Cached Files in typo3temp/
--------------------------

TYPO3 generates temporary "cached" files and PHP scripts in :file:`<var-path>/cache/` (either
`typo3temp/var/cache` or `var/cache` depending on the installation). You can remove the
entire :file:`<var-path>/cache` directory at any time; the directory
structure and all the caches will be re-written on the next time a visitor accesses the site.

A shortcut to remove these caches can be found in the Install Tool,
under "Important Actions". This might be useful in the event your
cache files become damaged and your system is not running correctly. The
Install Tool won't load any of these caches or any extension, so it
should be safe to use regardless of the corrupt state of the Caches.

Amongst other caches, under :file:`<var-path>/cache/code/core/`
you will find::

   -rw-rw----   1 www-data   www-data   61555  2014-03-26 16:28   ext_localconf_8b0519db6112697cceedb50296df89b0ce04ff70.php
   -rw-rw----   1 www-data   www-data   81995  2014-03-26 16:28   ext_tables_c3638687920118a92ab652cbf23a9ca69d4a6469.php

These files contain all :file:`ext\_tables.php` and
:file:`ext\_localconf.php` files of the installed extensions
concatenated in the order they are loaded. Therefore including one of
these files would be the same as including potentially hundreds of PHP
files and should improve performance.



.. _possible-problems-with-the-cached-files:

Possible Problems With the Cached Files
---------------------------------------

.. _changing-the-absolute-path-to-typo3:

Changing the absolute path to TYPO3
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you change the path of the TYPO3 installation, you might receive similar
errors that include "Failed opening ..." or "Unable to access ...". The
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
generated! This is especially important to know, if you are trying to
set up image processing for the very first time.

The problem is solved by clearing the files in the :file:`typo3temp/`
folder. Also make sure to clear the database table "cache\_pages".
