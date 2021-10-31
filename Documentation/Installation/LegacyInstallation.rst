.. include:: /Includes.rst.txt

.. index:: legacy installation

.. _legacyinstallation:

===================
Legacy Installation
===================

This guide details how TYPO3 can be installed without using Composer. This method of installation
is now considered out of date, users are strongly encouraged to use the Composer based :ref:`install`

Installing on a Unix Server
===========================

#. Download TYPO3's source package from `https://get.typo3.org/
   <https://get.typo3.org/>`_::

   /var/www/site/$ wget --content-disposition https://get.typo3.org/11

   Ensure that the package is one level above the web server's document root.

#. Unpack the :file:`typo3_src-11.5.x.tar.gz`::

   /var/www/site/$ tar xzf typo3_src-11.5.x.tar.gz

   Note that the `x` in the extracted folder will be replaced with the latest bugfix version of TYPO3.


#. Create the following symlinks in the document root::

      cd public
      ln -s ../typo3_src-11.5.x typo3_src
      ln -s typo3_src/index.php index.php
      ln -s typo3_src/typo3 typo3

.. important::
   Make sure to upload the whole TYPO3 source directory including the
   :file:`vendor` directory, otherwise you will miss important dependencies.

#. This will then create the following structure:

   .. code-block:: none

    ├── typo3_src-11.5.x/
    ├── public/
    ├── ── typo3_src -> ../typo3_src-11.5.x/
    ├── ── typo3 -> typo3_src/typo3/
    ├── ── index.php -> typo3_src/index.php

Installing on a Windows Server
==============================

#. Download TYPO3's source package from `https://get.typo3.org/
   <https://get.typo3.org/>`_ and extract the :file:`.zip` file on the web server.

   Ensure that the package is one level above the web server's document root.


#. Use the shell to create the following symlinks in the document root::

      cd public
      mklink /d typo3_src ..\typo3_src-11.5.x
      mklink /d typo3 typo3_src\typo3
      mklink index.php typo3_src\index.php

#. This will then create the following structure:

   .. code-block:: none

    ├── typo3_src-11.5.x/
    ├── public/
    ├── ── typo3_src -> ../typo3_src-11.5.x/
    ├── ── typo3 -> typo3_src/typo3/
    ├── ── index.php -> typo3_src/index.php


Completing The Installation
===========================

After the source package has been extracted and the symlinks created,
visit the Access TYPO3 via web browser to complete the installation.
