.. include:: /Includes.rst.txt
.. index:: Backend users; Groups
.. _groups:

======
Groups
======

While it is possible to change permissions on a per user basis,
it is strongly recommended you use groups instead. Just as for users,
there are "Backend user groups" and "Frontend user groups".

This chapter provides a quick overview of backend user groups.
In the next chapter we will look at changing user permissions using
groups.

Backend groups can also be viewed using **SYSTEM > Backend users**
module:

.. include:: /Images/AutomaticScreenshots/BackendGroups/Groups.rst.txt


We can see two groups that correspond to our users
("simple" and "advanced").

To find out what group each user is a member of, select the
"information" action icon. A pop-up will open with detailed
information about the group. Scroll down until you find the
"References to this item:" section. This shows the list of backend
users who are part of this group.

.. include:: /Images/ManualScreenshots/BackendGroups/GroupDetail.rst.txt
