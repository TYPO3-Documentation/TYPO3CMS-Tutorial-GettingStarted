.. include:: /Includes.rst.txt


.. _groups:

======
Groups
======

While it is possible to change user permissions on a user basis,
it is strongly recommended to use groups instead. Just as for users,
there are "Backend user groups" and "Frontend user groups".

This chapter provides just a quick overview of backend user groups.
In the next chapter we will look at changing user permissions using
groups.

Backend groups can also be viewed using **SYSTEM > Backend users**
module:

.. figure:: ../../Images/BackendBackendUserGroups.png
   :alt: Viewing groups in the Backend Users module


We can see two groups that obviously correspond to our users
("simple" and "advanced"). Furthermore there is a "All users"
group which is a sub-group of the two others. This means that all
permissions set for the "All users" groups will be shared with both
"Advanced editors" users and "Simple editors" users.

To view which user is part of each group, the easiest is to click
on the "information" action icon. A pop-up will open with detailed
information about the group. Scroll down until you find the
"References to this item:" section. This shows the list of backend
users who are part of this group.

.. figure:: ../../Images/BackendBackendUserGroupDetail.png
   :alt: Checking out which users are part of the group
