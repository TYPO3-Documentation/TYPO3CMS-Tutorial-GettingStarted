:navigation-title: Database

..  include:: /Includes.rst.txt
.. _system-modules-dbcheck:
.. _system-modules-database:

=================
Database (System)
=================

..  versionchanged:: 14.0
    The tool :guilabel:`Check and Update Reference Index` has been moved to
    :guilabel:`System > Maintenance`

This module is only available if the system extension
:composer:`typo3/cms-lowlevel` is installed.

The :guilabel:`System > Database` module offers functions related
to the database and its content.

Record Statistics
    Shows a count of the various records in the database,
    broken down by type for pages and content elements.

Search
    A tool to search through the whole database. It offers an
    advanced mode which is similar to a visual query builder.

Some third party extensions offer similar but extended functionality around
the database, for example :composer:`fixpunkt/backendtools` can be used during
development to find all pages that contain a certain plugin or that use
a certain backend layout etc.
