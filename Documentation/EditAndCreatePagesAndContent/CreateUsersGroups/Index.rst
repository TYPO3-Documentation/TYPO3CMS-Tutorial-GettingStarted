.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


Create users/groups
^^^^^^^^^^^^^^^^^^^

Before you can create access restricted pages you must first and
foremost have one or more frontend users and groups. These can be
created before, during or after creation of your website. The order
doesn't matter.


Frontend and backend users
""""""""""""""""""""""""""

Now, wait a minute! How many kinds of users are there?

Well, there are only two kinds. Remember that we have two areas of
TYPO3 - the frontend (website) and the backend (administration).


Frontend users
~~~~~~~~~~~~~~

A frontend user (orange icons) can log in to the website of course.
They cannot change content (since they have nothing to do with the
backend!) but they merely exist because it allows us restrict access
to information on the website!

Frontend users (also called "Website users") are created in the system
where we want to create them. In our case we have made a nice folder
called "Frontend users and groups" for both users and groups. The only
requirement of this storage place for the frontend users is that we
tell the login to look at that folder for the users.

|img-88|

Now you can probably imagine that users and groups are not content
elements but records. So they won't fit into the columns concept of
the page module. That is where the list module of TYPO3 comes in
handy. The list module displays a listing of all records on a page.
Content elements are a special kind of records and are displayed in
the page module, all other records are normally only visible in the
list module.

Open the list module on the "Frontend users and groups" page:

|img-89|

You can see two tables, one containing the users and one containing
the user groups. Each table represents one record type in the list
view.


Backend users
~~~~~~~~~~~~~

A backend user (blue or green icon) works in the backend and is
concerned with changing the information behind the scenes. Because
backend users are concerned with the administration of a website they
have nothing to do with the access restriction on the website itself
(which is only partially true of course since backend users can
preview hidden frontend pages).

Backend users can be created only in one place - in the page tree root
(pid = 0) - and only by backend users that are "admin" users (who have
the admin-flag set, which is indicated by the blue icon) since they
are the  *only users* with access to records in the page tree root:

|img-90|

The three green backend users (1) are configured so they can maintain
a little part of the website each - more about that in the
*users section* later on. At (2) you see the configured
backend user groups for your website. Finally the "admin" user (3) -
the one we are working with - is blue and has total and unrestricted
access to any part of the system.


Editing a user or group
"""""""""""""""""""""""

As you can see we already have a folder "Frontend users and groups"
with user groups and two users.

The user group "Others" is really nothing but a dummy group. No
special settings or anything. The user group "Customers" has one
special setting: It contains the page the user will be redirected to
after he logs in.

Let's have a look at that setting (editing things in the list module
is pretty easy, just click on the user group icon in front of
Customers and you will get the context menu again, then choose edit):

|img-91|

Go to the "Extended" tab and you will see the redirect setting:

|img-92|


Creating a user
"""""""""""""""

Let’s try to create a user. Since frontend users (like page, page
content elements, news articles etc) are just database records in
TYPO3’s opinion, the same process of creation can be used for a
frontend user as for any other element. So this is even a general
introduction to creation of new elements!

Ready? It is simple. First, select the page in the page tree where you
want to create a new element.  *Click the “Create new record” icon on
the top-left of the content area* :

|img-93| Then select the "Website user" element:

|img-94| ... and enter the information.

|img-55| **Hidden stuff**

This page was configured to just contain users and groups, therefore
you can only create these few record types. If you use new on other
pages you will get more options.

In this case username, password and group are required fields:

|img-95|

Save the user. If you click the page title of the "Users" folder you
should see this listing:

|img-96|

|img-55| **Page Module**

For your convenience, the page module will list users too. However
this will not work for groups, nor for any other kind of records.

Therefore you should always use the link to the list module which is
displayed on top if you have selected a folder. It will switch to list
module and select the same folder.

Go to the login form page again and log in with your newly created
user:

|img-97|

