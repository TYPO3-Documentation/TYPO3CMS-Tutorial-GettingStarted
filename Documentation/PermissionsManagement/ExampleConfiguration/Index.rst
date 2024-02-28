.. include:: /Includes.rst.txt

.. index:: backend, acl, permissions, user groups, user management

.. _example-configuration:

============================================
Example configuration of backend user groups
============================================

Knowing how backend user groups can be :ref:`categorized <_available-acl-options>`,
and how they can be organized using :ref:`naming conventions <_naming-convention>`
to distinguish their purpose or context, also following other best practices,
more advanced examples of group structures for projects with a single or multisite setup
can be discussed.

.. _single-site-structure:

Backend groups’ structure for a small project
==============================================

When setting up backend groups and permissions for small, single-site projects,
consider future complexity. Organizing groups by best practices from the start
makes future extension and maintenance easier.

Consider a scenario where two role groups are required: one for general content management,
named :samp:`Content Editor`, and another for survey management, named :samp:`Survey Manager`.

The following conditions should be met:

* Both roles should manage content in all languages
* Both roles should perform any file operations
* The Content Editor role has a dedicated file mount for organizing various files
* The Survey Manager role should have access to a dedicated file mount within the same file storage
* The Content Editor role should be able to view files uploaded by users with the Survey Manager role, as they might need them for blog posts mentioning the surveys
* The Content Editor role should manage all types of content, except for surveys
* The Content Editor should have access to a dedicated branch in system categories
* The Survey Manager role should only see the storage folder and a selected part of the pages tree where the surveys are listed and rendered
* The Survey Manager role does not need access to any system categories

With these requirements in mind, the backend groups structure can be planned.
Following the recommendations of having the :ref:`System Groups <_system-groups>`
and :ref:`Access Control List Groups <_acl-groups>`, it could look like this:

..  uml:: _backend-groups-simple-project.plantuml
    :align: center
    :width: 700

Having defined all the required :samp:`System` and :samp:`Access Control List` groups,
they can be combined to fulfill the :samp:`Content Editor` and :samp:`Survey Manager`
roles requirements.

..  uml:: _backend-groups-simple-project-organized.plantuml
    :align: center
    :width: 700

Both :samp:`System` and :samp:`Access Control List (ACL)` groups serve as components
that can be integrated into a larger entity, in this case, the role group.
These role groups can then be assigned to users. As previously mentioned,
it's recommended that only the role groups be directly assigned to users.

.. _multisite-structure:

Backend groups’ structure for a multi-site project
==================================================

When designing backend user groups for a multi-site project, the approach remains
consistent with that of a smaller, :ref:`single-site project <_single-site-structure>`.
Adhering to recommended best practices from the start simplifies the expansion
and preparation of a more advanced setup.

This scenario describes a project with three separate sites (a multi-site setup).
There will be three distinct :samp:`Content Editors` roles, one for each site,
along with multiple other roles that will have cross-site access and permissions
to manage content.

Rhe following condition should be met:

* Project has 3 separate sites defined: Website A, Website B, Website C
* Project has one default language and one translation to English language
* For each site there are separate Content Editor roles as they will have different permissions
* Content Editor roles on Website A and Website C will have access to all languages, while the Content Editor role for Website B will have access only to the English language
* Each Content Editor role  should have access to dedicated system categories branch
* Each Content Editor role can manage general content elements
* Content Editor role on Website A and C can manage news
* Content Editor role on Website A and C can manage galleries
* Content Editor role on Website A can manage use custom page types
* Content Editor role on Website A can manage contact forms (send responses etc.)
* Content Editor role on Website B can manage surveys

Start by creating the necessary groups to form role groups. This includes system groups
for each site and shared groups across different roles and sites. Next, define the
ACL groups, which will be universally reusable for all role groups on any site.

..  uml:: _backend-groups-multisite-project-1.plantuml
    :align: center
    :width: 700

..  uml:: _backend-groups-multisite-project-2.plantuml
    :align: center
    :width: 700

Groups specific to particular sites (e.g., page group, database mounts) have
been identified as well as the :samp:`shared groups`, which are universal,
and should be reused across role groups. These shared groups are applicable
for roles dedicated to a single site as well as for cross-site groups.

The ACL groups could be further granulated if necessary, by separating permissions
for different content elements and dividing records’ related groups into multiple
ones — for editing records, managing lists and details through plugins, etc.
It wasn't done here to avoid overly complicating the diagram, which is already
quite comprehensive. However, in your setup, it might be necessary to create
more ACL groups, each responsible for a smaller set of permissions than those shown here.

The desired backend groups structure and aggregation could look like this:

..  uml:: _backend-groups-multisite-project-organized.plantuml
    :align: center
    :width: 700

You should grasp the essence of this concept: numerous smaller backend groups
can be combined to form a Role group. Role groups are the 'top' tier and are
the only ones that can be assigned to users later on.
