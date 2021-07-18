.. include:: /Includes.rst.txt
.. index:: Editing; Mass editing
.. _mass-editing:
.. _selective-editing:

============
Mass editing
============

.. todo: The enabling of additional collumns changed

The list module makes it possible to display additional information
about each record and gives you the ability edit several records with
one action.
To enable this feature, select the table header (1):

.. figure:: /Images/ManualScreenshots/ListModule//AdditionalFields.png
   :alt: The List view with an additional field displayed
   :class: with-shadow


This restricts the view to that single table and adds a selector (2)
where you can select which additional fields to display. Select the "Type"
field for now and click on the "Set fields" button.
This makes the "Type" field appear in a new column to the right of the record
list (4).


.. _editing-all-headers:

Edit all headers
================

To edit the headers of all records in one go,
select the pencil icon next to the "Header" label:

.. figure:: /Images/ManualScreenshots/ListModule//EditAllHeaders.png
   :alt: The button to edit a given field for all records
   :class: with-shadow

You will then see this:

.. figure:: /Images/ManualScreenshots/ListModule/ChangeAllHeaders.png
   :alt: Editing form displayed for all records
   :class: with-shadow

Upon saving this change will be applied to all records.

Edit selected fields
====================

All fields that are currently viewable can be edited at the same
time by selecting a different icon:

.. figure:: /Images/ManualScreenshots/ListModule/EditAllFields.png
   :alt: The button to edit all fields visible in the list
   :class: with-shadow

The result is almost the same form, but with the additional field "Type":

.. figure:: /Images/ManualScreenshots/ListModule/ChangeAllFields.png
   :alt: Editing form displayed for all records and all fields
   :class: with-shadow


Edit selected fields of selected records
========================================

This can be further refined:

#. Additionally select the checkbox for the field "Visible" on the bottom
#. Click "Set fields" again
#. Select some records
#. Click "Edit all shown fields of the listed records"

Activate one of the clipboard pads if
this is not already the case and check the boxes for a couple of records:

.. figure:: /Images/ManualScreenshots/ListModule/SelectiveEditing.png
   :alt: Selecting records for editing
   :class: with-shadow
   :scale: 70

The result is a form for editing just the chosen field for the
selected records:

.. figure:: /Images/ManualScreenshots/ListModule/SelectiveEditingForm.png
   :alt: Editing form displayed for the selected records
   :class: with-shadow
