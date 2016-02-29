
.. include:: ../../Includes.txt


.. _system-modules:

System Modules
^^^^^^^^^^^^^^

In the :ref:`User Management <user-management>` chapter we
already visited the *Access* and *Backend Users* module. Here is
a brief presentation of the other modules.


.. _system-modules-install:

Install
"""""""

The Install Tool is presented in the :ref:`Installation Guide <t3install:the-install-tool>`.
It can be accessed directly from the TYPO3 CMS backend.


.. _system-modules-log:

Log
"""

The TYPO3 CMS backend traces a number of actions performed by users:
login, cache clearing, database entries (creation, update, deletion),
settings changes, file actions and errors. A number of filters are
available to help digging into this data.

.. figure:: ../../Images/BackendLogModule.png
   :alt: The Log module and its many filters


.. _system-modules-dbcheck:

DB check
""""""""

The *Database (DB) Check* module offers four functions related
to the database and its content.

.. figure:: ../../Images/BackendDbCheckModule.png
   :alt: Overview of the DB check functions

Record Statistics
  Simple shows a count of the various records in the database,
  broken down by type for pages and content elements.

Relations
  Checks if some relations are empty or broken, especially
  with regards to files.

Search
  A tool to seach through the whole database. It offers an
  advanced mode which is nearly a visual query builder.

Check and update global reference index
  TYPO3 CMS keeps a record of relations between all records.
  This may get out of sync when some operations are performed
  without the strict context of the backend. It is therefore
  useful to update this index regularly.


.. _system-modules-configuration:

Configuration
"""""""""""""

The *Configuration* module can be used to view the various
configuration arrays used by TYPO3 CMS. It is not the goal
of this tutorial to described the role of each of these arrays,
you discover their function as you dig deeper into
TYPO3 CMS. Let's just mention that the `$GLOBALS['TYPO3_CONF_VARS']`
contains global configuration values that you may have set
in the Install Tool.

.. figure:: ../../Images/BackendConfigurationModule.png
   :alt: The Configuration module showing the global configuration array


.. _system-modules-log:

Reports
"""""""

The *Reports* module contains information and diagnostic data
about your TYPO3 CMS installation. It is particularly worthwhile
to regularly check out the "Status Report" as it will infom you
about bad configuration, security issues, etc.

.. figure:: ../../Images/BackendReportsModule.png
   :alt: The Status Report of the Reports module
