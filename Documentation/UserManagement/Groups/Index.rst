.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _groups:

Groups
^^^^^^

Let's look at the Simple editors group which the simple\_editor is a
member of.

.. _general:

General
"""""""

On the "General" tab you can edit the Group-Name, and write down a
short description for that group. If you select an Sub-Group, all
permissions from that group are inherited. An user which is in the
simple\_editor inherits all permissions from the "Simple editors"
Group and the "All users" Group.

.. figure: ../../Images/manual_html_m7f56a90a.png
   :alt:

.. _include-access-lists:

Include Access Lists
""""""""""""""""""""

The "Include Access Lists" is the important point to notice here since
that is the reason why we have all these options listed! Apart from
those the group contains DB mounts and Filemounts which apply to all
users that are members.

.. figure: ../../Images/manual_html_1c030fb1.png
   :alt:

.. _modules:

Modules
"""""""

Looking at the access lists you will see that (#1)membership of this
group will grant access to the Page and View module (unfortunately you
will have to know that these codes are the equivalents of the names
you know from the menu...).

.. figure: ../../Images/manual_html_m106ad6ae.png
   :alt:

.. _tables-modify:

Tables (modify)
"""""""""""""""

The tables that a simple\_editor is allowed to edit are listed (#2).

.. figure: ../../Images/manual_html_ma9f33b3.png
   :alt:

Log in as "simple\_editor" and then try to create a new element:

.. figure: ../../Images/manual_html_m446a3d10.png
   :alt:

Only pages and page content elements could be created. No users, no
news elements. Only pages and content elements.

Why this? Well, because "simple\_editor" should not worry about
anymore than this! He is not the guy in charge of the news, right!

.. _page-types:

Page types
""""""""""

This field (#3)dictates what page types members of the Simple editor
group should be able to select. But if the simple\_editor creates a
new page, he does not have the possibility to change the page type.

.. figure: ../../Images/manual_html_6a228642.png
   :alt:

That is because the Page-Type is not in the list of "allowed
Excludefields":

.. _allowed-excludefields:

Allowed Excludefields
"""""""""""""""""""""

.. figure: ../../Images/manual_html_2251c446.png
   :alt:

This is a long list, which becomes even longer with more Extensions
installed. It is very powerful, but it takes a little background to
understand it.

When tables and fields are configured in TYPO3 (in the internal global
PHP array, $TCA) some fields are marked as "excludeFields". This means
that the fields are not allowed to be edited unless you have been
granted special permission - that is what the "Allowed Excludefields"
list does!

This is easy to understand if you take a look at what the
"simple\_editor" sees when he edits a page header:

.. figure: ../../Images/manual_html_m521af062.png
   :alt:

Not an impressive amount of fields. In particularly not if you compare
it with what you see as "admin" user.

.. figure: ../../Images/manual_html_m1063a52d.png
   :alt:

The reason for this difference is that

- most of the fields in the pages are marked as "excludeFields" - hence
  cannot be edited by default - and

- that the All Users group where the simple\_editor inherits its rights,
  allows only access to some of these "excludeFields".

Now edit the simple\_editor group and select the Page-Type field
("Page: Type") and save the group.

.. figure: ../../Images/manual_html_m770456d0.png
   :alt:

Now log in as simple\_editor and edit a page-record.

.. figure: ../../Images/manual_html_m72404890.png
   :alt:

The simple\_editor has now the ability to change the page-type, but as
it has been configured in section page types, the simple\_editor has
only the choice between standard and shortcut.

.. _explicitly-allow-deny-field-values:

Explicitly allow/deny field values:
"""""""""""""""""""""""""""""""""""

.. figure: ../../Images/manual_html_m1c1aa696.png
   :alt:

You can restrict which type of content element a group is allowed to
use. If an editor should be allowed to use an plugin like tt\_news, it
is important to allow the use of the type "Insert Plugin" and to allow
in subsection "Pagecontent: Plugin:" the appropriate Plugin itself.

.. figure: ../../Images/manual_html_789c5406.png
   :alt:

.. note::

   **Inverting the behavior**

   You can change the behavior of this setting in the install tool. If
   you set [BE][explicitADmode] = explicitAllowyou have to select the
   types of content elements which a group should be allowed to use
   instead of deny those types.This is actually recommended. First of all
   it is more secure, as  **nothing** is allowed by default. It is also
   more intuitive when setting up permissions (because you are
   **giving** permissions and not **removing** them).

.. _db-mounts:

DB Mounts
"""""""""

DB mounts (database mounts) are used to restrict a user's access to
only some parts of the page tree. Each mount corresponds to a page in
the tree. The user will have access only to those pages and their sub-
pages.

.. figure: ../../Images/manual_html_m1e1c635.png
   :alt:

As you see it couldn't be more easy to give a specific user access to
a specific part of the page tree - just set the fields value to that
page. Or two pages even! You can add any number of "DB mounts" as you
like!

.. _file-mounts:

File Mounts
"""""""""""

The file mount assigned to the simple\_editor group is a relation to a
simple record created in the page tree root as well:

.. figure: ../../Images/manual_html_m1124cef8.png
   :alt:

When you edit it you will see how logically it is configured:

.. figure: ../../Images/manual_html_537c8346.png
   :alt:

Simply, the directory "user\_upload/documents/" (#1) isentered as PATH
and the "BASE" field is configured to interpret that path relative to
the "fileadmin/" direcotry (#2). That simple. When a user has a
relation set to this record he will have this directory  *mounted* in
his Filelist module!

.. _page-permissions:

Page Permissions
""""""""""""""""

One note to "DB mounts" - if the user has no  *read access permission*
to the page and sub pages of the DB mount then it really doesn't
matter whatever you have configured - it will  *not* work! And what is
*read*  *access* then? Each page has a  *permission setting for
access* like the file system on a UNIX server - there is an owner
user, an owner group and then permission settings for each in five
different categories; read page, edit page, delete page, new subpage
and page content. Normally the default settings are fine enough and
using the DB mounts to assign access is probably the easiest way to
go. If you run into trouble, just set all permissions to "on" - that
will make green starts over the full line (see image below). Of
course, if you want to really know the ins and outs of this, go to the
*Inside TYPO3 document*  <http://typo3.org/documentation
/document-library/core-documentation/doc_core_inside/current/>`_ -
here you will get the hairy explanation.Probably the best way to show
you how page permissions should be set is to view the current
permissions of the page tree. This is done by the "Access" module.

.. figure: ../../Images/manual_html_51767a67.png
   :alt:

If you see only one column "admin", than you have to select
permissions instead of "User overview" in the dropdown on top.

.. figure: ../../Images/manual_html_5a018e7e.png
   :alt:

You have an overview which user and groups are able to edit which
pages. You can change the permissions if you click on the allow/deny
Icons.When you look at the ownerships of the pages you can see that
the simple\_editor actually owns a few pages. He might have been the
creator of those. When you create a page you become its owner
automatically. But the main point is that the group "All users" is the
owner group of all pages. And since "All users" is a subgroup of
"Simple editors" as well as a subgroup of "Advanced editors" all
members of that groups have access to that pages. But they are still
restricted to work within their DB mounts. But with this configuration
it is only possible for the owner to delete a page.If an editor
creates a new page, he will become the owner of that page and his main
group (the first one, if he is member for more than one) will be set
for that page. But you are free to change that default values via Page
TypoScript configuration.

Let's have a look at that page TypoScript configuration. As user admin
edit the page "Home" and select the "Resources" tab.

.. figure: ../../Images/manual_html_73638fe6.png
   :alt:

In the "TypoScript configuration" section you can control how the
Backend should behave. We do not want to explain now, what you can do
with TSconfig, but keep in mind, that you can change how the Backend
react - on page basis! Have a look at the `*TSconfig
Reference*  <http://typo3.org/documentation/document-library/core-
documentation/doc_core_tsconfig/current/>`_ to get an overview.

.. _validation-of-settings:

Validation of settings
""""""""""""""""""""""

With the module "User Admin" you can actually validate that you have
set the correct permissions.

.. figure: ../../Images/manual_html_m53c7d08a.png
   :alt:

This will tell you right away what the  *combined permissions* will be
for her.

.. figure: ../../Images/manual_html_b97ee56.png
   :alt:

The first two green stars mean "Read page" and "New content on page" -
the red crosses means "Cannot edit, delete and create new pages".But
you can also simulate a backend user by clicking on the red "Switch to
user" Icon. After that you will be logged in as that user - and if you
log out, you will be switched back.

.. figure: ../../Images/manual_html_34947ac6.png
   :alt:

The User Admin module is a great tool to evaluate user settings,
compare users etc. Indispensable when you have many users and want to
make sure you have control over their rights!

.. _record-locking:

Record locking?
"""""""""""""""

Maybe you have noticed in the process of logging in and out as
different users that an icon like this can appear:

.. figure: ../../Images/manual_html_591f3138.png
   :alt:

This is just a warning to users that someone else is working on this
page at the moment - records are not truly locked in TYPO3 since
access to a record should be allowed if people have access. But this
warning is a nice touch since it helps people to avoid conflicts.Every
time a user starts to edit a content record, an internal flag is set,
which lasts for two hours. If the user close this record via save &
close or close Button, that flag gets deleted. But if the user just
select a different page to edit, that flag stay as it is. So, it is
recommended to use the close button, if you are done editing an
record.