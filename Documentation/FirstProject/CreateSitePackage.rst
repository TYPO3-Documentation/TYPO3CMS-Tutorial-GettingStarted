..  include:: /Includes.rst.txt

..  _creating-a-site-package:

=======================
Creating a site package
=======================

The next step is to create a site package. In TYPO3, a site package is a
structured package that organizes the layout, design, and essential
configuration settings for your website. By using a site package, you can
manage all customizations in one place, which keeps your changes organized and
makes your project easier to maintain, even through TYPO3 updates.

..  _how-to-create-a-site-package:

How to create a site package
============================

To create a site package, you have two main options:

*   Manual creation: For full control over your project's setup, you can follow
    the detailed instructions in the
    :ref:`TYPO3 site package tutorial <t3sitepackage:start>`.

*   Using the `Site Package Builder <https://get.typo3.org/sitepackage/new//>`__:
    If you are looking for a faster start, TYPO3's official Site Package Builder
    is a handy tool. You can choose whether your site package should be based on
    the `Bootstrap Package <https://www.bootstrap-package.com/>`__ or
    :ref:`fluid_styled_content <typo3/cms-fluid-styled-content:introduction>`.

    Fill in the fields in the form, download the site package and save it
    in the :path:`packages` directory. Then require the site package using Composer:

    ..  code-block:: bash

        composer require vendor\sitepackagename

    and include the sets in your `site configuration <https://docs.typo3.org/permalink/t3start:site-configuration>`_.

    ..  figure:: /Images/ManualScreenshots/CreateSitePackage/SitePackageBuilder.png
        :alt: Screenshot of the site package builder at get.typo3.org demonstrating the installation steps

       Click on "Composer-based TYPO3 installation" for the commands to install the site package


..  _pros-and-cons-of-sitepackage-builder:

Pros and cons of using the Site Package Builder
===============================================

Pros:

*   The Site Package Builder is particularly useful for beginners or projects
    that need a quick start.

Cons:

*   A large number of unnecessary, mostly empty files are generated.
*   Depending on your prior knowledge, you may use code that you
    do not fully understand.
