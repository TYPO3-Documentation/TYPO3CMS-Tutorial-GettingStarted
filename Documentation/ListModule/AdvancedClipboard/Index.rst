.. include:: ../../Includes.txt


.. _advanced_clipboard_usage:
.. _the-numeric-clipboard-pads-managing-many-elements:

========================
Advanced Clipboard Usage
========================

Please move to the "TYPO3" page below the "About" page
and select one of the "numeric pads":

.. figure:: ../../Images/BackendActivateClipboardPad.png
   :alt:

Note how the list view was changed. Each record now has a checkbox
and action icons have been moved to the list header. With them
you can:

#. transfer selected items to the clipboard

#. edit all selected items at once

#. delete all selected items at once

#. select all items in the list

Now check both boxes and click the "Transfer" icon.
Your clipboard should look like this:

.. figure:: ../../Images/BackendClipboardWithMultipleItems.png
   :alt: Multiple items stored in the clipboard


Note how the elements are registered for "Move". The dropdown
menu can be used to change the behaviour to "Copy" (which you can do
if you don't want to change the current page).

Move to the "History" page and click the "Paste into" icon:

.. figure:: ../../Images/BackendPasteClipboardContent.png
   :alt: The "Paste into" icon at the top of the list

A warning appears to confirm the operation:

.. figure:: ../../Images/BackendClipboardWarning.png
   :alt: The dialog box for confirming the paste action


After confirmation, you can see that the two elements have been moved
to the top of the list and that the clipboard pane is empty:

.. figure:: ../../Images/BackendMovedContentEmpyClipboard.png
   :alt: Moved records and empty clipboard
