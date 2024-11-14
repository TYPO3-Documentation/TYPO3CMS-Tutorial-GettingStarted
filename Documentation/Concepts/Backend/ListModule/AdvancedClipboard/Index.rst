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

.. include:: /Images/AutomaticScreenshots/ListModule/ActivateClipboardPad.rst.txt

Note how the List view was changed. Each record now has a checkbox
and action icons have been moved to the list header. With them
you can:


#. **Edit** all marked (selected) items at once

#. **Delete** all marked (selected) items at once

#. **Transfer** selected items to the clipboard

#. **Mark all / Mark none** items in the list

Now check several boxes and click the "Transfer" icon.
Your clipboard should look like this:

.. include:: /Images/AutomaticScreenshots/ListModule/ClipboardWithMultipleItems.rst.txt

Note how the elements are registered for "Move". The dropdown
menu can be used to change the behaviour to "Copy" (which you can do
if you don't want to change the current page).

Move to another page and click the "Paste into" icon:

.. include:: /Images/AutomaticScreenshots/ListModule/PasteClipboardContent.rst.txt

A warning appears to confirm the operation:

.. include:: /Images/AutomaticScreenshots/ListModule/ClipboardWarning.rst.txt

After confirmation, you can see that the two elements have been moved
to the top of the list and that the clipboard pane is empty:

.. include:: /Images/AutomaticScreenshots/ListModule/MovedContentEmpyClipboard.rst.txt
