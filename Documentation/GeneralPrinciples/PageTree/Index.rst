.. include:: /Includes.rst.txt
.. index:: Backend; Page tree
.. _page-tree:

=========
Page tree
=========

.. sectionauthor:: name <email>

The page tree represents the hierarchical structure of your site and its pages. In
most cases this corresponds exactly to the navigation structure
of your web site. The page tree can be expanded by clicking
the arrow to the left of each page.

.. rst-class:: bignums


1. :ref:`Enter the backend <backend-login>` and select the page module

   Click on **WEB** > **Page** now.

2. Look at the page tree in the backend:

   For example, click on the arrow next to the page called "Congratulations",
   and then "Content Examples".

   Your page tree should look like this:

   .. include:: /Images/AutomaticScreenshots/PageTree/PageTree.rst.txt


3. View page in the frontend:

   To view the page in the frontend, click on the :guilabel:`View webpage`
   icon in the Docheader.

   .. include:: /Images/AutomaticScreenshots/PageModule/ViewWebpage.rst.txt

4. Now take a look at the navigation in the frontend.

   Click on :guilabel:`CONTENT EXAMPLES` in the main menu on top and then
   select :guilabel:`Media` from the sub-menu:

   .. figure:: /Images/ManualScreenshots/Frontend/FrontendPage.png
      :alt: Frontend of the Introduction Package
      :class: with-shadow

The main menu on top of your web site corresponds to the first
level menu pages in the page tree. The sub-menu of the :guilabel:`"Content Examples"`
page in the frontend corresponds to the entries beneath "Content Examples" in the page tree.

.. index:: Root page

Working with the page tree
==========================

Remember the components of the backend from the :ref:`previous page <general-backend-structure>`?

.. include:: /Images/AutomaticScreenshots/BackendOverview/BackendAreasOverview.rst.txt

We will now look at some components of the page tree a little more closely:


Root page
   The page with the globe icon represents the root of your web site.
   Multiple websites can exist within a single installation of TYPO3.
   The top node with the TYPO3 logo is a special container which is used
   to store shared resources such as file mounts and backend user records.

.. include:: /Images/AutomaticScreenshots/PageTree/RootPage.rst.txt

Modules:
   Some modules make use of the page tree, but not all. The presence of the page tree
   implies that the module depends upon the selection of a specific pages in the page tree.

Content area:
   Clicking on a pages title opens that page in the content area to
   the right. Hovering over the icon of a page will display its internal id.

Context menu:
   1. A click on the page icon will open the context menu. 2. **Or**, you
   can right click the whole page title.

   .. figure:: /Images/ManualScreenshots/PageTree/ContextMenu.png
      :alt: Page tree with opened context menu
      :class: with-shadow


.. index:: Page tree; Context menu
.. _the-context-menu:

The context menu
================

The context menu of a page is used to access the most common
page related functions. Here is what these options do:

- **Show**: Opens the page you clicked in the browser (frontend)

- **Edit**: Lets you edit the page properties

- **New**: Create a new page


.. important::

   This creates a new page under the current page on the same level in the page
   tree:

   .. code-block:: none

      parent
       |
       ---> current page
       |
       ---> new page

   If you wish to create a new page, as subpage of current page, use "More options"
   > 'Create New' wizard" or use :ref:`new-page-drag-and-drop`.

   .. code-block:: none

      parent
       |
       --> current page
            |
            ---> new page


- **Info**: Displays information about the page

- **Copy**: Copies the page

- **Cut**: Cuts the page

- **More options**:

  - **More options ... > 'Create New' wizard**: Same as "New", but you can select where
    the new page is to be created.

  - ...

  - **More options ... > Export**: Opens the export tool and preselects the selected page

  - **More options ... > Import**: Opens the import tool and preselects the selected
    page

- **Disable**: Disables the page (so it isn't accessible from the frontend
  anymore)

- **Delete**: Deletes the page

- **History/Undo**: Shows the change history of the page (who did which
  changes when)


.. index:: Pages; Create
.. _new-page-drag-and-drop:

Create new pages with drag and drop
===================================

You can also create new pages using drag and drop.

.. rst-class:: bignums

1. Clicking on the "Create new pages" icon (top left of the page tree)

2. Drag and drop a "Standard" page to its desired location in the page tree.


   .. figure:: /Images/ManualScreenshots/PageTree/Dragndop1.png
      :class: with-shadow

   .. figure:: /Images/ManualScreenshots/PageTree/Dragndop2.png
      :class: with-shadow

3. A new page has now been created at the desired location.

   By default it will be called "[Default Title]" which can be changed
   right away by entering a new title.

   .. figure:: /Images/ManualScreenshots/PageTree/Dragndop3.png
      :class: with-shadow


.. index:: Modules; View
.. _the-view-module:

The view module
===============

It is also possible to view a page without having to leave the backend. By selecting the View module,
backend users are able to preview individual pages and test them against various screen sizes,
by accessing the drop-down menu at the top.

.. figure:: /Images/ManualScreenshots/Modules/ViewModule.png
   :alt: Viewing a page directly in the backend
   :class: with-shadow


.. index:: Page tree; Collapse
.. _collapse-page-tree:

Collapsing the page tree
========================

The page tree can be collapsed to gain screen space, by clicking on the second icon
on the left in the top bar.

.. include:: /Images/AutomaticScreenshots/PageTree/CollapsePageTree.rst.txt


.. index:: Pages; Edit
.. _editing-pages:

Editing pages
=============

Modifying an existing page or adding a new one is covered in the
:ref:`Editors Tutorial <t3editors:pages>`.

Next we will look at how content is placed on pages.
