.. include:: /Includes.rst.txt
.. index:: Editing; Mass editing
.. _mass-editing:
.. _selective-editing:

============
Mass editing
============

The :guilabel:`List` module makes it possible to display the content of several
fields at once and gives you the ability edit several records with
one action.

Choose the columns to be displayed by clicking the :guilabel:`Show Columns`
button.

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/ShowColumnsButton.rst.txt

Then chose the field or fields from the modal. Select the :guilabel:`Type`
field for now and click on the :guilabel:`Update` button.

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/ShowColumnsModal.rst.txt

This makes the :guilabel:`Type` field appear in a new column to the right
of the record list:

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/RecordListWithAdditionalFields.rst.txt

To enable mass editing you have to switch into the record list single view by
clicking the tables title:

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/MassEditingEnabled.rst.txt


.. _editing-all-headers:

Edit all headers
================

To edit the headers of all records in one go,
select the pencil icon next to the "Header" label:

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/MassEditHeaderButton.rst.txt

You will then see this:

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/MassEditHeader.rst.txt

Upon saving this change will be applied to all records.

Edit all selected fields
========================

All fields that are currently viewable can be edited at the same
time by selecting a different icon:

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/MassEditMultipleFieldsButton.rst.txt

The result is almost the same form, but with the additional field "Type":

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/MassMultipleFields.rst.txt


Edit selected fields of selected records
========================================

When the advanced :ref:`clipboard with multi-selection<advanced_clipboard_usage>`
mode is activated, it is possible to select only those records that should be
edited.

.. include:: /Images/AutomaticScreenshots/ListModule/MassEdit/SelectiveEditing.rst.txt

The result is a form for editing just the chosen field for the
selected records.
