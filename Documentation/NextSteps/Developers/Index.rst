.. include:: ../../Includes.txt


.. _next-steps-developers:

==============
For Developers
==============



Extbase / Fluid
===============

For learning extension development with the Extbase framework and the templating
engine Fluid you can use one of these resources:

* online resource: :ref:`t3extbasebook:start` (partly outdated)
* book: `Michael Schams, Patrick Lobacher: "TYPO3 Extbase: Modern Extension
  Development for TYPO3 CMS with Extbase & Fluid"
  <https://www.amazon.com/dp/1530534178/?tag=stackoverfl08-20>`__ (for TYPO3 7)


.. important::
   Note that the current edition of the book is for TYPO3 7. The online
   resource is partly outdated. So, at the moment we must discourage
   you from using these Extbase / Fluid resources, unfortunately.

You can start with the resources in "TYPO3 Explained" in the
next section.

TYPO3 Explained
===============

"TYPO3 Explained" is part of the official documentation on docs.typo3.org.

It is an extensive resource, which gives you an introduction to
TYPO3, the extension architecture and then features a reference in the API
Overview. The API Overview is actually more than an overview of the public
functions of TYPO3 and explains the concepts and how to use the core functionality
quite well.

It is (in most parts) well maintained.

* Introduction: :ref:`t3api:overview`
* :ref:`t3api:extension-architecture` (You should read the entire chapter except
  for "Creating a Distribution")
* :ref:`t3api:api-overview`: Start with the first chapters listed. Some of the
  things listed in "TYPO3 Explained" are for specific use cases, which you might
  never need. We list a
  few chapters that explain general concepts, that you should definitely read.
  This is not a complete lists:

  * :ref:`t3api:directory-structure` : general directory structure of a TYPO3
    installation
  * :ref:`t3api:namespaces`
  * :ref:`t3api:globals`
  * :ref:`t3api:tce`

Extension Builder
=================

See :ref:`t3api:extension-create-new`. It contains a description of how to
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

You can also look at existing extensions to see how others
do things.

All (publicly available) third party extensions are listed in the
`TYPO3 Extension Repository <https://extensions.typo3.org/?tx_solr%5Bfilter%5D%5B0%5D=typo3%3A9+LTS>`__.

You can do a search, and then click on "Code Insights" to go to the code
repository.

.. important::

   Make sure to always choose an extension that supports the TYPO3 version
   you are using. So, if you are using TYPO3 9, restrict your search to
   extensions, that already support TYPO3 9!

   TYPO3 has gone through quite some changes between major versions, so be
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

For online browsing, you can use `GitHub <https://github.com/TYPO3/TYPO3.CMS/tree/9.5>`__.

Again, make sure to look in the correct branch for your version.

Not Found What You Were Looking For?
=====================================

.. tip::

   You can also go to the
   :ref:`slack` channel **#typo3-cms** and ask for recommendations about what
   to read for your particular task.


