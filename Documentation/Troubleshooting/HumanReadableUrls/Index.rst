
.. include:: ../../Includes.txt


.. _human-readable-urls:
.. _human-readable-url-s:

Human readable URLs
^^^^^^^^^^^^^^^^^^^

By default TYPO3 CMS identifies the page which should be delivered by the "?id"
parameter. Just enter *http://www.your-site.example.org/index.php?id=33* to get
the "Overview" page of the Introduction Package.

This is convenient but not good for visitors nor for proper referencing.
Human-readable URLs are provided by extension "realurl" (others exist).
Thus the above-mentioned URL becomes *http://www.your-site.example.org/content-examples/overview/*.

This should work out of the box with the Introduction Package. If it does not
you may want to deactivate human-readable URLs. The simplest way to achieve
this is to go to the **ADMIN TOOLS > Extensions** module and deactivate
extension "realurl".
