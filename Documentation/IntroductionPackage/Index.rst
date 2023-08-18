.. include:: /Includes.rst.txt


.. _introductionpackage_index:

====================
Introduction Package
====================

If you are using TYPO3 for the first time you may want to
see a working example of the CMS before you start work on
your own project.

The `Official Introduction Package
<https://extensions.typo3.org/extension/introduction/>`__ showcases many of
TYPO3's capabilities and gives you the ability to try them first hand.
The Introduction Package utilizes the `bootstrap_package extension
<https://extensions.typo3.org/extension/bootstrap_package/>`__
to generate multiple responsive HTML templates that you can select and try
out.

It also features examples of the different kinds page content that you
typically see on a website, such as paragraphs of text, images, tables
and navigation menus.

.. _installing-introduction-package-with-composer:
.. _installing-distributions-wit-composer:

Installing The Introduction Package
===================================

To install the Introduction Package run the following command:

.. tabs::

   .. group-tab:: bash

       .. code-block:: bash

         composer require typo3/cms-introduction

   .. group-tab:: powershell

       .. code-block:: powershell

         composer require typo3/cms-introduction

   .. group-tab:: ddev

       .. code-block:: bash

         ddev composer require typo3/cms-introduction

..  versionadded:: 11.5
    The extension can be set up afterwards by running the following command:

.. tabs::

   .. group-tab:: Composer-based installation

      .. code-block:: bash

         vendor/bin/typo3 extension:setup

   .. group-tab:: Legacy installation

      .. code-block:: bash

         typo3/sysext/core/bin/typo3 extension:setup

.. _install-intro-first-steps:

First steps with the Introduction Package
=========================================

The "Introduction Package" creates a number of pre-built pages within the page tree. The top level page is named "Congratulations".

.. rst-class:: bignums-xxl

#. Click on "Congratulations" in the page tree.


#. View the page in the frontend:

   Click on the :guilabel:`"View webpage"` icon (with an eye) to view the page
   in the frontend.

.. include:: ../Images/AutomaticScreenshots/Frontend/IntroductionPackageHome.rst.txt


