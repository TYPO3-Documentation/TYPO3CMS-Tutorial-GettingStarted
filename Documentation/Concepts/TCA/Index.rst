..  include:: /Includes.rst.txt

..  _tca:

===============================
TCA (Table Configuration Array)
===============================

In TYPO3, TCA stands for Table Configuration Array. It is a core part of the
TYPO3 framework that defines how data is stored, displayed, and managed within
the TYPO3 backend. TCA is essential for customizing and configuring how TYPO3
handles database tables and how content is presented in the backend interface.

The TCA is essentially a large PHP array that
defines the structure of database tables and their fields within TYPO3.
It controls how data is displayed in forms, how records are listed,
and how data validation and processing are handled. TCA is used to configure
not only custom tables but also many of the core tables within TYPO3,
like tt_content, which manages page content.

..  _tca-what-is::

What is TCA used for?
=====================

TCA is used to:

*   TCA lets you define the fields of a database table, specifying data types, labels, default values,
    and constraints. You can configure various input types like text fields, checkboxes, and dropdowns.
*   TCA controls how forms are rendered in the TYPO3 backend. It defines the fields that are shown, their layout,
    and whether they are required or optional.
*   TCA allows developers to enforce validation rules on fields to ensure data integrity. For example, you can set a
    field to only accept numeric values or enforce a specific character limit.
*   TCA supports defining relationships between tables, such as one-to-one, one-to-many, and many-to-many relations.
    It manages how records from related tables are linked and displayed in the backend.
*   TCA handles which fields and records are editable, based on user roles and permissions.
*   TCA extends existing tables and creates new ones with custom field definitions

For example, when you create a new content element or extend an existing one,
you define the fields using TCA in the Configuration/TCA directory of your extension.
TYPO3 then uses this configuration to build the backend interface for editors.

..  _tca-more-information:

Where to find more information
==============================

To learn more about TCA and how to use it in your TYPO3 projects, you can refer to the official
TYPO3 documentation:

*   :ref:`TYPO3 TCA Reference <t3tca:introduction>`
*   :ref:`Database records <t3coreapi:database-records>`
*   :doc:`Relations <t3coreapi:ExtensionArchitecture/Extbase/Reference/Domain/Model#relations>`
