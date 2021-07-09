.. include:: /Includes.rst.txt
.. index:: Clipboard; Advanced
.. _advanced_clipboard_usage:
.. _the-numeric-clipboard-pads-managing-many-elements:

========================
Advanced clipboard usage
========================

Select a page (here, we use "Customizings"), the :guilabel:`List`
view and :guilabel:`"Clipboard #1 (multi-selection mode)"` on the
bottom of the page.

.. figure:: /Images/ManualScreenshots/ListModule//Clipboard/ActivateClipboardPad.png
   :class: with-shadow

Note how the List view was changed. Each record now has a checkbox
and action icons have been moved to the list header. With them
you can:


#. **Edit** all marked (selected) items at once

#. **Delete** all marked (selected) items at once

#. **Transfer** selected items to the clipboard

#. **Mark all / Mark none** items in the list

Now check several boxes and click the "Transfer" icon.
Your clipboard should look like this:

.. figure:: /Images/ManualScreenshots/ListModule//Clipboard/ClipboardWithMultipleItems.png
   :alt: Multiple items stored in the clipboard
   :class: with-shadow


Note how the elements are registered for "Move". The dropdown
menu can be used to change the behaviour to "Copy" (which you can do
if you don't want to change the current page).

Move to another page and click the "Paste into" icon:

.. figure:: /Images/ManualScreenshots/ListModule//Clipboard/PasteClipboardContent.png
   :alt: The "Paste into" icon at the top of the list
   :class: with-shadow

A warning appears to confirm the operation:

.. figure:: /Images/ManualScreenshots/ListModule//Clipboard/ClipboardWarning.png
   :alt: The dialog box for confirming the paste action


After confirmation, you can see that the two elements have been moved
to the top of the list and that the clipboard pane is empty:

.. figure:: /Images/ManualScreenshots/ListModule//Clipboard/MovedContentEmpyClipboard.png
   :alt: Moved records and empty clipboard
