.. include:: ../Includes.txt


.. _Templating:

==========
Templating
==========

At this point, you should now be able to install and configure TYPO3 and be familiar with
its backend. It's fair to assume that at this point you might be wondering how you go about adding bespoke HTML templates
to your own TYPO3 project and you may have also noticed that the HTML, CSS and Javascript for the Introduction Package are
are not accessible in the backend.

Whilst this tutorial does not cover templating in TYPO3, this section is intended to answer both of these questions
and give you a brief introduction to TYPO3's templating engine and also discuss best practices for managing your sites
HTML templates, stylesheets and other assets.

.. _Introducing Fluid:


Introducing Fluid
=================

Fluid is TYPO3's templating engine. Fluid acts as the glue between your static HTML templates and the content you create in TYPO3's backend.

A typical Fluid template will contain HTML that defines the structure of your page and Fluid markers that call various types of dynamic content.

For example a simple web page that features a navigation menu, a few paragraphs of text and a company logo would contain three Fluid markers.

- One to insert the content element that contains our paragraphs of text.
- Another to call the Typoscript menu for our main navigation bar
- And a third to insert the company logo

Fluid's syntax is easy to learn and if you are already familiar with HTML then you are halfway there already.

Code example?



.. _Where are templates stored:

Where are templates stored
==========================

Fileadmin
=========

You "*can*" store your HTML templates in Fileadmin alongside your projects static content such as documents and images. This is a convenient way
of storing your files when you are starting out with Fluid. It is also very common to find templates stored in Fileadmin on older, legacy
TYPO3 projects.

However, using Fileadmin to store your templates comes with considerable drawbacks. The main issue being that you cannot prevent backend users
from accessing and potentially deleting your sites HTML templates with no easy ability in place to retrieve the files once they are deleted.


Sitepackages
============

Sitepackages are a convenient way of bundling your sites HTML,CSS and other assets into a single, reusable extension that prevents
unauthorised access. By using Sitepackages we can:

- Move all of our assets into a single extension, meaning they can be managed more easily in version control with multiple contributors.
- Store our templates alongside other Extensions in the ext/ directory, preventing backend users from accessing them.
- Install our Sitepackage using a one click installation process, making it easier to deploy across multiple instances.


.. _Further Reading:

Further Reading
===============

