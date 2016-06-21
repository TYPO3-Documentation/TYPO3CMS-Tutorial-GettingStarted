.. include:: ../../Includes.txt

.. _clipboard:

The clipboard
^^^^^^^^^^^^^

Every time a record is copied in the TYPO3 CMS backend,
it appears in the clipboard found at the bottom of the List module
screen.

Click on the copy icon of the "Features" page:

.. figure:: ../../Images/BackendCopyToClipboard.png
   :alt: Pointing at the copy icon


Now scroll down and look at the clipboard:

.. figure:: ../../Images/BackendSimpleClipboard.png
   :alt: The clipboard with the newly copied record


Note how the clipboard registers the fact that we have chosen
the "Copy" action. The "Cut" action is the same, but the clipboard
will reflect that with different texts.

As you can see, the clipboard indicates that it is in
"single record mode". If you cut or copy another record it will
replace the current content of the clipboard. In the next chapter
we will look at the other clipboards.
