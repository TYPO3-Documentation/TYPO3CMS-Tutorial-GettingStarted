.. include:: /Includes.rst.txt

.. index:: fluid, templating, site package

.. _next-steps:

==============================
Next Steps and Further Reading
==============================

Once TYPO3 is installed, it is now possible to start the process of developing
the site's visual appearance and creating pages and content inside the CMS.

`Building The Sites Structure And Adding Content <https://docs.typo3.org/m/typo3/tutorial-editors/10.4/en-us/>`__
=================================================================================================================

Using the Page tree - start to define the structure of your site by creating pages.

Pages can exist in various forms and can also be nested inside one and other.

Once the page structure exists content can now be added to the pages.

Developing The Sites Visual Appearance
======================================

There are two main topics that cover templating in TYPO3, Fluid and Site packages.

`Fluid Templating <https://docs.typo3.org/m/typo3/tutorial-sitepackage/master/en-us/FluidTemplates/Index.html>`__
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Fluid is TYPO3’s templating engine. Fluid acts as the link between a project's
static HTML templates and the content that is created in TYPO3’s backend.

`Site Packages <https://docs.typo3.org/m/typo3/tutorial-sitepackage/master/en-us/Index.html>`__
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Site packages are a type of extension that act as a storage point for a projects
frontend assets and any configuration files that extend or change
the behaviour of a TYPO3 installation.

Before the development of a sites visual appearance or "theme" can start, a Site
package needs to be created in order to store frontend assets such as
Fluid/HTML,CSS,Javascript files. Once they are located within a Site package they
can then be loaded by TYPO3 to render the frontend.

Keep Security In Mind
=====================

Security is taken very seriously by the developers of TYPO3. The
`TYPO3 Security Team <http://typo3.org/teams/security/>`_ manage all security
incidents. They review them and consider their impact. Security advisories
are regularly published.

More information about security can be found in the
:ref:`t3coreapi:security`.