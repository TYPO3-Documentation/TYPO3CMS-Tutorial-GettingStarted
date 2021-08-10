.. include:: /Includes.rst.txt


.. _extensions_index:

=======================
Working With Extensions
=======================

.. _install-extension-with-composer:

Install an Extension With Composer
==================================

On the command line:

.. rst-class:: bignums

1. Find out the Composer package name and extension key of the extension:

   * :ref:`find-out-composer-package-name`
   * :ref:`find-out-extension-key`

2. Use `composer require`

   .. code-block:: shell

      composer require <packagename>

   For example:

   .. code-block:: shell

      composer require georgringer/news

   This will add the extension requirement to your :file:`composer.json`
   and install the extension.

   Whilst the extension is installed, it still needs to be activated before it can be used:

3. Activate

   .. code-block:: shell

      ./vendor/bin/typo3 extension:activate <extension key>

   For example:

   .. code-block:: shell

      ./vendor/bin/typo3 extension:activate news


Remove Extensions With Composer
===============================

see :ref:`composer-remove-extension`

.. _find-out-composer-package-name:

Find out Composer Package Name for an Extension
===============================================

Visit the `Extension Repository <https://extensions.typo3.org/>`__,
and search for the extension.

You should see the Composer command under :guilabel:`"Composer support"`,
for example `for the extension news <https://extensions.typo3.org/extension/news/>`__.

Here, the package name is `georgringer/news`.

.. figure:: ../Images/ter_news.png
   :class: with-shadow
   :alt: Detail view for extension "news"

   Detail view for extension "news"

Often the package name will be vendor + slash + extension key.
However, if the extension key contains an underscore, it is replaced
with a slash in the package name. Example for
`Extension Builder <https://extensions.typo3.org/extension/extension_builder/>`__:

* **extension key**: extension_builder
* **Composer package name**: friendsoftypo3/extension-builder

.. _composer-extension-dependencies:

Extension Dependencies
======================

This section is about finding out about extension dependencies for Composer installation.

When you install an extension, another extension may automatically have been installed
as is the case for the :ref:`installation of the Introduction Package <installing-introduction-package-with-composer>`:
The Introduction Package depends on the Bootstrap Package and this extension was also installed.

This is relevant, because after the installation, both need to be activated.

You can see the dependencies on https://packagist.org (for example for the
`Introduction Package <https://packagist.org/packages/typo3/cms-introduction>`__)
or in the composer.json file of the extension, for example:

:file:`public/typo3conf/ext/introduction/composer.json`:

.. this is json but results in warnings if lex "json" is used

.. code-block:: none

   "require": {
      "typo3/cms-core": "^9.5",
      "typo3/cms-impexp": "^9.5",
      "typo3/cms-form": "^9.5",
      "typo3/cms-indexed-search": "^9.5",
      "typo3/cms-felogin": "^9.5",
      "bk2k/bootstrap-package": "^10.0"
   },

Here, the package name is bk2k/bootstrap-package, but the extension key is bootstrap_package,
as is explained in :ref:`find-out-composer-package-name`.

.. tip::

   If you have installed TYPO3 with Composer, you should also
   :ref:`install extensions with Composer <install-extension-with-composer>`.

In the context of the TYPO3 extension manager ("EM"), the words "install" and "uninstall" differ from their mainstream
meaning. To avoid mixing these terms up with the other EM verbs, here is a clarification:

Import
  Downloading an extension from TER and copying it to :file:`typo3conf/ext/`.

Install
  Activating the already imported extension inside the extension manager and performing database changes mandated by the extension.

Uninstall
  Deactivating an extension, but leaving it on the disk.

Remove
  Deleting extension files permanently from disk.

.. _install-extension-without-composer:

Install an Extension Without Composer
=====================================

In the backend:

.. rst-class:: bignums

1. Go to :guilabel:`"ADMIN TOOLS" > "Extensions"`
2. In the Docheader, select :guilabel:`"Get Extensions"`

   .. figure:: ../Images/em_extensions.png
      :class: with-shadow
      :alt: Select "Get Extensions" in Extension Manager

      Select "Get Extensions" in Extension Manager

3. Click :guilabel:`"Update now"`

   The button is on the top right.


   .. figure:: ../Images/em_extensions_get.png
      :class: with-shadow
      :alt: Search for the extension and install

      Search for the extension and install


4. Enter the name of the extension in the search field
5. Click on :guilabel:`"Go"`
6. Click on the Action icon on the left for the extension:

   :guilabel:`"Import and Install"`

   Now the extension is installed, but not activated. To activate:

7. Choose :guilabel:`"Installed Extensions"` in the Docheader
8. Click on the icon with a :guilabel:`"+"` sign for your extension
   in the :guilabel:`"A/D"` column.

.. _uninstall_extension_without_composer:

Uninstall an Extension Without Composer
=======================================

If you installed TYPO3 via composer you should uninstall Extensions via composer.

Check Dependencies
------------------

First find out, which other extensions and functions of your TYPO3 installation are dependent on the extension you
want to uninstall. You can find out about the dependencies by checking the
`Extension Repository <https://extensions.typo3.org/>`__. Look for the extension
you want to uninstall and the others you have installed. Read in each extensions manual the sections 'Dependencies' and
'Reverse dependencies'.

Check whether any referrals have been made to the extension in any setup, config or other TypoScript files. Check if you
included a plugin from the extension in your web site. Think of the results of removing them and finally do it.

If you are working locally or on a test server you might as well try to uninstall the extension. The Extension Manager
warns you about dependencies that are written in an extensions :file:`ext_emconf.php` constraints section. Note however
that you depend on the extensions developers faithfully noting all dependencies in this config file.

If you get an exception and can't even access the Extension Manager anymore because of it, you can uninstall / install
extensions manually with :file:`PackageStates.php` as a last resort, see :ref:`uninstall-extension-manually`

.. tip::
   Be sure not to uninstall extensions by trial and error on production systems, especially not under time pressure.

.. _uninstall-extension-backend:

Uninstall / Deactivate Extension via TYPO3 Backend
--------------------------------------------------

.. figure:: ../Images/em-uninstall-extension.png
   :class: with-shadow
   :alt: Select "Deactivate" in Extension Manager

Log into the TYPO3 Backend and open the Extension Manager ('Ext Manager'). From the menu choose 'Install extensions'.
You get an overview about installed extensions.

On the left side you see an icon, which shows the status of each extension, and what you can do:

* Extension Install Icon with plus sign: The extension is not installed. (Click once to install)
* Extension Uninstall Icon with minus sign: The extension is installed and running. (Click once to uninstall)

Next to the extension you want to uninstall click on Extension UnInstall Icon. After some seconds the icon changes to
the grey Extension Install Icon.


.. _remove-extension-backend:

Remove an Extension via the TYPO3 Backend
--------------------------------------------------

.. figure:: ../Images/em-remove-extension.png
   :class: with-shadow
   :alt: Select "Remove" in Extension Manager

After successfully uninstalling an extension via the Extension Manager you can permanently remove the extension by
clicking on the waste-basket symbol "Remove" beside the extensions entry in the Extension Manager.

.. _uninstall-extension-manually:

Uninstalling an Extension Manually
----------------------------------

At times an extension causes a problem and the TYPO3 Backend can not be opened anymore due to it. In such a case the
extension can be uninstalled manually. This is not common practise but a last resort.

Since LTS8 this can be done by removing the extensions configuration from the file :file:`PackageStates.php`

.. rst-class:: bignums

#. Open the file :file:`typo3conf/PackageStates.php`
#. Search for your ext_key in the array.

   .. code-block:: php

      'ext_key' => [
            'packagePath' => 'typo3conf/ext/ext_key/',
        ],
      ...

#. Remove the entry.

It is no longer possible to remove an extension by setting :php:`'state' => 'inactive'` as was possible in LTS 6 and 7.

In LTS 6 and 7 this can be done by editing the file :file:`PackageStates.php`

.. rst-class:: bignums

#. Open the file :file:`typo3conf/PackageStates.php`
#. Search for your ext_key in the array.

   .. code-block:: php

      'ext_key' => [
         'composerName' => '...',
         'state' => 'active',
         'packagePath' => '.../',
         'suggestions' => [],
      ],
      ...

#. Change :php:`'state' => 'active'` to :php:`'state' => 'inactive'`


.. _remove-extension-manually:

Removing an Extension Manually
------------------------------
Removing an extension manually is not common practice and should only be done as a last resort. You should only remove
an extension that you uninstalled successfully. Make a backup first. Then you can permanently
remove an extension by removing its folder at :file:`typo3conf/ext/[extensionname]`. The corresponding database tables
can be removed in the :guilabel:`Install Tool -> Important Actions -> Database analyzer -> Compare current database
with specification`.

Additional Information
======================

The following is independent of whether you install with Composer or without.


.. _find-out-extension-key:

Find out the Extension Key for an Extension
-------------------------------------------

Again, go to the `Extension Repository <https://extensions.typo3.org/>`__,
and search for the extension.

.. figure:: ../Images/ter_news.png
   :class: with-shadow
   :alt: Detail view for extension "news"

   Detail view for extension "news"

The extension key is listed on the top. For the
`extension news <https://extensions.typo3.org/extension/news/>`__,
the extension key is `news`.

You can also see the extension key in your file system in the directory
:file:`public/typo3conf/ext/`. The directory name of the extension is the
same as the extension key.
