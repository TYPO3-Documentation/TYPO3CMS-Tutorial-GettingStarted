.. include:: /Includes.rst.txt

.. index:: backend, frontend, concepts

.. _concepts:

==============
TYPO3 Concepts
==============

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

When a user logs into the backend they see the CMS Dashboard (by default).

Backend Modules
---------------

.. container:: row

   .. container:: col-md-4

        .. figure:: /Images/Illustrations/backend_module.png

   .. container:: col-md-8

      The backend contains modules that are grouped by task. Which modules a
      user sees depends on the access rights that have been given to them.

      -  The Web group contains a set of modules for the creation and
         management of pages and content.

      -  Site Management is for the setup of a site. Here it is possible to
         specify the site name, assign domains and select languages.

      -  Filelist is for viewing and managing files including
         documents, images and videos.

      -  Admin Tools are administrative modules for maintenance and performing
         upgrades. One module is the Extension manager for enabling/disabling
         third-party extensions.

      -  System is where administrators control access to the backend, view
         error logs and provide information specific to the installation.

Extensions
----------

.. figure:: /Images/Illustrations/extensions.png

Extensions are pieces of software developed by the TYPO3 community that extend
the functionality of a TYPO3 installation. Extensions come in many forms
- from small extensions that carry out specific tasks to larger extensions that
provide an entire suite of functionality, e.g. the TYPO3 Blog Extension.


Frontend
========

.. figure:: /Images/Illustrations/frontend.png

The frontend consists of web pages generated from content created in
the backend combined with Fluid templates in the installation. A Fluid
templating engine provides the glue between the content and the templates.

A typical Fluid template contains HTML to structure the page and Fluid tags that
perform tasks on the page. For example, a simple web page that features a
navigation menu, a block of text and a company logo will contain three Fluid
tags. The three tags are:

-  A tag to insert a content element that contains the block of text.
-  A tag that generates the main navigation menu.
-  A tag to insert the company logo.

Site assets, such as HTML, CSS and JavaScript, are stored in a site package.
