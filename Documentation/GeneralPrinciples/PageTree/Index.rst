.. include:: ../../Includes.txt


.. _page-tree:

=========
Page Tree
=========

.. sectionauthor:: name <email>

The page tree represents the hierarchical structure of your pages. In
most cases this corresponds exactly to the navigation structure
of your web site. The page tree can be expanded by clicking
the little arrows on the left of the items.

.. rst-class:: bignums


1. :ref:`Enter the backend <backend-login>` and select the page module

   Click on **WEB** > **Page** now.

2. Look at the page tree in the backend:

   For example, click on the arrow next to the page called "Congratulations",
   and then "Content Examples".

   Your page tree should look like this:

   .. figure:: ../../Images/BackendPageTree.png
      :alt: The page tree with the "Content Examples" page expanded
      :class: with-shadow


3. View page in the frontend:

   To view the page in the frontend, click on the :guilabel:`View webpage`
   icon in the Docheader.

   .. figure:: ../../Images/ViewWebpage.png
      :alt: View current page in the frontend
      :class: with-shadow

4. Now take a look at the navigation in the frontend.

   Click on :guilabel:`CONTENT EXAMPLES` in the main menu on top and then
   select :guilabel:`Media` from the sub-menu:

   .. figure:: ../../Images/FrontendPage.png
      :alt: Frontend of the Introduction Package
      :class: with-shadow


The main menu on top of your web site corresponds to the first
level menu pages in the page tree. The sub-menu of the :guilabel:`"Content Examples"`
page in the frontend corresponds to the entries beneath "Content Examples" in the page tree.

Working With the Page Tree
==========================

Remember the components of the backend from the :ref:`previous page <general-backend-structure>`?

.. figure:: ../../Images/BackendAreasOverview.png
   :alt: Overview of the whole TYPO3 CMS backend
   :scale: 50
   :class: with-shadow

We will now look at some components of the page tree a little more closely:


Root page
   The page with the world icon represents the root of your web site.
   There may be several web sites per TYPO3 installation.
   The top node with the TYPO3 logo is a special container which is used
   to store very general information.

.. figure:: ../../Images/RootPage.png
   :alt: Frontend of the Introduction Package
   :class: with-shadow

Modules:
   may display the page tree or not. The presence of the page tree
   implies that the module reacts to the selection of a page in the page tree.

Content area:
   A click on the page title opens that page in the content area on
   the right. Hovering over the icon of a page will display its internal id.

Context menu:
   1. A click on the page icon will open the context menu. 2. **Or**, you
   can right click the whole page title.

   .. figure:: ../../Images/BackendContextMenu.png
      :alt: Page tree with opened context menu
      :class: with-shadow


.. _the-context-menu:

The Context Menu
================

The context menu of a page can be used to access most of the
page-related functions the fast way. Here is what these options do:

- **Show**: Opens the page you clicked in the browser (frontend)

- **Edit**: Lets you edit the page properties

- **New**: Lets you create a new page or new content

- **Info**: Displays information about the page

- **Copy**: Copies the page

- **Cut**: Cuts the page

- **Disable**: Disables the page (so it isn't accessible from the frontend
  anymore)

- **Delete**: Deletes the page

- **History/Undo**: Shows the change history of the page (who did which
  changes when)

- **Branch Actions**: Actions related to the whole branch

  - **More options ... > Export**: Opens the export tool and preselects the selected page

  - **More options ... > Import**: Opens the import tool and preselects the selected
    page


.. _the-view-module:

The View Module
===============

It is also possible to view a page directly in the backend, by selecting the View module,
which also offers the possibility to preview a page in different screen sizes, thanks
to the drop-down menu at the top.

.. figure:: ../../Images/BackendViewModule.png
   :alt: Viewing a page directly in the backend
   :class: with-shadow

.. _collapse-page-tree:

Collapsing the Page Tree
========================

The page tree can be collapsed to gain screen space, by clicking on the second icon
on the left in the top bar.

.. figure:: ../../Images/BackendCollapsePageTree.png
   :alt: Click there to collapse or expand the page tree
   :class: with-shadow

   Collapse or expand the page tree


.. _editing-pages:

Editing Pages
=============

Modifying an existing page or adding a new one is covered in the
:ref:`Editors Tutorial <t3editors:pages>`.

Next we will look at how content is placed on pages.
