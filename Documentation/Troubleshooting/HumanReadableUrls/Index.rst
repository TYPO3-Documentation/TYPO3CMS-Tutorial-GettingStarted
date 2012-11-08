.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


Human readable URLs
^^^^^^^^^^^^^^^^^^^

By default, TYPO3 identifies the page which should be delivered via
the ?id parameter. So you can just enter  *http://www.your-
site.example.org/* index.php?id=4 to get the examples page. As every
page in TYPO3 has an id, you only need to know that id to get the
page. But for your visitors the url  *http://www.your-
site.example.org* /examples/ would be nicer. In TYPO3 this features
comes as an extension (and there are actually several). The
Introduction Package comes with one called "RealURL". If you have
special needs regarding the scheme of your URLs, have a look at its
manual.

RealURL should work just out of the box for you in the Introduction
Package. If it does not, and you get redirected to the Welcome page
with each click in the frontend, you may just deactivate realurl. For
doing so, just go to the list module, select the template
"Introduction Package" on the page "home" and put into the setup-
field::

   config.tx_realurl_enable = 0

Save the template record and just clear all caches. All links should
be rendered with ?id= instead of human readable URLs now, and you
should be able to just navigate trough your page.

[we need to show the clear cache with screenshot – users do not know
how to do this]

