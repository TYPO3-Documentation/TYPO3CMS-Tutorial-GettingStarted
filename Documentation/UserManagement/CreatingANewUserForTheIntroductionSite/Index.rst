.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


Creating a new user for the Introduction site
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Now, we can create a user who should be in charge for the "Resources"
page including sub-pages.

Step 1: create a new User group "Resources editors"
"""""""""""""""""""""""""""""""""""""""""""""""""""

User groups and Users are just records. Copy the backend user group
record "Simple editors".

.. figure:: ../../Images/manual_html_m166b86cc.png
   :alt:

Reload the List.

.. figure:: ../../Images/manual_html_m39541f53.png
   :alt:

And paste the copied record in the list.

.. figure:: ../../Images/manual_html_m1ddf554d.png
   :alt:

Now edit the newly created backend user group "Simple
editors (copy 1)". Change the group's title and the DB mount.

.. figure:: ../../Images/manual_html_m36f2898f.png
   :alt:

Step 2: create the user
"""""""""""""""""""""""

Users are just records - create a "Backend user" record:

.. figure:: ../../Images/manual_html_m74be0f7a.png
   :alt:

Enter the username, password, group membership:

.. figure:: ../../Images/manual_html_766f37f6.png
   :alt:

Take care, that the "Mount from Groups" settings are set:

.. figure:: ../../Images/manual_html_m3d0a5273.png
   :alt:

Save the record and check the new backend user with the switch-user
function in the Admin-Tool.

.. figure:: ../../Images/manual_html_121afd2b.png
   :alt:

It works:

.. figure:: ../../Images/manual_html_m6ca57d36.png
   :alt: