.. include:: /Includes.rst.txt

.. index:: backend, frontend, concepts

.. _concepts:

==============
TYPO3 Concepts
==============

The backend & frontend
======================

TYPO3 is separated into two parts, the backend and the frontend.

.. figure:: /Images/Illustrations/backend_frontend.png

The backend is the administrative side of the CMS, it is only accessible to users
who have been granted access. The frontend is what the visitor will see when browsing the site.

Backend
=======

.. figure:: /Images/Illustrations/backend.png

The backend's main role is to enable users to create and publish content for their site.

The backend is also used to configure an installation of TYPO3. Domains, languages and other information that determines how a site behaves are managed via the backend.
Other tasks such as adding additional backend users and managing third party extensions are also handled in the backend.

Accessing The Backend
---------------------

The backend can be accessed via :samp:`example.org/typo3`.

.. figure:: /Images/Illustrations/backend_login.png

By default, users are presented with the CMS's Overview Dashboard when they log in to the backend.

Backend Modules
---------------

.. container:: row

   .. container:: col-md-4

        .. figure:: /Images/Illustrations/backend_module.png

   .. container:: col-md-8

      The backend contains a range of modules that are grouped by task. User access rights determine what modules are visible to users when they
      are logged into the backend.

      - The Web group contains a set of modules that handle the creation and management of both pages and content.

      - Site Management handles the setup of a site. From this module it is possible to specify the site name, assign domains and select what languages are to be used.

      - Filelist provides a convenient way to view and manage files including documents, images and videos.

      - Admin Tools features a collection of administrative modules that enable you to perform various maintenance and upgrade tasks. This module also contains the Extension manager, allowing you to enable and disable any third-party extensions that are currently installed.

      - The System group contains modules that allow administrators to manage access to the backend itself, view error logs and provide information specific to that installation.

Extensions
----------

.. figure:: /Images/Illustrations/extensions.png

Developed by the community, Extensions provide a range of solutions that help extend TYPO3. Extensions come in many forms from small extensions that carry out specific tasks to larger Extensions
that provide an entire suite of functionality such as the TYPO3 Blog Extension for example.


Frontend
========

.. figure:: /Images/Illustrations/frontend.png

The frontend combines the content created in the backend along with the installation's HTML templates to generate web pages.

To achieve this, TYPO3 uses the Fluid templating engine that acts as the glue between user generated content and design templates.

A typical Fluid template will contain HTML that defines the structure of the page and Fluid tags that perform various tasks.

For example a simple web page that features a navigation menu, a block of text and a company logo will contain three Fluid tags.

-  A Fluid tag to insert the content element that contains the block of text.
-  Another that generates the main navigation menu.
-  And a third Fluid tag to insert the company logo.

Site assets, such as HTML,CSS and JavaScript are stored in a site package.
