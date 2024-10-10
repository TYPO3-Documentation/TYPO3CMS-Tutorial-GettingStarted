..  include:: /Includes.rst.txt

..  index:: concepts

..  _Frontend:

================
Frontend
================

.. figure:: /Images/Illustrations/frontend.png

The frontend consists of web pages generated from content created in
the backend combined with Fluid templates in the installation. The Fluid
templating engine provides the glue between the content and the templates.

A typical Fluid template contains HTML to structure the page and Fluid tags that
perform tasks on the page. For example, a simple web page that features a
navigation menu, a block of text and a company logo will contain three Fluid
tags. The three tags are:

-  A tag to insert a content element that contains the block of text.
-  A tag that generates the main navigation menu.
-  A tag to insert the company logo.

Site assets, such as HTML, CSS and JavaScript, are stored in a
:ref:`site package <t3sitepackage:introduction>`.
