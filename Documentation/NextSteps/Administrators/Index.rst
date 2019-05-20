.. include:: ../../Includes.txt


.. _next-steps-administrators:
.. _next-steps-integrators:

===============
For Integrators
===============

The role of a TYPO3 Integrator is that of someone who's responsibilities 
include the installation, configuration and ongoing maintenance of a TYPO3
based website.

Below are several examples of common tasks required By Integrators.

.. tip::

   Visit the `TYPO3 CMS Certified Integrator <https://typo3.org/certification/integrator/>`__
   page to find out more about what is required to become an certified TYPO3 CMS Integrator.

.. _site-handling:

Site and Language Handling
==========================

You can:

* setup several websites in one TYPO3 installation
* setup several languages for each site

TYPO3 9 comes with a powerful site handling module which is documented in
:ref:`t3coreapi:sitehandling`. This module allows you to set up multiple sites 
in a single instance of TYPO3, configure multiple languages for your site and 
it also manages URL handling for your sites. 

You can find out more about URL handling in the next section.

Even if you use one language or only one site in your project, it is recommended you visit
the site handling module. You can find it in the backend under :guilabel:`SITE MANAGEMENT`:
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

Other tutorials include
`TYPO3 Worx: TYPO3 Site Management and Routing <https://typo3worx.eu/2018/10/typo3-site-management-and-routing/>`__
and
`TYPO3 Worx: TYPO3 Routing: Extensions and Enhancers <https://typo3worx.eu/2018/12/typo3-routing-extensions-and-enhancers/>`__
are also available.

For previous TYPO3 versions, this functionality was provided by third party extensions such as
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
a frontend layout based on Bootstrap, which is preconfigured
and creates some example pages with content. While this is useful for quickly
setting up a demo website, you will probably want to create a
custom theme for your own site.

A good approach is to bundle everything for your site including a theme
and configuration into a sitepackage.

Read the :ref:`t3sitepackage:start` to learn how to do this.

Or watch this three part video series from the official TYPO3 YouTube channel:

.. youtube:: HtBmim7pc0o

   Tutorial - Site Packages - Part 1

* `Part 1 <https://www.youtube.com/watch?v=HtBmim7pc0o>`__
* `Part 2 <https://www.youtube.com/watch?v=deSMVfCSCXY>`__
* `Part 3 <https://www.youtube.com/watch?v=SEoWOBT0rQE>`__


TypoScript
==========

While the :ref:`t3sitepackage:start` teaches you the TypoScript 
required to create a sitepackage, it is not a bad idea to get yourself 
more familiar with TypoScript first.

:ref:`TypoScript in 45 Minutes <t3ts45:start>` guides you through the
basics of *TypoScript*.

Use the :ref:`TypoScript Reference <t3tsref:start>` as a reference.

Fluid
=====

In the :ref:`t3sitepackage:start` you will also have acquired a working knowledge
of Fluid, the templating engine. To learn more about Fluid, you can visit 
the following resources:

* `Fluid documentation <https://github.com/TYPO3/Fluid>`__: As Fluid itself can be
  used independently to TYPO3, it is developed outside of the TYPO3 project. This
  is the start page of the Fluid project.
* :ref:`t3extbasebook:fluid-start` in the "Extbase / Fluid Book"
* :ref:`t3viewhelper:start`
