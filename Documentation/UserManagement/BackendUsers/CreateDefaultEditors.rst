:orphan:

.. include:: /Includes.rst.txt

.. _user-management-create-default-editors:

====================
Create default users
====================

Create simple_editor
====================

Creating a new user and group is handled extensively in
:ref:`creating-a-new-user-for-the-introduction-site`.

Here, you will create 2 new users, using the already
existing groups (created by the "Introduction Package").


.. rst-class:: bignums

1. Enter the "Backend users" module

2. Click on the `+`: "Create new record"

   .. include:: /Images/AutomaticScreenshots/BackendUsers/CreateNewUser.rst.txt

3. Fill out some fields.

   * **Username:** lmueller
   * **Password:** *choose some password*
   * **Group:** Select "Simple editors" in the "Available Items"
   * **Name:** Liese Mueller

   .. include:: /Images/AutomaticScreenshots/BackendUsers/CreateNewUserSimpleEditor.rst.txt

4. Press save (top)

5. Activate the backend user

   .. include:: /Images/AutomaticScreenshots/BackendUsers/EditorUnhide.rst.txt

You have created a user with the already existing group
"Simple editors".

Create "advanced_editor"
========================

Now, create another user "advanced_editor". Use the group "Advanced Editors".

Change DB mount for group "simple editors"
==========================================

The group "Simple Editors" should have the page "Content Examples" set as
"DB Mounts" under "Mounts and Workspaces".

.. rst-class:: bignums

1. Select "Backend user groups" in the top

2. Click on the group "Simple editors" (or the edit pencil)

3. Select the tab "Mounts and Workspaces"

4. Check

   If you see the page "Congratulations" in DB Mounts, you should continue,
   if you see "Content Examples", you are done and can abort by selecting
   "Close" in the top.

5. Click on "Congratulation" and the garbage pail to remove this.

6. Click on the file icon "Browse for records"

7. Select the page "Content Examples"

8. Click Save

.. figure:: /Images/ManualScreenshots/BackendGroups/GroupDbMount.png
   :class: with-shadow
   :alt: Change DB Mount

   Change DB Mount


What did we just do?

We changed the DB mount from "Congratulations"
(which was the start page) to "Content Examples". The editor should
only see and edit the pages starting with "Content Examples". You will
see the result in the next step.

Next
====

Continue with :ref:`simulate-user`
