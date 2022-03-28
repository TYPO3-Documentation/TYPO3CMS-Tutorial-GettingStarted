.. include:: /Includes.rst.txt


.. _next-steps-developers:

==============
For Developers
==============

.. _next-steps-developers-extbase:
.. _next-steps-developers-fluid:

Fluid / Extbase
===============

To find out more about Templating using Fluid and building your own extensions
in Extbase, the following resources are recommended:

* book: `Michael Schams: "TYPO3 Extbase: Modern Extension
  Development for TYPO3 CMS with Extbase & Fluid"
  <https://www.extbase-book.org/>`__ (3rd edition for TYPO3 9, not official documentation)
* online resource: :doc:`t3extbasebook:Index` (official documentation, but partly outdated)

.. important::
   Note that currently, the online resource :doc:`t3extbasebook:Index`
   may be partly outdated. The `TYPO3 Extbase and Fluid book, 3rd edition
   <https://www.extbase-book.org/>`__ by Michael Schams was just released,
   so it should be up to date.

You may also want to refer to the
`Fluid ViewHelper reference <https://docs.typo3.org/typo3cms/ViewHelperReference/>`__
once you work with Fluid.

TYPO3 Explained
===============

"TYPO3 Explained" is part of the official documentation on docs.typo3.org.

It is an extensive resource that aims to gives you an introduction to
TYPO3, its extension architecture and a detailed outline of its API.
The API Overview covers more than just the public functions of TYPO3, it also
explains the concepts and how to use core functionality.

It is (in most parts) well maintained.

* Introduction: :ref:`t3coreapi:overview`
* :ref:`t3coreapi:extension-architecture` (You should read the entire chapter except
  for "Creating a Distribution")
* :ref:`t3coreapi:api-overview`: Start with the first chapter listed. Some of the
  sections listed in "TYPO3 Explained" are for specific use cases, which you might
  never need. We list a
  few chapters that explain general concepts, that you should definitely read.
  This is not a complete list:

  * :ref:`t3coreapi:directory-structure` : general directory structure of a TYPO3
    installation
  * :ref:`t3coreapi:namespaces`
  * :ref:`t3coreapi:globals`
  * :ref:`t3coreapi:tce`

Extension Builder
=================

See :ref:`t3coreapi:extension-create-new`. It contains a description of how to
create a new extension with the Extension Builder.

References
==========

There are a number of dedicated
references for TCA, TSconfig, TypoScript and Fluid. Have a look in this
list:

* :ref:`next-steps-references`.

You will definitely need these, if you want to get serious about developing
for TYPO3.


Extensions
==========

You can also look at existing extensions to see how other developers
have built their extensions.

All (publicly available) third party extensions are listed in the
`TYPO3 Extension Repository <https://extensions.typo3.org/?tx_solr%5Bfilter%5D%5B0%5D=typo3%3A9+LTS>`__.

You can do a search, and then click on "Code Insights" to go to the code
repository.

.. important::

   Make sure to always choose an extension that supports the TYPO3 version
   you are using. So, if you are using TYPO3 9, restrict your search to
   extensions, that already support TYPO3 9.

   TYPO3 has gone through several large changes between each major version, so be
   sure to look at code and documentation for your current version.

.. figure:: ../../Images/search-ter.png
   :class: with-shadow
   :alt: search in TER

   Search in TYPO3 Extension Repository for extensions that support version 9.

Some extensions that are already used as examples in the documentation are:

For Developing Backend Modules:
-------------------------------

Styleguide
~~~~~~~~~~

* **Source:** `TYPO3 CMS Backend Styleguide <https://github.com/TYPO3/styleguide/tree/9>`__
* **Important:**  Do not let the notice "Outdated extension" in the `TYPO3 Extension Repository
  <https://extensions.typo3.org/extension/styleguide/>`__ confuse you. It is not
  outdated and you can use it by installing it!
* **Description:** "Presents
  most supported styles for TYPO3 backend modules.
  Mocks typography, tables, forms, buttons, flash messages and helpers.
  More at https://github.com/7elix/TYPO3.CMS.Styleguide."
* The **extension key** is **styleguide**.
* `Installation <https://github.com/TYPO3/styleguide#installation>`__


Look at the Core Source-Code
============================

Of course, you can also look at the TYPO3 source code.

For online browsing, you can use `GitHub <https://github.com/typo3/typo3/tree/9.5>`__.

Again, make sure to look in the correct branch for your version.

Not Found What You Were Looking For?
=====================================

.. tip::

   You can also go to the
   :ref:`slack` channel **#typo3-cms** and ask for recommendations about what
   to read for your particular task.
