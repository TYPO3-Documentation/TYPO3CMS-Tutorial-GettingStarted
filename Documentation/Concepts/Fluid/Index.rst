..  include:: /Includes.rst.txt
..  highlight:: html

..  _fluid-templates:

===============
Fluid templates
===============

..  todo: This chapter was moved from the site package tutorial:
    Overhaul and improve

..  _quick-introduction-to-fluid:

Quick Introduction to Fluid
===========================

Like many other templating engines, Fluid reads *template files*,
processes them and replaces certain variables and specific tags with dynamic
content. The result is a fully working website with a clean and valid HTML
output. Dynamic elements are automatically updated as required. Navigation
menus are a typical example for this type of content. A menu exists on all
pages across the entire website. Whenever pages are added, deleted or renamed,
the menu items change.

Fluid takes modern templating a step further. By using *ViewHelpers*,
developers can implement complex functionality and therefore extend the
original functionality of Fluid to their heart's content. ViewHelpers are built
in the programming language PHP. Having said that, website integrators or
editors are not required to learn or understand these (this is the
responsibility of a software developer). Integrators only need to **apply**
them -- and this is as easy as adding an HTML tag such as :html:`<image.../>` to an
HTML file.

More than 80 ViewHelpers are shipped with the TYPO3 core already. They enable
integrators and web developers to use translations of variables, generate forms
and dynamic links, resize images, embed other HTML files and even implement
logical functions such as :html:`if ... then ... else ...`. An overview of the
available ViewHelpers and how to apply them can be found in the
:doc:`Fluid ViewHelper reference <t3viewhelper:Index>`.


..  _ft-directory-structure:

Directory structure
===================

Fluid requires a specific directory structure to store the template files. If
you are working through this tutorial now, this is a perfect time to create the
first set of folders of the site package extension. The initial directory can
be named :file:`site_package/`, which we assume is located on your local
machine. You can also choose a different name such as "site_example" or
"site_clientname", but this tutorial uses "site_package".

The aforementioned folders for Fluid are all located as sub-directories of a
folder called :file:`Resources/`. Therefore, create the directory structure as
listed below.

..  directory-tree::
    :level: 4
    :show-file-icons: true

    *   EXT:my_sitepackage

        *   Resources

            *   Private

                *   Language

                *   Templates

                    *   Layouts

                    *   Pages

                    *   Partials

            *   Public

                *   Css

                *   Images

                *   JavaScript

                *   StaticTemplate

The :file:`Public/` directory branch is self-explanatory: it contains folders
such as :file:`Css/`, :file:`Images/`, :file:`JavaScript/` and
:file:`StaticTemplate/`. All files in these folders will be delivered to the
user (website visitors) *as they are*. These are **static** files which are not
modified by TYPO3 at all before they are sent to the user.

The :file:`Private/` directory with its two sub-folders :file:`Language/` and
:file:`Templates/` in contrast, requires some explanation.

..  _fluid-templates-folders-under-private:

Folders under 'Private/'
------------------------

..  _fluid-templates-folders-under-private-templates-layouts:

Templates/Layouts
~~~~~~~~~~~~~~~~~
HTML files, which build the overall *layout* of the website, are stored in the
:file:`Layouts/` folder. Typically this is only **one** construct for all
pages across the entire website. Pages can have different layouts of course,
but *page layouts* do not belong into the :file:`Layouts/` directory. They are
stored in the :file:`Templates/Pages/` directory (see below). In other words, the
:file:`Layouts/` directory should contain the global layout for the entire website
with elements which appear on all pages (e.g. the company logo, navigation
menu, footer area, etc.). This is the skeleton of your website.

..  _fluid-templates-folders-under-private-templates-pages:

Templates/Pages
~~~~~~~~~~~~~~~
The most important fact about HTML files in the :file:`Templates/Pages` directory
has been described above already: this folder contains layouts, which are page-
specific. Due to the fact that a website usually consists of a number of pages
and some pages possibly show a different layout than others (e.g. number of
columns), the :file:`Templates/Pages/` directory may contain one or multiple HTML files.

..  _fluid-templates-folders-under-private-templates-partials:

Templates/Partials
~~~~~~~~~~~~~~~~~~
The directory called :file:`Partials/` may contain small
snippets of HTML template files. "Partials" are similar to templates, but their
purpose is to represent small units, which are perfect to fulfil recurring
tasks. A good example of a partial is a specially styled box with content that
may appear on several pages. If this box would be part of a page layout, it
would be implemented in one or more HTML files inside the :file:`Templates/Pages/`
directory. If an adjustment of the box is required at one point in the future,
this would mean that several template files need to be updated. However, if we
store the HTML code of the box as a small HTML snippet into the :file:`Partials/`
directory, we can include this snippet at several places. An adjustment only
requires an update of the partial and therefore in one file only.

The use of partials is optional, whereas files in the :file:`Layouts/` and
:file:`Templates/Pages` directories are mandatory for a typical sitepackage
extension.

The sitepackage extension described in this tutorial focuses on the
implementation of pages, rather than specific content elements.

..  _fluid-templates-folders-under-private-language:

Language
~~~~~~~~
The directory :file:`Language/` may contain :file:`.xlf` files that are used for
the localization of labels and text strings (frontend as well as backend) by
TYPO3. This topic is not strictly related to the Fluid template engine and is
documented in section
:ref:`Internationalization and Localization <t3coreapi:internationalization>`.

..  _fluid-in-depth:

Fluid in depth
================

..  card-grid::
    :columns: 1
    :columns-md: 2
    :gap: 4
    :class: pb-4
    :card-height: 100

    ..  card:: :doc:`ViewHelper reference <t3viewhelper:Index>`

        *   Official reference
        *   Complete list of available ViewHelpers
        *   In depth information on ViewHelper

    ..  card:: :ref:`Introduction to Fluid <t3coreapi:fluid-introduction>`

        *   Official reference
        *   Complete list of available ViewHelpers
        *   In depth information on ViewHelper
