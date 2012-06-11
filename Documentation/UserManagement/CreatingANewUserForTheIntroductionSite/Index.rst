.. include:: Images.txt

.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. ==================================================
.. DEFINE SOME TEXTROLES
.. --------------------------------------------------
.. role::   underline
.. role::   typoscript(code)
.. role::   ts(typoscript)
   :class:  typoscript
.. role::   php(code)


Creating a new user for the Introduction site
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Now, we can create a user who should be in charge for the "Resources"
page including sub-pages.


Step 1: create a new User group "Resources editors"
"""""""""""""""""""""""""""""""""""""""""""""""""""

User groups and Users are just records. Copy the backend user group
record "Simple editors".

|img-199|

Reload the List.

|img-200|

And paste the copied record in the list.

|img-201| Now edit the newly created backend user group "Simple
editors (copy 1)". Change the group's title and the DB mount.

|img-202|


Step 2: create the user
"""""""""""""""""""""""

Users are just records - create a "Backend user" record:

|img-203|

Enter the username, password, group membership:

|img-204|

Take care, that the "Mount from Groups" settings are set:

|img-205|

Save the record and check the new backend user with the switch-user
function in the Admin-Tool.

|img-206|

It works:

|img-207|

