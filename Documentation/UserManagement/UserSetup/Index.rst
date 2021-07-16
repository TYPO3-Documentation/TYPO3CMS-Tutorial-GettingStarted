.. include:: /Includes.rst.txt
.. index:: Backend users; Setup
.. _setup-user:
.. _creating-a-new-user-for-the-introduction-site:

=================
Setting up a user
=================

To explore the last details of setting up a backend user
- and as an exercise - this chapter will guide you
through the process of creating a new user. To make it more
interesting, we will also create a new user group.


.. index:: Backend users; Group
.. _step-create-a-new-group:

Step 1: Create a new group
==========================

.. todo:: This needs to be reviewed and rewritten

Let's create a new user group using the :guilabel:`Backend Users` module.

.. include:: /Images/AutomaticScreenshots/BackendGroups/CreateNewGroup.rst.txt

Start by entering the name ("Resource editors"), optionally
a description and choose "All users" as sub-group.

.. include:: /Images/AutomaticScreenshots/BackendGroups/NewGroupGeneralTab.rst.txt

Let's keep things simple for the further permissions. Try to do
the following:

- for **Modules**, just choose "Web > Page" and "Web > View"
- for **Tables (listing)** and **Tables (modify)**, choose "Page"
  and "Page content"
- for **Page types**, select "Standard"

and save.

Move to the "Mounts and workspaces" tab and select the "Resources"
page as DB mount. To achieve that easily start typing "Res" in
the wizard at the right-hand side of the field. It will display
suggestions, from which you can select the "Resources" page.

.. include:: /Images/AutomaticScreenshots/BackendGroups/NewGroupDBMount.rst.txt

Let's ignore all the rest. Use the "Save and close" action
to get back to the group list.


.. index:: Backend users; Create
.. _step-create-the-user:

Step 2: Create the user
=======================

Similarly to what we have done before, let's create a new
user using the :guilabel:`Backend User` module.

.. include:: /Images/AutomaticScreenshots/BackendUsers/CreateNewUser.rst.txt


Enter the username, password, group membership:

.. include:: /Images/AutomaticScreenshots/BackendUsers/NewUserGeneralTab.rst.txt

.. include:: /Images/AutomaticScreenshots/BackendUsers/NewUserGroups.rst.txt


.. note::

   If we were creating a new administrator, we would just need
   to check the "Admin (!)" box. Admin users don't need to belong
   to any group, although this can still be useful to share
   special settings among administrators.

Now switch to the "Mounts and workspaces" tab
to ensure that the "Mount from Groups" settings are set:

.. include:: /Images/AutomaticScreenshots/BackendUsers/NewUserMountFromGroups.rst.txt


This makes it so that the DB and File mounts are taken from
the group(s) the user belongs to and are not defined at user-level.

Save and close the record. We will check the result of our work
by using the simulate user feature we saw earlier.

.. figure:: /Images/ManualScreenshots/BackendUsers/SimulateResourceEditor.png
   :alt: Let's simulate our new user!

You should see the following:

.. figure:: /Images/ManualScreenshots/BackendUsers/ResourceEditorUser.png
   :alt: The backend as seen by Resource McEditor
