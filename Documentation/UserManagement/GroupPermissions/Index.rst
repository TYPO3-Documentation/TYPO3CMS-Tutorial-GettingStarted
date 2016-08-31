.. include:: ../../Includes.txt


.. _permissions:
.. _setting-up-user-permissions:

Setting up user permissions
^^^^^^^^^^^^^^^^^^^^^^^^^^^

We will look into setting up user permissions by editing the
"Advanced editors" user group.

.. figure:: ../../Images/BackendBackendGroupEditSettings.png
   :alt: Choosing the settings menu

.. _general:

General
"""""""

On the "General" tab you can edit the group's title and write a
short description. As mentioned before, permissions from sub-groups
will be inherited by the current group.

.. figure:: ../../Images/BackendBackendGroupEditGeneralTab.png
   :alt: Content of the "General" tab when editing a backend user group


.. note::

   Setting permissions is not just about access rights. It is also
   about decluttering the interface by letting the users see only
   what is really useful to them.


.. _access-lists:
.. _include-access-lists:

Access Lists
""""""""""""

The "Access Lists" tab is where most permissions are defined.
All fields are detailed below, one by one.


.. _modules:

Modules
~~~~~~~

The first field is used to define which modules members of the group
should have access to. Obviously this will influence what appears
in the module menu.

.. figure:: ../../Images/BackendBackendGroupEditModules.png
   :alt: Choosing modules for the backend user group


.. _tables:
.. _tables-modify:

Tables
~~~~~~

The second field allows to select the tables that the members of the
groups are allowed to see ("Tables (listing)"). And the next field is
the same but for the tables that can be modified ("Tables (modify)").

.. figure:: ../../Images/BackendBackendGroupEditTables.png
   :alt:


.. _page-types:

Page types
~~~~~~~~~~

This field restricts which page types are available to members
of the group. Explanations about the various page types are
found in the Editors Guide.

.. figure:: ../../Images/BackendBackendGroupEditPageTypes.png
   :alt:


.. _allowed-excludefields:

Allowed Excludefields
~~~~~~~~~~~~~~~~~~~~~

When defining table fields in TYPO3 CMS, it is possible to mark them
as "excluded". Such fields will never be visible to backend users
(except administrators, of course) unless they are explicitely given
access to them. This field is about giving such access. It displays
a list of all tables and their excluded fields.

.. figure:: ../../Images/BackendBackendGroupEditExcludeFields.png
   :alt: The list of excluded fields in its default state (all tables collapsed)


Click on a table name to expand the list of its fields and make
a selection of fields by checking some boxes.

.. figure:: ../../Images/BackendBackendGroupEditExcludeFieldsExpanded.png
   :alt: The same list with one table expanded


.. _explicitly-allow-deny-field-values:

Explicitly allow/deny field values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For some fields, it is possible to define fine-grained permissions
on the actual values allowed for those fields. This is in particular
the case for the "Page content: Type" field, which defines the type
of content element that can then be defined by the members of the
group.

As with the list of excluded fields, this fields first appears
with groups collapsed. You need to expand one group to start
making changes.

.. figure:: ../../Images/BackendBackendGroupEditAllowDeny.png
   :alt: Setting permissions for values of the content type field


Limit to languages
~~~~~~~~~~~~~~~~~~

In multilingual web site, it is also possible to restrict users
to only some languages. This can be achieved using the last field
of the "Access Lists" tab.

.. figure:: ../../Images/BackendBackendGroupEditLanguages.png
   :alt: Setting permissions for languages


.. _mounts:

Mounts and workspaces
"""""""""""""""""""""

The next tab contains very important fields which define over
which part of the page tree and the file system the members of
the group may exert their rights.

We will cover only mounts here. Detailed information about
workspaces can be found in the :ref:`related extension manual <workspaces:start>`.


.. _db-mounts:

DB Mounts
~~~~~~~~~

DB mounts (database mounts) are used to restrict a user's access to
only some parts of the page tree. Each mount corresponds to a page in
the tree. The user will have access only to those pages and their sub-
pages.

.. figure:: ../../Images/BackendBackendGroupEditDBMounts.png
   :alt: Choosing DB mounts for the group


See also :ref:`Pages permissions <page-permissions>`.

.. _file-mounts:

File Mounts
~~~~~~~~~~~

File mounts are similar but for access to files. The main difference
is that file mount records must be defined by the administrator first.
These are located in the root node:

.. figure:: ../../Images/BackendFileMountList.png
   :alt: List of all available file mounts


They can then simply be selected when editing a backend user group:

.. figure:: ../../Images/BackendBackendGroupEditFileMounts.png
   :alt: Selecting allowed file mounts

.. note::

   The definition of file mount records also depends on so-called
   file storages. This topic is covered in more detail in the
   :ref:`File Abstraction Layer reference <t3fal:start>`.


.. _file-permissions:

Fileoperation permissions
~~~~~~~~~~~~~~~~~~~~~~~~~

Giving access to File mounts is not the whole story. Specific operations
on files and directories must be allowed. This is what the next field
does. Choose either "Directory" or "Files" and start checking boxes.

.. figure:: ../../Images/BackendBackendGroupEditFilePermissions.png
   :alt: Giving specific file operation permissions
