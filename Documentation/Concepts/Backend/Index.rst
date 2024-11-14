:navigation-title: Backend
..  include:: /Includes.rst.txt

..  _backend:

=======
Backend
=======

The backend is the administrative side of the CMS. It is only accessible to
users who have been granted the correct access. The :ref:`frontend` is what the visitor
sees when browsing the site.

The backend is where users create and publish content for their site. It is also
where TYPO3 installations are configured. This includes setting domains and
languages, adding backend users and managing third-party extensions.

..  toctree::
    :maxdepth: 1
    :titlesonly:

    GeneralBackendStructure/Index
    Login/Index
    PageModule/Index
    ListModule/Index
    FileModule/Index
    InfoModule/Index
    SystemModules/Index

..  _backend modules:

Backend modules
---------------

The backend contains modules that are grouped by task. Which modules a
user sees depends on the access rights that have been given to them.

The :guilabel:`Web` group contains a set of modules for the creation and
management of pages and content. This group contains important backend modules
such as :ref:`Pages <page-content>`, where the page content can be edited,
:ref:`List <list-module>` where database records can be viewed and edited and
:ref:`Info <info-module>` where you can find information provided by different
system and third party extension. Many page modules provided by third party
extensions can also be found in this area.

:guilabel:`Site Management` is for the setup of a site. Here it is possible to
specify the site name, assign domains and select languages.

:ref:`Filelist <file-module>` is for viewing and managing files including
documents, images and videos.

:guilabel:`Admin Tools` are administrative modules for maintenance and performing
upgrades. One module is the Extension manager for enabling/disabling
third-party extensions.

:ref:`System <system-modules>` is where administrators control access to the
backend, view error logs and provide information specific to the installation.
