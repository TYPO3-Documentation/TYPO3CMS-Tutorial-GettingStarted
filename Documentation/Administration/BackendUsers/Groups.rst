:navigation-title: Groups

..  include:: /Includes.rst.txt
..  _backend-users-groups:

=========================
TYPO3 backend user groups
=========================

All backend users without `administrator <https://docs.typo3.org/permalink/t3start:backend-users-admin>`_
privileges should belong to at least one user group, which is used to grant
backend permissions.

..  contents:: Table of content

..  _backend-users-groups-quick:

Quick start: Auto-create backend user groups for editors
========================================================

Manually creating backend user groups in TYPO3 is quite a complex task. We
therefore suggest to start with the two automatically created groups "Editor"
and "Advanced Editor" and adjust them to your needs.

These two user groups can be auto-created by the following TYPO3 console command:

..  tabs::

    ..  group-tab:: DDEV

        ..  code-block:: bash

            ddev typo3 setup:begroups:default -g Both

    ..  group-tab:: On server

        ..  code-block:: bash

            vendor/bin/typo3 setup:begroups:default -g Both

There is, as of date now, a way to create these groups using the backend or install
tool API (See open issue https://forge.typo3.org/issues/106098 ).

The `TYPO3 Editors Guide <https://docs.typo3.org/permalink/t3editors:start>`_
expects that your user belongs to one of these two groups, with some additions.

..  _backend-users-groups-upload:

Grant access to the user_upload folder (file mounts)
====================================================

The :ref:`automatically created user groups <backend-users-groups-quick>` from
the previous step have access to the :guilabel:`Media > Filelist` module, however, as
file mount is created automatically, they will only see an error message:

..  figure:: /Images/ManualScreenshots/BackendUser/MissingFolderPermissions.png
    :alt: Error message: Missing folder permissions. You have no access to the folder "1:/user_upload/".

    Error message when a user with the auto-generated groups opens the Filelist module

Unless your users or their groups have at least one file mount they will not be
able to upload files including images.

To create a file mount, go to the backend module :guilabel:`Media > Filelist`
then choose the folder in which you want to create a file mount.

Right click on the folder in the directory tree and choose "New Filemount"
from the context menu:

..  figure:: /Images/ManualScreenshots/BackendUser/CreateNewFilemount.png
    :alt: New filemount option in the dropdown of a folder in the Filelist module in the TYPO3 backend

    Create a new filemount, give a name to it and save it

Then go to the module :guilabel:`System > Backend Users`, choose "Backend user
groups" from the dropdown in the module header and edit the group of your users.

In tab "Mounts and Workspaces", select field "File Mounts", choose the newly
created file mount on the right to add it to the left side. After saving,
backend users belonging to that group should be able to upload files.

..  _backend-users-groups-manual:

Manually setting up backend user permissions
============================================

If you are interested in how to manually create or update a backend user group
in the Backend User module, refer to
`Setting up User Permissions <https://docs.typo3.org/permalink/t3coreapi:setting-up-user-permissions>`_.

..  note::
    Incomplete backend permissions can lead to strange behaviour and
    exceptions in the backend. Simulate a backend user and test their permissions
    thoroughly.

..  _backend-users-groups-page-permission:

Backend user groups and page permissions
========================================

Similar to a UNIX file system where each file belongs to exactly one user and
group, each page in the page tree also belongs to one user (usually the one who
created it) and one group (the first group of that user).

This can lead to problems because administrators often do not belong to a user group
and then the created pages will also not belong to a group.

This leads to the situation that even though your editor has the right to see
the page tree "Backend user group > Mounts and Workspaces > DB Mounts" and they
have the other necessary permissions, they still cannot see any pages because the
root page was created by an administrator and does not belong to a group.

You can fix such page permissions recursively in the module :guilabel:`System >
Permissions`.

..  figure:: /Images/ManualScreenshots/BackendUser/PermissionsModule.png
    :alt: The page permissions module in the TYPO3 backend.

You can then fix the permissions recursively. It is recommended to have a group
to which all editors belong. You can also assign this group to your
administrators. The backend permissions have no effect on the administrators and
all pages created by that administrator will also be visible and editable for
other backend editors.

If an administrator creates a page that must not be changed by an editor, they
can choose the option "Restrict editing by non-Admins" (editlock) from the
Access tab in the page properties.

It is also possible to set default values for owner, group and permissions via
page TSconfig. See `page TSconfig, permissions <https://docs.typo3.org/permalink/t3tsref:pagetcemain-permissions-user-group>`_.

..  seealso::

    *   `TYPO3 Explained, Page permissions <https://docs.typo3.org/permalink/t3coreapi:page-permissions>`_

..  _backend-users-technical:

Technical details
=================

Backend user groups and their permissions are stored in the database table
:sql:`be_groups`. At the time of writing there are no official solutions for
deployable backend user rights. You can, however, use the export / import module
to export and import backend user groups.

Backend user groups are database records that are stored on the virtual root
page (uid=0). They can therefore also be viewed and edited in the list module.

Backend user groups can inherit from one or several other user groups. In such
a setting it is possible to grant additional permissions of the parent user
group. It is, however, not possible to reduce the permissions of the parent user
group.
