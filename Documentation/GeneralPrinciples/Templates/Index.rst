.. include:: ../../Includes.txt


.. _templates:

=========
Templates
=========

After that overview of pages and content elements,
you may wonder how all this structure and content is turned into a
web site, complete with page layout, CSS and JavaScript files.

In TYPO3, this job is achieved using *templates* which can
be seen as a kind of configuration language called *TypoScript*.

The **WEB > Template** module provides an overview of the
TypoScript configuration and allows to work with "template records", 
which is where the TypoScript configuration is stored.

Here is a brief view of the *Template* module:

.. figure:: ../../Images/BackendTemplateModule.png
   :alt: The Template module showing the hierarchy of TypoScript templates
   :class: with-shadow


Templating itself is covered by other tutorials:

- the :ref:`TypoScript in 45 minutes Tutorial <t3ts45:start>` covers the basics of TypoScript
  and how to relate pages and content elements to an actual HTML output.

- the :ref:`t3sitepackage:start` and the :ref:`Templating Tutorial <t3templating:start>` guides you
  through the actual integration
  of HTML models into your TYPO3 CMS installation using TypoScript.


.. _facts-about-templates-and-possibilities:

Facts About Templates and Possibilities
=======================================

Here is a short list of the possibilities offered by
TYPO3 CMS templates:

- You can implement *any* design you like, the way you like.

- You can have any number of menu levels.

- You can have multiple sites, multiple templates. (Since TYPO3 9, the configuration
  of sites is handled in the site module, see :ref:`sitehandling` in "TYPO3 Explained")

- You can have pages in any number of languages.

- You can have multiple content areas (columns) on a page.

- You can integrate all kinds of external data sources through plugins
  written in PHP.

- You can add any number of web applications to run on various pages in
  TYPO3.

- You can extend pretty much anything with PHP.
