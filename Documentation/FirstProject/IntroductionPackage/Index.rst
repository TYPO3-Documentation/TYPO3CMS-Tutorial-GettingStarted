..  include:: /Includes.rst.txt

..  _introductionpackage-index:

====================
Introduction Package
====================

If you are using TYPO3 for the first time you may want to
see a working example of the CMS before you start work on
your own project.

..  contents::

..  _introductionpackage-about:

About the Introduction Package
==============================

The Official Introduction Package :composer:`typo3/cms-introduction`
showcases many of
TYPO3's capabilities and gives you the ability to try them first hand.
The Introduction Package utilizes the extension :composer:`bk2k/bootstrap-package`
to generate multiple responsive HTML templates that you can select and try
out.

It also features examples of the different kinds page content that you
typically see on a website, such as paragraphs of text, images, tables
and navigation menus.

..  _installing-introduction-package-prerequisites:

Prerequisites
=============

*   You should have a fresh TYPO3 installation, Composer-based and using DDEV
    as described here: :ref:`Installing TYPO3 with DDEV <t3start:installation-ddev-tutorial>`.
*   You should know about basic TYPO3 concepts such as
    :ref:`Backend <t3start:backend>` and :ref:`Frontend <t3start:frontend>`.
*   You need very basic knowledge about `DDEV <https://ddev.readthedocs.io/en/stable/>`__
    and `Composer <https://getcomposer.org/>`__.

..  _installing-introduction-package-with-composer:
..  _installing-distributions-wit-composer:

Installing the Introduction Package
===================================

To install the Introduction Package run the following command:

..  code-block:: bash

    ddev composer require typo3/cms-introduction

Then run:

..  code-block:: bash

    ddev typo3 extension:setup

This will set up the extension ready for immediate use.

..  _install-intro-first-steps:

First steps with the Introduction Package
=========================================

The "Introduction Package" creates a number of pre-built pages within the
page tree. The top level page is named "Congratulations".

The following DDEV command tells you how to open the
:ref:`Frontend <t3start:frontend>`:

..  code-block:: bash

    ddev describe

In section "All URLs" choose the first suggested URL and open it in a browser
of your choice. This could be for example: `https://my-first-project.ddev.site`

..  figure:: /Images/AutomaticScreenshots/Frontend/IntroductionPackageHome.png
    :class: with-shadow
    :alt: Screenshot of the front page of a TYPO3 project with introduction package installed

    Frontend of the TYPO3 Introduction Package

Open the backend of the site by adding `/typo3` to this URL, for example
`https://my-first-project.ddev.site/typo3` (This URL is configurable, if you
followed this guide it should however not have been changed yet:
:ref:`Backend entry point <t3coreapi:backend-entry-point>`).

..  figure:: /Images/AutomaticScreenshots/Frontend/IntroductionPackageHome.png
    :class: with-shadow
    :alt: Screenshot of the backend of a TYPO3 project with introduction package installed

    Backend of the TYPO3 Introduction Package

You can look and click around, try to change the content of the page etc.
The :ref:`Editors Guide <t3editors:start>` explains how to change the content
as an editor.

..  _install-intro-next-steps:

Next steps
==========

You can use this installation to improve your understanding of some of the
concepts of TYPO3:

*   Compare the directory structure that was generated and compare it with
    chapter :ref:`TYPO3 concepts: Project structure <t3start:project-structure>`.
*   The introduction package you just installed is a TYPO3 extension.
    The extension key is `introduction` and the Composer name is
    :composer:`typo3/cms-introduction` you can find its source code in
    directory :path:`vendor/typo3/cms-introduction` and have a look a the
    code, especially the :file:`vendor/typo3/cms-introduction/composer.json`
    Compare it with chapter :ref:`TYPO3 concepts: Extensions <t3start:concepts-extensions>`.
*   The introduction package depends on the third party extension
    "Bootstrap Package" with extension key `bootstrap_package` and Composer name
    :composer:`bk2k/bootstrap-package`. You can finde its code at
    :path:`vendor/bk2k/bootstrap-package`. This is a very complex example of
    what a generic site package that can be extended for specific sites looks
    like.
*   The introduction package only contained some data that was already loaded
    into your TYPO3 installation if the frontend worked. It is not needed
    anymore and can be uninstalled. See :ref:`uninstalling-extensions`.

Once you are ready for your first project start by
:ref:`Creating a site package <t3start:creating-a-site-package>`.
