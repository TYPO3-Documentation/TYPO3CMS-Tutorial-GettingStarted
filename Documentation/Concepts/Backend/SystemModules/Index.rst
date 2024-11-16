:navigation-title: System modules
.. include:: /Includes.rst.txt
.. _system-modules:

==============
System modules
==============

The backend modules in group system are only available to backend users with
admin permissions.

Some modules are only available when you have an optional system extension
installed. If you want to see all available modules you can also make a
full TYPO3 install, see `https://get.typo3.org/misc/composer/helper`__.

..  contents:: Backend modules in group "System"

.. _system-modules-permissions:

Permissions
===========

The module :guilabel:`System > Permissions` can be used to view or edit
backend user permissions for pages in the backend.

See also TYPO3 Explained,
:ref:`Permissions management <t3coreapi:permissions-management>`.

.. _system-modules-backend-users:

Backend Users
=============

The module :guilabel:`System > Backend Users` is used to create, edit and delete
backend users.

See also TYPO3 Explained,
:ref:`Backend user management <t3coreapi:user-management>`.

.. _system-modules-reactions:

Reactions (optional)
====================

This module is only available if the system extension
:composer:`typo3/cms-reactions` is installed. This extension handles **incoming**
webhooks to TYPO3. It also provides a corresponding backend module to manage
reaction records.

It has its own manual:
:ref:`TYPO3 Reactions <typo3/cms-reactions:start>`.

.. _system-modules-webhooks :

Webhooks (optional)
===================

This module is only available if the system extension
:composer:`typo3/cms-webhooks` is installed. This extension handles **outgoing**
webhooks to TYPO3. It also provides a corresponding backend module to manage
webhook records in the TYPO3.

Unfortunately this extension is not documented at the time of writing.

.. _system-modules-scheduler:

Scheduler (optional)
====================

This module is only available if the system extension
:composer:`typo3/cms-scheduler` is installed.

The Scheduler supports one-time or periodic execution of tasks that can be
delivered by any extension. It has its own manual:
:ref:`TYPO3 Scheduler <typo3/cms-scheduler:start>`.

.. _system-modules-dbcheck:

DB check (optional)
===================

This module is only available if the system extension
:composer:`typo3/cms-lowlevel` is installed.

The *Database (DB) check* module offers functions related
to the database and its content.

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

Some third party extensions offer similar but extended functionality around
the database, for example :composer:`fixpunkt/backendtools` can be used during
development to find all pages that contain a certain plugin or that use
a certain backend layout etc.

.. _system-modules-configuration:

Configuration
=============

The *Configuration* module can be used to view the various
configuration arrays used by the CMS. It is not the goal
of this tutorial to describe the role of each of these arrays,
you can discover their function as you dig deeper into
TYPO3 CMS. Let's just mention that the `$GLOBALS['TYPO3_CONF_VARS']`
contains global configuration values.

.. _system-modules-reports:

Reports (optional)
==================

This module is only available if the system extension
:composer:`typo3/cms-reports` is installed.

The :guilabel:`System > Reports` module contains information and diagnostic data
about your TYPO3 installation. It is recommended that you
regularly check the "Status Report" as it will inform you
about configuration errors, security issues, etc.

This module has its own dedicated manual:
:ref:`TYPO3 Reports <typo3/cms-reports:start>`. It can be extended by third-party
extensions. For example :composer:`apache-solr-for-typo3/solr` offers its own
section in the report module.

.. _system-modules-log:

Log
===

The TYPO3 CMS backend logs a number of actions performed by backend users:
login, cache clearing, database entries (creation, update, deletion),
settings changes, file actions and errors. A number of filters are
available to help filter this data.
