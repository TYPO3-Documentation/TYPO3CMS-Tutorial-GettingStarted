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

The backend is the administrative side of the CMS, it is only accessible to
users who have been granted access. The frontend is what the visitor will see
when browsing the site.

Backend
=======

.. figure:: /Images/Illustrations/backend.png

The backend's main role is to enable users to create and publish content for
their site.

The backend is also used to configure a TYPO3 installation. Domains,
languages and other information that determine how a site behaves are managed
via the backend. Tasks such as adding backend users and
managing third party extensions also take place in the backend.

Accessing The Backend
---------------------

The backend can be accessed via :samp:`example.org/typo3`.

.. figure:: /Images/Illustrations/backend_login.png

By default, users see the CMS's Overview Dashboard when they log
in to the backend.

Backend Modules
---------------

.. container:: row

   .. container:: col-md-4

        .. figure:: /Images/Illustrations/backend_module.png

   .. container:: col-md-8

      The backend contains a range of modules that are grouped by task. User
      access rights determine what modules are visible to users when they log into the backend.

      -  The Web group contains a set of modules that handle the creation and
         management of both pages and content.

      -  Site Management handles the setup of a site. From this module it is
         possible to specify the site name, assign domains and select
         languages.

      -  Filelist provides a convenient way to view and manage files, including
         documents, images and videos.

      -  Admin Tools features a collection of administrative modules so that
         you can perform various maintenance and upgrade tasks. This module also
         contains the Extension manager, where you can enable and disable any
         third-party extensions.

      -  The System group contains modules that allow administrators to manage
         access to the backend, view error logs and provide information
         specific to that installation.

Extensions
----------

.. figure:: /Images/Illustrations/extensions.png

Developed by the community, extensions provide a range of solutions that help
extend TYPO3. Extensions come in many forms - from small extensions that carry out
specific tasks to larger extensions that provide an entire suite of
functionality such as the TYPO3 Blog Extension.


Frontend
========

.. figure:: /Images/Illustrations/frontend.png

The frontend combines the content created in the backend along with the
installation's HTML templates to generate web pages.

To achieve this, TYPO3 uses the Fluid templating engine that acts as the glue
between user generated content and design templates.

A typical Fluid template will contain HTML that defines the structure of the
page and Fluid tags that perform various tasks.

For example a simple web page that features a navigation menu, a block of text
and a company logo will contain three Fluid tags.

-  A tag to insert the content element that contains the block of text.
-  Another that generates the main navigation menu.
-  A third tag to insert the company logo.

Site assets, such as HTML, CSS and JavaScript, are stored in a site package.
