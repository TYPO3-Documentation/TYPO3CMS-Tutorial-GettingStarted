:navigation-title: Structure
.. include:: /Includes.rst.txt
.. _general-backend-structure:

=========================
General backend structure
=========================

Here is a complete overview of the backend interface and its structure.

.. figure:: /Images/ManualScreenshots/Backend/BackendAreasOverviewShort.png
   :alt: Screenshot of the TYPO3 Backend after login, with annotated parts

   Overview of the whole TYPO3 CMS backend

Situated in the center left of page is the
*page tree* and to its right the (main) *content area*.

:ref:`Top bar <top-bar>` (1)
    This gives you access to your user settings, logout, search
    etc.

Module menu (2)
    This is the main menu of the TYPO3 CMS backend. It is divided
    into main modules (:guilabel:`WEB`, :guilabel:`FILE`, etc.) and
    their sub-modules.

:ref:`Page tree <page-tree>` (3)
    This can be used to browse through and select pages.

Docheader (4) and Content area (5)
    The content in these areas depends on which backend module is currently
    opened.

..  toctree:: The backend structure in depth
    :maxdepth: 1
    :titlesonly:

    TopBar/Index
    PageTree/Index
    ContextMenu/Index
