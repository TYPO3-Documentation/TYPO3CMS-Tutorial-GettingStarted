..  include:: /Includes.rst.txt

..  _tca:

===============================
TCA (Table Configuration Array)
===============================

The TCA (Table Configuration Array) is a central configuration mechanism in
TYPO3 that defines how the data from database tables is managed, displayed,
and interacted with in the backend. It is responsible for specifying the
structure and behavior of records in the TYPO3 backend, including how forms
are rendered for users, how data is validated, and what
options are available for editors.

What is TCA used for?
=====================

TCA is used to:

*   Define fields and how they are displayed in backend forms
*   Control access to specific field or options based on user roles.
*   Set validation rules for input fields (e.g., required fields, number formats)
*   Customize record interactions, such as creating, editing or deleting entries
*   Extend existing tables and create new ones with custom field definitions

For example, when you create a new content element or extend an existing one,
you define the fields using TCA in the Configuration/TCA directory of your extension.
TYPO3 then uses this configuration to build the backend interface for editors.

Where to find more information
==============================

To learn more about TCA and how to use it in your TYPO3 projects, you can refer to the official
TYPO3 documentation:

*   :ref:`TYPO3 TCA Reference <t3tca:introduction>`
