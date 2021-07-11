.. include:: /Includes.rst.txt
.. index:: Modules; System
.. _system-modules:

==============
System modules
==============

.. important::

   This chapters cover modules that will only be available for backend users
   with :ref:`"admin" <admin-user>` access privileges.

In the :ref:`User Management <user-management>` chapter we covered the
*Access* and *Backend Users* module. In this section we take a look
at the remaining modules.


.. index:: Modules; Log
.. _system-modules-log:

Log
===

The TYPO3 CMS backend logs a number of actions performed by backend users:
login, cache clearing, database entries (creation, update, deletion),
settings changes, file actions and errors. A number of filters are
available to help filter this data.

.. include:: /Images/AutomaticScreenshots/Modules/LogModule.rst.txt

.. index:: Modules; DB check
.. _system-modules-dbcheck:

DB check
========

.. important::

   "DB check and :ref:`system-modules-configuration` are only available
   if the system extension "lowlevel" was installed and activated.

   For Composer based systems (see also :ref:`t3install:extension-installation`):

   .. code-block:: bash

      composer req typo3/cms-lowlevel


The *Database (DB) check* module offers four functions related
to the database and its content.

.. include:: /Images/AutomaticScreenshots/Modules/DbCheckModule.rst.txt

Record Statistics
  Shows a count of the various records in the database,
  broken down by type for pages and content elements.

Relations
  Checks if certain relations are empty or broken, typically
  used to check if files are being referenced.

Search
  A tool to search through the whole database. It offers an
  advanced mode which is similar to a visual query builder.

Check and update global reference index
  TYPO3 CMS keeps a record of relations between all records.
  This may get out of sync when certain operations are performed
  without the strict context of the backend. It is therefore
  useful to update this index regularly.


.. index:: Modules; Configuration
.. _system-modules-configuration:

Configuration
=============

The *Configuration* module can be used to view the various
configuration arrays used by the CMS. It is not the goal
of this tutorial to describe the role of each of these arrays,
you can discover their function as you dig deeper into
TYPO3 CMS. Let's just mention that the `$GLOBALS['TYPO3_CONF_VARS']`
contains global configuration values.

.. include:: /Images/AutomaticScreenshots/Modules/ConfigurationModule.rst.txt


.. index:: Modules; Reports
.. _system-modules-reports:

Reports
=======

The *Reports* module contains information and diagnostic data
about your TYPO3 CMS installation. It is recommended that you
regularly check the "Status Report" as it will inform you
about configuration errors, security issues, etc.

.. include:: /Images/AutomaticScreenshots/Modules/ReportsModule.rst.txt
