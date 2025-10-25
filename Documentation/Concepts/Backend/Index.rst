:navigation-title: Backend
..  include:: /Includes.rst.txt

..  _backend:

=======
Backend
=======

.. figure:: /Images/ManualScreenshots/Backend/BackendAreasOverviewShort.png
   :alt: Screenshot of the TYPO3 Backend after login, with annotated parts

   Overview of the whole TYPO3 backend, see also :ref:`general-backend-structure`

The backend is the administrative side of the CMS, accessible only to users
with the correct permissions. It allows users to create and publish content,
configure the site (like settings, domains, languages), manage backend users,
and handle third-party extensions. The :ref:`frontend` is what visitors
see when browsing the site.

You can view and try out the TYPO3 backend on this `demo <https://demo.typo3.org/>`__

..  toctree::
    :maxdepth: 1
    :titlesonly:

    GeneralBackendStructure/Index
    Login/Index
    PageModule/Index
    ListModule/Index
    FileModule/Index
    SiteManagement/Index
    InfoModule/Index
    AdminTools/Index
    SystemModules/Index

..  _backend modules:

Backend modules
---------------

..  versionchanged:: 14.0
    The main module `Web` has been renamed to `Content`.
    See `Feature: #107628 - Improved backend module naming and structure <https://docs.typo3.org/permalink/changelog:feature-107628-1729026000>`_

The backend contains modules that are grouped by task. Which modules a
user sees depends on the access rights that have been given to them.

The :guilabel:`Content` group contains a set of modules for the creation and
management of pages and content. This group contains important backend modules
such as :ref:`Pages <page-content>`, where the page content can be edited,
:ref:`List <list-module>` where database records can be viewed and edited and
:ref:`Info <info-module>` where you can find information provided by different
system and third-party extension. Many page modules provided by third-party
extensions can also be found in this area.

:guilabel:`Site Management` is for the setup of a site. Here it is possible to
specify the site name, assign domains and select languages.

:ref:`Media > Filelist <file-module>` is for viewing and managing files including
documents, images and videos.

:guilabel:`Admin Tools` are administrative modules for maintenance and performing
upgrades. One module is the Extension manager for enabling/disabling
third-party extensions.

:ref:`System <system-modules>` is where administrators control access to the
backend, view error logs and provide information specific to the installation.
