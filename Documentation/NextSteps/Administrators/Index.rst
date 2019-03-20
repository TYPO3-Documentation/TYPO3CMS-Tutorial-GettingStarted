.. include:: ../../Includes.txt


.. _next-steps-administrators:
.. _next-steps-integrators:

===============
For Integrators
===============

What Is An Integrator?
======================

The TYPO3 Association defines a `TYPO3 CMS Certified Integrator <https://typo3.org/certification/integrator/>`__
as follows:

"The TYPO3 CMS Certified Integrator develops the template for a website,
configures all the necessary extensions and creates the access rights
for backend users. The TYPO3 CMS Certified Integrator does not install
TYPO3 on the web server and does not program extensions.

The TYPO3 CMS Certified Integrator knows how to configure the
pre-installed TYPO3 using the installer."


Creating Your Own Sitepackage (Theme)
=====================================

In this tutorial, you used the `Introduction Package <https://extensions.typo3.org/extension/introduction/>`__
which depends on and uses the
`Bootstrap Package <https://extensions.typo3.org/extension/bootstrap_package/>`__ extension.

The Introduction Package is a distribution. Find out more about distributions
in "TYPO3 Explained": :ref:`t3api:distribution`.

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

References
==========

See the :ref:`list of references <next-steps-references>`.