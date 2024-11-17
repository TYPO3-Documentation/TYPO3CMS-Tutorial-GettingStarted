:navigation-title: TypoScript
..  include:: /Includes.rst.txt
..  _site-management-typoscript:

===================================
TypoScript module (Site management)
===================================

The TypoScript backend module can be used to debug your TypoScript configuration.

TypoScript is managed via database records, called "TypoScript
records". This module can
be used to manage TypoScript records. Its usage is described in
TypoScript Reference, chapter
:ref:`TypoScript backend module <t3tsref:typoscript-syntax-typoscript-templates-structure>`.

The TypoScript module consists of the following submodules. You can switch them
in the docheader:

..  figure:: /Images/ManualScreenshots/Modules/TypoScript.png
    :alt: Screenshot of the TypoScript module in the backend demonstrating the location of the submodule switch, a drop down in the document header

    Switch between the TypoScript submodules in

..  contents::

..  _site-management-typoscript-overview:

TypoScript Overview
===================

Global overview of all pages with active TypoScript definitions (TypoScript
records and site sets). Useful if you have more then one site or more then one
TypoScript record in one site.

..  _site-management-typoscript-constant-editor:

Constant Editor
===============

TypoScript constants are
used to define values once and reuse them across TypoScript definitions.

This editor can be used to edit Constants that have been defined in Extensions
with a special kind of comments. They are not widely supported anymore.

..  _site-management-typoscript-record-editor:

Edit TypoScript record
======================

Can be used to edit TypoScript records.

Its usage is described in the TypoScript reference,
chapter :ref:`Submodule "Edit TypoScript Record" <t3tsref:typoscript_module_edit>`.

..  _site-management-typoscript-active:

Active TypoScript
=================

This module can be used to debug the active TypoScript. During loading and
pre compiling TypoScript configuration can override or unset definitions made in
another file.

How exactly this happens depends on things like loading order.

For example if the TypoScript in your site package configures:

..  code-block:: typoscript
    :caption: EXT:site_package/Configuration/TypoScript/setup.typoscript

    page.20 = TEXT
    page.20.value = Apple

And the TypoScript of another extensions configures:

..  code-block:: typoscript
    :caption: EXT:some_extension/Configuration/TypoScript/setup.typoscript

    page.20 = TEXT
    page.20.value = Banana

It depends on how these includes are loaded weather the `page.20.value` ends up
being set to "Banana" or "Apple".

The module can also be used to simulate what happens if certain
:ref:`TypoScript Conditions <t3tsref:typoscript-syntax-implementing-custom-conditions>`
are being met or how site settings / TypoScript constants are replaced.

Chapter :ref:`Debug the TypoScript in the backend module "Active
TypoScript" <typoscript-active-debug>` demonstrates the usage of this module in
a concrete example.

..  _site-management-typoscript-included:

Included TypoScript
===================

This submodule is helpful in debugging in which order TypoScript files were
included and :ref:`@import <t3tsref:typoscript-syntax-import>` statements were
resolved.

This module is also described in the TypoScript reference, chapter
:ref:`Submodule "Included TypoScript" <t3tsref:typoscript-syntax-typoscript-templates-structure-analyzer>`.
