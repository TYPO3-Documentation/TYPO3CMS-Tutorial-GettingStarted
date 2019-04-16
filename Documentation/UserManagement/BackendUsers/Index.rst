.. include:: ../../Includes.txt

.. _user-management-backend-users:

=============
Backend Users
=============

Managing backend users is best done using the **SYSTEM > Backend users**
module.

.. figure:: ../../Images/BackendBackendUsersModule.png
   :alt: The Backend Users module
   :class: with-shadow


The module makes it possible to search and filter users. They
can also be edited, deleted or disabled.

Default Editors in the Introduction Package
===========================================

The Introduction Package should create two default editors and
groups for you: "simple_editor" and "advanced_editor".

.. hint::

   The following steps assume that the editors "simple_editor"
   and "advanced_editor exist". In some versions of the
   "Introduction Package", `they will not get created
   <https://github.com/FriendsOfTYPO3/introduction/issues/21>`__.

   If these users do not exist in your installation, please
   follow the steps in :ref:`user-management-create-default-editors`
   before you continue.

.. _simulate-user:

Simulate User
=============

.. _user-management-simple-editor:

"simple\_editor"
----------------

The simplest way to check out another user (when one is an
administrator) is to use the "simulate user" feature:

.. figure:: ../../Images/BackendBackendUsersSimulate.png
   :alt: The last action icon lets us simulate another user
   :class: with-shadow


And here is what "simple\_editor" sees when accessing the
TYPO3 CMS backend:

.. figure:: ../../Images/BackendSimpleEditorUser.png
   :alt: The backend view for the "simple\_editor"
   :class: with-shadow


As you can see, this user only has access to the "Page" module.
Furthermore its view of the page tree is also limited to the
branch starting with the "Content examples" page.

To switch back to the admin account, click on the user's name
in the top bar and click the "Exit" button (note that this button
normally reads "Logout").

.. figure:: ../../Images/BackendBackendUsersSimulateExit.png
   :alt: Exiting the backend user simulation
   :class: with-shadow


.. _user-management-advanced-editor:

"advanced\_editor"
------------------

Now try doing the same with the "advanced\_editor". You should
see the following after switching user:

.. figure:: ../../Images/BackendAdvancedEditorUser.png
   :alt: The backend view for the "advanced\_editor"
   :class: with-shadow

The "advanced\_editor" is allowed to use more modules than
"simple\_editor" but doesn't have any access to the page tree.
This is probably a bug of the Introduction Package, but it makes
for a good exercise for changing user rights in the next chapters.

.. note::

   User records can also be accessed using the **WEB > List** module
   and clicking on the root node (the one with the TYPO3 CMS logo).

   .. figure:: ../../Images/BackendBackendUsersList.png
      :alt: Viewing backend users in the List module
      :class: with-shadow

.. _user-management-system-maintainers:

System Maintainers
==================

Introduced in TYPO3 CMS 9, there is a special permission for Backend Users.
The first created user, during installation of TYPO3, is already marked as a
System Maintainer. Other users can become System Maintainers only within the module
**Admin Tools > Settings > Manage System Maintainers**.

System Maintainers are the only users who are able to see and access the Install Tool
and the Extension Manager. These users are persisted within the
:file:`LocalConfiguration.php` as :php:`$GLOBALS['TYPO3_CONF_VARS']['SYS']['systemMaintainers']`.

Also see changelog `Feature: #82266 - Backend Users System Maintainers <https://docs.typo3.org/typo3cms/extensions/core/Changelog/9.0/Feature-82266-BackendUsersSystemMaintainers.html>`_.
