:navigation-title: Page TSconfig
..  include:: /Includes.rst.txt
..  _site-management-page-tsconfig:

============================
Page TSconfig module (Sites)
============================

This module works in a similar way like the
:ref:`TypoScript module <site-management-typoscript>`.

Page TSconfig and TypoScript both use the same syntax and are loaded in a similar
fashion.

..  _site-management-page-tsconfig-overview:

Pages containing page TSconfig
==============================

Until TYPO3 version 13 page TSconfig was either added globally via a file
called :file:`EXT:my_extension/Configuration/page.tsconfig` or inserted or
included in the record of a page in the page properties. Doing so is still
possible for backward compatibility reasons.

If you included the Page TSconfig via a site set or globally it
not displayed in the overview submodule.

This does not mean it is not being loaded.

..  _site-management-page-tsconfig-active:

Active page TSconfig
====================

This module works much like :ref:`site-management-typoscript-active`.

..  _site-management-page-tsconfig-included:

Included page TSconfig
======================

This module works much like :ref:`site-management-typoscript-included`, however
the sources from which TSconfig is being loaded are different.

In this Guide we assume that you load page TSconfig via the the site set of your
site package. The TSconfig Reference gives you an overview of all possible
strategies to set page TSconfig:
:ref:`Setting page TSconfig <t3tsref:setting-page-tsconfig>`.

And to make confusion perfect there is also user TSconfig, which is loaded on a
per user basis: :ref:`Setting user TSconfig <t3tsref:setting-user-tsconfig>`
and can override page TSconfig:
:ref:`Overriding page TSconfig in user TSconfig <t3tsref:pageoverridingpagetsconfigwithusertsconfig>`

These topics are beyond the scope of this Guide however.
