:navigation-title: TypoScript
..  include:: /Includes.rst.txt
..  _site-management-typoscript:

===================================
TypoScript module (Site management)
===================================

The TypoScript backend module can be used to debug the TypoScript configuration
that you provided via your site as described in
:ref:`"Hello world" example in TypoScript <t3start:typoscript-hello-world>`
or via your site set as described in the Site Package Tutorial, chapter
:ref:`The TypoScript-only version <t3sitepackage:make-typoscript-available>`.

Before TYPO3 v13 TypoScript was managed via database records, called "TypoScript
records". It is still possible doing this and you will see it in older examples
or installations that have been updated and not refactored. This module can
also be used to manage TypoScript records. Its usage is described in
TypoScript Reference, chapter
:ref:`TypoScript backend module <t3tsref:typoscript-syntax-typoscript-templates-structure>`.

In the context of this guide we concentrate on the new way of providing TypoScript
via the site only.

The TypoScript module consists of the following submodules. You can switch them
in the docheader:

..  figure:: /Images/ManualScreenshots/Modules/TypoScript.png
    :zoom: lightbox
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

Before site settings were introduced with TYPO3 13, TypoScript constants where
used to define values once and reuse them across TypoScript definitions.

Constants can still be used for backward compatibility reasons but the
Constant Editor is not available if you are using site sets. Other
then site settings, TypoScript constants are only available within TypoScript.

It is therefore recommended to always use site settings.

..  _site-management-typoscript-record-editor:

Edit TypoScript record
======================

Only available if TypoScript records are being used. Can be used to edit those
records. As we manage TypoScript within the site in this Guide it is out of
scope of this Guide. Its usage is described in the TypoScript reference,
chapter :ref:`Submodule "Edit TypoScript Record" <t3tsref:typoscript_module_edit>`.

..  _site-management-typoscript-active:

Active TypoScript
=================

This module can be used to debug the active TypoScript. During loading and
pre compiling TypoScript configuration can override or unset definitions made in
another file.

How exactly this happens depends on things like dependencies between the used
site sets.

For example if a site set in your site package configures:

..  code-block:: typoscript
    :caption: EXT:site_package/Configuration/Sets/SitePackage/setup.typoscript

    page.20 = TEXT
    page.20.value = Apple

And the set of another extensions configures:

..  code-block:: typoscript
    :caption: EXT:some_extension/Configuration/Sets/BananaSet/setup.typoscript

    page.20 = TEXT
    page.20.value = Banana

It depends on how these sets are loaded weather the `page.20.value` ends up
being set to "Banana" or "Apple".

If the site set of our site package **depends** on the Banana set, the
SitePackage set **overrides** the Banana set and the Active TypoScript submodule
will show you the value "Apple" while it never mentions Banana.

This module therefore shows you the compiled version of the TypoScript.

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

If the "Banana" from the example in :ref:`site-management-typoscript-active`
was overridden, you can use this module to find out where it might have been
overridden.

This module is also described in the TypoScript reference, chapter
:ref:`Submodule "Included TypoScript" <t3tsref:typoscript-syntax-typoscript-templates-structure-analyzer>`.
