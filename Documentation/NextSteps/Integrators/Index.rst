.. include:: ../../Includes.txt


.. _next-steps-integrators:

===============
For Integrators
===============


.. tip::

   Read `TYPO3 CMS Certified Integrator <https://typo3.org/certification/integrator/>`__
   to learn what the TYPO3 Association defines as integrator.

If you want to learn how to professionally setup or maintain TYPO3 websites,
you can look at the following resources:

.. _site-handling:

Site and Language Handling
==========================

You can:

* setup several websites in one TYPO3 installation
* setup several languages for each site

Before TYPO3 9, it was necessary to setup the language configuration for each
site manually with TypoScript.

TYPO3 9 comes with a powerful site handling module which is document in
:ref:`t3coreapi:sitehandling`. This includes, setting up sites, language configuration
and URL handlling. Find out more about URL handling in the next section.

Even if you only use one language or only one site, it is recommended to setup
the site configuration. You can find it in the backend under :guilabel:`SITE MANAGEMENT`:
:guilabel:`Sites`.

.. image:: ../../Images/SiteManagement.png
   :class: with-shadow


.. _human-readable-urls:
.. _human-readable-url-s:

Human-readable URLs
===================

By default TYPO3 CMS identifies the page which should be delivered by the "?id"
parameter. Just enter *http://www.your-site.example.org/index.php?id=33* to get
the "Overview" page of the Introduction Package.

This is convenient but not good for visitors nor for proper referencing.

Starting with version 9.5, human-readable URLs are created automatically by TYPO3.
This functionality is available for pages, languages and also extensions.
The documentation is available in "TYPO3 Explained" :ref:`t3coreapi:sitehandling`.

Other tutorials like
`TYPO3 Worx: TYPO3 Site Management and Routing <https://typo3worx.eu/2018/10/typo3-site-management-and-routing/>`__
and
`TYPO3 Worx: TYPO3 Routing: Extensions and Enhancers <https://typo3worx.eu/2018/12/typo3-routing-extensions-and-enhancers/>`__
are also available.

For previous TYPO3 versions, this functionality was provided by third party extensions like
`realurl <https://extensions.typo3.org/extension/realurl/>`__.

Thus, the URL as mentioned earlier becomes for example
*http://www.your-site.example.org/content-examples/overview/*.



Create Your Own Sitepackage (Theme)
===================================

In this tutorial, you used the `Introduction Package <https://extensions.typo3.org/extension/introduction/>`__
which depends on and uses the
`Bootstrap Package <https://extensions.typo3.org/extension/bootstrap_package/>`__ extension.

The Introduction Package is a distribution. Find out more about distributions
in "TYPO3 Explained": :ref:`t3coreapi:distribution`.

The Introduction Package together with the Bootstrap Package provides
a frontend layout based on bootstrap, adds configuration
and creates some initial pages and content. While this is useful for quickly
setting up a full-blown TYPO3 website, you will probably want to create a
custom theme for your own site.

A good approach is to bundle everything for your site including a theme
and configuration into a sitepackage.

Read the :ref:`t3sitepackage:start` to learn how to do this.

Or watch this 3 part video series from the official TYPO3 YouTube channel:

.. youtube:: HtBmim7pc0o

   Tutorial - Site Packages - Part 1

* `Part 1 <https://www.youtube.com/watch?v=HtBmim7pc0o>`__
* `Part 2 <https://www.youtube.com/watch?v=deSMVfCSCXY>`__
* `Part 3 <https://www.youtube.com/watch?v=SEoWOBT0rQE>`__


TypoScript
==========

While the already mentioned :ref:`t3sitepackage:start` teaches you the TypoScript
you need to create a sitepackage, it is not a bad idea to get yourself a
TypoScript introduction.

:ref:`TypoScript in 45 Minutes <t3ts45:start>` guides you through the
basics of *TypoScript*.

Use the :ref:`TypoScript Reference <t3tsref:start>` as a reference.

Fluid
=====

In the :ref:`t3sitepackage:start` you will also have acquired a working knowledge
of Fluid, the templating engine. To learn more about Fluid, you may want to
use the following resources:

* `Fluid documentation <https://github.com/TYPO3/Fluid>`__: As Fluid itself can be
  used independently to TYPO3, it is developed outside of the TYPO3 project. This
  is the start page of the Fluid project.
* :ref:`t3extbasebook:fluid-start` in the "Extbase / Fluid Book"
* :ref:`t3viewhelper:start`

