.. include:: ../../Includes.txt


.. _human-readable-urls:
.. _human-readable-url-s:

Human readable URLs
^^^^^^^^^^^^^^^^^^^

By default TYPO3 CMS identifies the page which should be delivered by the "?id"
parameter. Just enter *http://www.your-site.example.org/index.php?id=33* to get
the "Overview" page of the Introduction Package.

This is convenient but not good for visitors nor for proper referencing.

Starting from version 9.5, Human-readable URLs are created automatically by TYPO3.
This functionality is available for pages, languages and also extensions; 
its documentation is available at :ref:`t3api:site-handling` and other tutorials like
https://typo3worx.eu/2018/10/typo3-site-management-and-routing/ and 
https://typo3worx.eu/2018/12/typo3-routing-extensions-and-enhancers/ are also available.

On previous TYPO3 versions, this functionality was provided by the extension 
`realurl <https://extensions.typo3.org/extension/realurl/>`__  (others exist).
Thus the above-mentioned URL becomes for example *http://www.your-site.example.org/content-examples/overview/*.
