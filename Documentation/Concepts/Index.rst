.. include:: /Includes.rst.txt

.. index:: backend, frontend, concepts

.. _concepts:

==============
TYPO3 Concepts
==============

..  card-grid::
    :columns: 1
    :columns-md: 2
    :gap: 4
    :class: pb-4
    :card-height: 100

    ..  card:: TypoScript

        TypoScript is the basic configuration language used to configure the
        frontend output of a page in TYPO3.

        ..  card-footer:: :ref:`Create a minimal page created by pure TypoScript <typoscript>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Fluid templating

        Fluid is the standard templating engine that is used with TYPO3.

        ..  card-footer:: :ref:`Quick introduction to Fluid <fluid-templates>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Webroot and assets

        In TYPO3 files that are displayed in the web browser, must - for
        security reasons - be placed in certain directories.

        ..  card-footer:: :ref:`Webroot and assets - where to put public files <webroot>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Backend

        XXXXX

        ..  card-footer:: :ref:`Backend <backend>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Frontend

        XXXXX

        ..  card-footer:: :ref:`Frontend <frontend>`
            :button-style: btn btn-secondary stretched-link

..  toctree::
    :caption: Topics
    :glob:
    :titlesonly:
    :hidden:

    TypoScript/Index
    Fluid/Index
    Assets/Index
    Backend/Index
    Frontend/Index
    */Index
    *



The backend & frontend
======================

TYPO3 has two parts: the backend and the frontend.

.. figure:: /Images/Illustrations/backend_frontend.png

The backend is the administrative side of the CMS. It is only accessible to
users who have been granted the correct access. The frontend is what the visitor
sees when browsing the site.

Backend
=======

.. figure:: /Images/Illustrations/backend.png

The backend is where users create and publish content for their site. It is also
where TYPO3 installations are configured. This includes setting domains and
languages, adding backend users and managing third-party extensions.


Accessing The Backend
---------------------

The backend is accessed via the url (insert your domain) :samp:`example.org/typo3`.

.. figure:: /Images/Illustrations/backend_login.png

When a user logs into the backend they see the dashboard (by default).

..  note::
    Since TYPO3 v13, a custom entry point for the TYPO3 backend can be
    customized. If the path :samp:`/typo3` does not work, consult the
    project's documentation or ask your administrator for the correct backend
    URL.

Backend Modules
---------------

.. container:: row

   .. container:: col-md-4

        .. figure:: /Images/Illustrations/backend_module.png

   .. container:: col-md-8

      The backend contains modules that are grouped by task. Which modules a
      user sees depends on the access rights that have been given to them.

      -  The :guilabel:`Web` group contains a set of modules for the creation and
         management of pages and content.

      -  :guilabel:`Site Management` is for the setup of a site. Here it is possible to
         specify the site name, assign domains and select languages.

      -  :guilabel:`Filelist` is for viewing and managing files including
         documents, images and videos.

      -  :guilabel:`Admin Tools` are administrative modules for maintenance and performing
         upgrades. One module is the Extension manager for enabling/disabling
         third-party extensions.

      -  :guilabel:`System` is where administrators control access to the backend, view
         error logs and provide information specific to the installation.

Extensions
----------

.. figure:: /Images/Illustrations/extensions.png

Extensions are pieces of software developed by the TYPO3 community that extend
the functionality of a TYPO3 installation. Extensions come in many forms
- from small extensions that carry out specific tasks to larger extensions that
provide an entire suite of functionality, e.g. the TYPO3 Blog Extension.

