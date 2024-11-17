:navigation-title: Page module
.. include:: /Includes.rst.txt
.. _page-content:

==============================
"Page" backend module in TYPO3
==============================

The :guilabel:`Web > Page` module is used by the editors of the site to add
and modify content elements on the page.

The Editors Guide, chapter :ref:`Content Elements <t3editors:content-elements>`,
covers practical topics on how to work with content.

..  contents:: Topics related to the page module

.. _page-layout:

Page layout / backend layout
============================

Within the Page module there can be one or more areas (also called columns)
in which content can be added. The columns to be displayed in the backend
are defined via page TSconfig in a so-called backend layout, sometimes also
called page layout. The site package tutorial describes how page layouts
can be configured and used: :ref:`Page layouts with page
TSconfig <t3sitepackage:content-mapping-backend-layout>`.

The topic is also covered in-depth in the TSconfig Reference,
chapter :ref:`Backend layouts <t3tsconfig:backend-layouts>`.

.. _page-new-content:

The "New Page Content" wizard
=============================

..  figure:: /Images/ManualScreenshots/Backend/NewPageContentWizard.png
    :alt: Screenshot of a "New page content" wizard in a standard TYPO3 installation

    The "New page content" wizard

When an editor adds a new content element to the page the "New Page Content"
wizard is displayed. Available :ref:`content elements <page-content-elements>` and
:ref:`plugins <page-plugins>` are ordered into groups.

You can use the page TSconfig setting
:ref:`mod.wizard.newContentElement.wizardItems <t3tsconfig:pagenewcontentelementwizard>`
to hide or edit content elements displayed here. For example you can hide the
"HTML" content element supplied by :composer:`typo3/cms-fluid-styled-content`:

..  code-block:: typoscript
    :caption: EXT:site_package/Configuration/page.tsconfig

    mod.wizards.newContentElement.wizardItems {
        special.removeItems := addToList(html)
    }

.. _page-content-elements:

Content elements
================

You can use the community extension :composer:`friendsoftypo3/content-blocks` to
define additional content elements. Many third party extensions like
:composer:`bk2k/bootstrap-package` offer pre-defined content elements or, like
:composer:`georgringer/news` :ref:`plugins <page-plugins>`.

New content elements can also be created without relying on third party
extensions. You need basic knowledge on :ref:`tca`, :ref:`typoscript`, and
:ref:`templating with Fluid <fluid-templates>`. You have to use PHP for some
basic configurations but need no in-depth knowledge of programming.

See :ref:`create a custom content element type <t3coreapi:adding-your-own-content-elements>`.

.. _page-plugins:

Plugins
=======

A plugin is a special kind of content element. It typically provides dynamic or
interactive functionality. Many third party extensions offer ready to use
plugins for a wide range of functionality. For example plugins to display news:
:composer:`georgringer/news`, plugins to perform searches:
:composer:`apache-solr-for-typo3/solr`, to display Open Street maps:
:composer:`wsr/myleaflet`, event management with registration:
:composer:`derhansen/sf-event-mgt-contentelements` and many more.

The chapter :ref:`how-to-find-extensions` covers searching for suitable extensions.

Usually a PHP class called a "controller" manages
the functionality and display of the plugin. To create a custom plugin you
need some experience in PHP programming and dealing with databases etc.

..  note::
    In TYPO3 a plugin is a special type of content element that can be added to
    a page to provide complex functionality.

    Other content management systems like wordpress use the word "plugin" to
    describe what we call an :ref:`extension <concepts-extensions>` in TYPO3.
