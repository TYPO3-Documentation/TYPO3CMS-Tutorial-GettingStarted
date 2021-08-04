.. include:: ../Includes.txt


.. _the-distributions-in-detail:

====================
File System Overview
====================


.. _typo3-folders-and-documents:

TYPO3 Folders and Files on Root Level
=====================================

The following directories are created as part of TYPO3's installation process.

:file:`public/`
  This is the document root and public entry point.

:file:`var/`
  Contains system files, including caches, logs, sessions date.

:file:`vendor/`
  The Composer vendor directory contains TYPO3's core as well as third-party packages and libraries.

:file:`packages/extensions`
  Extensions that are developed locally are stored here.

The 'public' Folder
-------------------

The following directories are then created in :file:`public/` during the installation of TYPO3:

:file:`fileadmin/`
  is the default storage directory for a TYPO3 installation and is used to a store sites assets
  including documents, images and video clips that have been uploaded via TYPO's backend interface.
  :file:`fileadmin/` needs to have the appropriate write permissions set so that files can be stored within it.
  :file:`fileadmin/` should only be used as a document store. Configuration files and any files related to a
  sites appearance including HTML,CSS and Javascript files should reside inside a dedicated sitepackage.

:file:`typo3conf/`
  contains configuration files and the extensions directory for this instance of TYPO3.

:file:`typo3conf/ext/`
  This directory contains any extensions that have been installed. Extensions that have been developed locally will
  be automatically symlinked to this directory when they activated in the Extension Manager.

:file:`typo3conf/LocalConfiguration.php`
  is the main configuration file for a TYPO3 installation. This file contains
  critical information for the installation, including database and install tool
  credentials.

  Whenever changes are made to a TYPO3 installation, such as installing a new backend
  language or configuring a third party extension, TYPO3 will write these changes to
  the `LocalConfiguration.php` file.

:file:`typo3conf/PackageStates.php`
  contains information about extensions thar are activated in this
  installation.

:file:`typo3conf/AdditionalConfiguration.php`
  is an additional configuration file, which is executed on every request after
  the :file:`LocalConfiguration.php` has been loaded. It can be used to
  manipulate the configuration of
  :code:`$GLOBALS['TYPO3_CONF_VARS']`. This file is not created
  automatically.

:file:`index.php`
  the main script for the website Frontend


.. _custom-folders:

The `var` Folder
----------------

:file:`cache/`
  is where file based caches will be stored.

:file:`charset/`
  contains charset conversion tables.

:file:`labels/`
  contains language labels for a translated TYPO3 backend. You can download
  more languages via "Maintenance" > "Manage language labels"

:file:`lock/`
  is where file based locks are created.

:file:`log/`
  the default location for TYPO3 log files. Can be configured via the TYPO3
  logging framework. See `Logging Framework
  <https://docs.typo3.org/typo3cms/CoreApiReference/ApiOverview/Logging/Index.html>`.

:file:`session/`
  is where sessions are stored.

:file:`transient/`
  acts as transient storage during file operations.