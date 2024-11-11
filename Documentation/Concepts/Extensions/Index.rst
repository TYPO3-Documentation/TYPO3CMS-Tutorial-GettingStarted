:navigation-title: Extensions
..  include:: /Includes.rst.txt

..  _concepts-extensions:

==========
Extensions
==========

Extensions are pieces of software developed by the TYPO3 community that extend
the functionality of a TYPO3 installation. Extensions come in many forms.
Some are only used for one site and contain mainly the theme of that site.
These extensions are called a :ref:`site package <creating-a-site-package>`.

..  contents::

..  _concepts-extensions-composer:

Extension vs Composer package
=============================

If you have worked with other PHP based projects you have probably run across
`Composer packages <https://dev.to/joemoses33/create-a-composer-package-how-to-29kn>`__.

Each TYPO3 extension is a Composer package of type `typo3-cms-extension`.
Extensions provided by the TYPO3 Core have type `typo3-cms-framework`.

The minimum needed to define a TYPO3 extension is:

A directory containing a file called :file:`composer.json` with at least
the following data:

..  code-block:: yaml
    :caption: packages/my_extension/composer.json

    {
        "name": "myvendor/my-extension",
        "type": "typo3-cms-extension",
        "require": {
            "typo3/cms-core": "^13.4",
        },
        "extra": {
            "typo3/cms": {
                "extension-key": "my_extension"
            }
        }
    }

In order to be used the Extension should be
:ref:`installed via Composer <installing-extensions>`.

There is a legacy way to
:ref:`install extensions without Composer <t3coreapi:extensions-legacy-management>` but it
is not recommended anymore and not covered in this Guide. For this legacy way of
installation as well as for functional tests or to publish your extension your
need a file called :ref:`ext_emconf.php <t3coreapi:ext_emconf-php>`. This topic
is also not covered here.

..  _concepts-extensions-plugin:

Extension vs plugin
===================

A TYPO3 extension is a similar concept to what is called a "Plugin" in WordPress.

In TYPO3 a **plugin** is a **content element** that can be inserted into one or
all pages, typically providing dynamic or interactive functionality.

The data to be displayed is usually supplied by a special PHP class called a
"controller".

One **TYPO3 extension** can provide several plugins - or none at all.

See also: :ref:`Plugins in TYPO3 (TYPO3 explained) <t3coreapi:plugins>`.

Therefore in TYPO3 extensions and plugins are different concepts.

..  _concepts-extensions-types:

Types of extensions
===================

Internally the TYPO3 Core consists of mandatory and optional **system extensions**
each of them is a Composer package. All mandatory system extensions and a few
recommended ones will be automatically installed during the
:ref:`Installation <t3start:installation-ddev-tutorial>`. Optional system
extensions can be installed via Composer or the Extension Manager in classic mode

**Third party extensions** offer additional functionality. Find commonly used
extensions in the list of
:ref:`Recommended Extensions <t3start:recommended-extensions>`. There are
extensions available for many different use cases, see also chapter
:ref:`How to find extensions <t3start:how-to-find-extensions>`.

A **site package** is an extension that you install locally and only in your
project. It contains the templates and assets as well as configuration for your
theme. It can also contain specialized plugins or other pieces of software used
only in this one project.
