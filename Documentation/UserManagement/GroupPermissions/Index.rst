.. include:: /Includes.rst.txt
.. index:: Backend users; Group permissions
.. _permissions:
.. _setting-up-user-permissions:

===========================
Setting up user permissions
===========================

We will look into managing user permissions by editing the
"Advanced editors" user group.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditAllowDeny.rst.txt

.. _general:

General
=======

On the "General" tab you can edit the group's title and write a
short description. As mentioned before, permissions from sub-groups
will be inherited by the current group.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditGeneralTab.rst.txt


.. note::

   Setting permissions is not just about access rights.

   It can also help to declutter the backend, ensuring that
   backend users only see and have access to the modules they require.


.. index::
   Backend users; Access lists
   Permissions; Access lists
.. _access-lists:
.. _include-access-lists:

Access lists
============

The "Access Lists" tab is where most permissions are defined.
All fields are detailed below.


.. index:: pair: Permissions; Modules
.. _modules:

Modules
-------

The first field is used to define which modules members of the group
should have access to. This will directly influence what appears
in the module menu for backend users.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditModules.rst.txt

.. index:: pair: Permissions; Tables
.. _tables:
.. _tables-modify:

Tables
------

The second field allows you to select the tables that the members of the
groups are allowed to see ("Tables (listing)"). And the next field is
the same but for the tables that can be modified ("Tables (modify)").

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditTables.rst.txt


.. index:: pair: Permissions; Page types
.. _page-types:

Page types
----------

These fields can restrict which page types are available to members
of the group. Explanations about the various page types are
found in the :ref:`Editors Guide: <t3editors:pages-types>`.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditPageTypes.rst.txt


.. index:: Permissions; Allowed exclude fields
.. _allowed-excludefields:

Allowed exclude fields
----------------------

When defining table fields in TYPO3, it is possible to mark them
as "excluded". Such fields will never be visible to backend users
(except administrators, of course) unless they are explicitly given
access to them. This field is about granting such access. It displays
a list of all tables and their excluded fields.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditExcludeFields.rst.txt


Click on a table name to expand the list of its fields and make
a selection of fields by checking some boxes.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditExcludeFieldsExpanded.rst.txt


.. _explicitly-allow-deny-field-values:

Explicitly allow or deny field values
-------------------------------------

For some fields, it is possible to set fine-grained permissions
on the actual values allowed for those fields. This is in particular
the case for the "Page content: Type" field, which defines the type
of content element that can then be defined by the members of the
group.

As with the list of excluded fields, this fields first appears
with groups collapsed. You need to expand one group to start
making changes.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditAllowDeny.rst.txt

.. note::
   You can change the behavior in the install tool by setting
   :ref:`[BE][explicitADmode]<t3coreapi:globals-typo3-conf-vars-be-explicitadmode>`
   to :php:`explicitDeny`.

.. index:: pair: Permissions; Languages

Limit to languages
------------------

In a multilingual web site, it is also possible to restrict users
to a specific language or set of languages. This can be achieved using the last field
of the "Access Lists" tab.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditLanguages.rst.txt


.. index::
   Permissions; Mounts
   pair: Permissions; Workspaces
.. _mounts:

Mounts and workspaces
=====================

The next tab contains very important fields which define
which parts of the page tree and the file system the members of
the group may exert their rights over.

We will cover only mounts here. Detailed information about
workspaces can be found in the :ref:`related extension manual <workspaces:start>`.


.. index:: Permissions; DB mounts
.. _db-mounts:

DB mounts
---------

DB mounts (database mounts) are used to restrict a user's access to
only some parts of the page tree. Each mount corresponds to a page in
the tree. The user will have access only to those pages and their sub-
pages.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditDBMounts.rst.txt

See also :ref:`Pages permissions <page-permissions>`.

In order to inherit these settings in assigned users, activate the checkbox
"Mount from groups" for the "DB Mounts" in the `be_users` record of this
user. This record can be found in the "List" module on the root page and in the
"Backend User" module.

.. index:: Permissions; File mounts
.. _file-mounts:

File Mounts
-----------

File mounts are similar to DB mounts but instead are used for manage access to files.
The main difference is that file mount records must be defined by the administrator first.
These are located in the root node:

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditFileMounts.rst.txt


They can then be selected when editing a backend user group.

.. note::

   The definition of file mount records also depends on so-called
   m
   file storages. This topic is covered in more detail in the
   :ref:`File Abstraction Layer reference <t3fal:start>`.

In order to inherit these settings in assigned users, activate the checkbox
"Mount from groups" for the "File Mounts" in the `be_users` record of this
user. This record can be found in the "List" module on the root page and in the
"Backend User" module.


.. index:: Permissions; File operations
.. _file-permissions:

File operation permissions
--------------------------

Giving access to file mounts is not the whole story. Specific operations
on files and directories must be allowed. This is what the next field
does. Choose either "Directory" or "Files" and start checking boxes.

.. include:: /Includes/Images/BackendUser/RstIncludes/BeGroupEditFilePermissions.rst.txt
