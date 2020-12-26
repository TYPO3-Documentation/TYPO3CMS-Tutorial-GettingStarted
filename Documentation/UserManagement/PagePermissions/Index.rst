.. include:: /Includes.rst.txt
.. index::
   Backend users; Page permissions
   pair: Page; Permissions
.. _page-permissions:

================
Page permissions
================

:ref:`DB mounts <db-mounts>` are not the whole story about access to pages.
Users and groups also need to have rights to perform operations on the
pages like viewing, editing or deleting.

This is managed using the **SYSTEM > Access** module:

.. figure:: ../../Images/BackendAccessModule.png
   :alt: The Access module with ownerships and permissions


Every page has an owner, who is a user, and also a group
membership. Rights can be assigned to the owner, to the group
or to everyone. This will be familiar to Unix users.

To change a permission, simply click on the related icon and it
will switch state. To change the owner or the group of a given
page, click on the owner's or group's name and a small form appears.

.. figure:: ../../Images/BackendAccessModuleChangeOwner.png
   :alt: Changing a page's owner


It is also possible to change owner, group and permissions
recursively, even for the whole page tree. Let's place ourselves
on the home page by clicking on the "Congratulations" page in the
page tree. Now click again on the "Congratulations" page in the
*Access* module. You should see the following:

.. figure:: ../../Images/BackendAccessModuleChangeRecursively.png
   :alt: Preparing for recursively changing the group on the whole page tree


By choosing "All users" as group and then "Set recursively 3 levels"
in the "Depth" dropdown, we will assign **all** the pages in the
page tree to the "All users" group.

Actually this makes a lot of sense, since the "All users" group
is a sub-group of both "Simple editors" and "Advanced editors".
This way both groups will have the same permissions on the
page tree. However since they have different DB mounts, they
will not have access to the same set of pages.

.. figure:: ../../Images/BackendAccessModuleGroupChanged.png
   :alt: The group has changed for all pages
