.. include:: /Includes.rst.txt

.. _extensions_management:

===================
Managing Extensions
===================

Both system extensions and third-party extensions are managed using Composer. Composer handles
the installation of the extension and also installs any dependencies that may be
required. Composer is also used to uninstall extensions.

.. _install-extension-with-composer:

Installing extensions
=====================

Find the Composer package name for an extension
-----------------------------------------------

Visit the `Extension Repository <https://extensions.typo3.org/>`__,
and search for the extension.

On the extension page , under :guilabel:`"Composer support"`,
will be the Composer command required to install that extension.

For example, the `news extension <https://extensions.typo3.org/extension/news/>`__
has the package name `georgringer/news`.

Typically the package name will be vendor + slash + extension key.
However, if the extension key contains an underscore, it is replaced
with a dash in the package name. For example:
`Extension Builder <https://extensions.typo3.org/extension/extension_builder/>`__:

* **extension key**: `extension_builder`
* **vendor**: `friendsoftypo3`
* **Composer package name**: `friendsoftypo3/extension-builder`


Use :bash:`composer require` to install the extension
-----------------------------------------------------

.. code-block:: shell

  composer require <packagename>

To install the news extension:

.. code-block:: shell

  composer require georgringer/news

This will add the extension requirement to the installations :file:`composer.json`
and install the extension.

Whilst the extension is installed and activated automatically, it still needs to be set up before it can be used:

Setup the extension
-------------------

.. code-block:: shell

   ./vendor/bin/typo3 extension:setup

The extension setup command takes care of executing additional installation procedures, such as database migrations and
clearing caches if necessary. The extension setup command is not specific to a single extension but instead looks at the overall
state and executes all necessary steps.

Uninstalling extensions
=======================

The composer command `remove` uninstalls an extension.

.. code-block:: shell

   composer remove georgringer/news

The updated :file:`composer.lock` file needs to be committed to the version
control system.

.. _install_local_extensions_using_composer:

Installing local extensions
===========================

Local extensions including sitepackages and custom extensions also need to be
installed using Composer.

Custom extensions should be placed in a dedicated, local directory: `documentroot/packages`.

Once this directory exists, update the installations `composer.json` and add this directory
as a new repository:

.. code-block:: json

     {
         "repositories": [
             {
                 "type": "path",
                 "url": "./packages/*/"
             },
         ],
     }

Then run `composer require` to the install the local extension `my-local-extension` with vendor `vendor`:

.. code-block:: shell

   composer require vendor/my-local-extension:@dev

By executing this command, Composer locates `vendor/my-local-extension` and then symlinks
it to `typo3conf/ext/my-local-extension` once `composer install` is executed.
The setup from above defines that the extension is to be placed by composer into the folder `:file:packages/my-local-extension`
if it has not been already there.


Additional information
======================

.. _find-out-extension-key:

Find out the extension key for an extension
-------------------------------------------

For any installed extension, the extension key can be found by looking at the
file system into the directory :file:`public/typo3conf/ext/`.
The directory name of the extension is the same as the extension key.

Before installing an extension, the extension key can be found on its' page in the
`TYPO3 Extension Repository (TER) <https://extensions.typo3.org/>`__.

The extension key is listed on the top. For the
`extension news <https://extensions.typo3.org/extension/news/>`__,
the extension key is `news`.
