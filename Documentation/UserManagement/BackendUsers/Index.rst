.. include:: /Includes.rst.txt
.. index:: pair: Modules; Backend users
.. _user-management-backend-users:

=============
Backend Users
=============

You can manage backend users using the **SYSTEM > Backend users**
module.

.. include:: /Images/AutomaticScreenshots/BackendUsers/BeUsersModule.rst.txt


This module makes it possible to search and filter users. They
can also be edited, deleted and disabled.

.. tip::

   See section :ref:`privileges` for more information on
   special backend user roles "admin" and "system maintainers".

Default editors in the Introduction Package
===========================================

The Introduction Package will create two default editors and
groups for you: "simple_editor" and "advanced_editor".

.. hint::

   The following steps assume that the editors "simple_editor"
   and "advanced_editor" exist. In some versions of the
   "Introduction Package", `they will not get created
   <https://github.com/FriendsOfTYPO3/introduction/issues/21>`__.

   If these users do not exist in your installation, please
   follow the steps in :ref:`user-management-create-default-editors`
   before you continue.


.. index:: Backend users; Simulate user
.. _simulate-user:

Simulate user
=============

.. _user-management-simple-editor:

"simple\_editor"
----------------

The simplest way to check out another user (when one is an
administrator) is to use the "simulate user" feature:

.. include:: /Images/AutomaticScreenshots/BackendUsers/BeUserSimulate.rst.txt

And here is what "simple\_editor" sees when accessing the
TYPO3 CMS backend:

.. figure:: /Images/ManualScreenshots/BackendUsers/SimpleEditorUser.png
   :alt: The backend view for the "simple\_editor"
   :class: with-shadow


As you can see, this user only has access to the "Page" module.
Furthermore its view of the page tree is also limited to the
branch starting with the "Content examples" page.

To switch back to the admin account, click on the user's name
in the top bar and click the "Exit" button (note that this button
normally reads "Logout").

.. figure:: /Images/ManualScreenshots/BackendUsers/AdvancedEditorUser.png
   :alt: The backend view for the "advanced\_editor"
   :class: with-shadow


.. _user-management-advanced-editor:

"advanced\_editor"
------------------

Now try doing the same with the "advanced\_editor". You should
see the following after switching user:

.. figure:: /Images/ManualScreenshots/BackendUsers/AdvancedEditorUser.png
   :alt: The backend view for the "advanced\_editor"
   :class: with-shadow

The "advanced\_editor" is allowed to use more modules than
"simple\_editor" but doesn't have any access to the page tree.
This is probably a bug of the Introduction Package, but it makes
for a good exercise for changing user rights in the next chapters.

.. note::

   User records can also be accessed using the **WEB > List** module
   and clicking on the root node (the one with the TYPO3 CMS logo).

   .. include:: /Images/AutomaticScreenshots/BackendUsers/BeUsersList.rst.txt

