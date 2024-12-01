:navigation-title: TSconfig
..  include:: /Includes.rst.txt

..  _tsconfig:

========
TSConfig
========

There are two types of TSconfig: user TSconfig and page TSconfig.

..  _concepts_user_tsconfig:

User TSconfig
=============

User TSconfig is a set of configuration values that affect backend users. Best
practice is to set them globally (in a site package TSconfig file) but they can
also be set at the backend user or group level (then affecting all
users in that group). Things that can be configured are generally related to
permissions for basic functionality, for example, whether a user can clear the cache.

There are also configuration values for the :ref:`TYPO3 Admin Panel <typo3/cms-adminpanel:start>`
(which is shown in the frontend and not the backend).


..  _concepts_page_tsconfig:

Page TSconfig
=============

Page TSconfig is a set of configuration values that affect pages.  It is often
set globally at the site level (in a site package TSconfig file) but can also be
set at the page level and then affects that page and all the pages below it in
the tree. The things that can be configured mainly affect the look and feel of the backend,
such as which fields are available when editing a content element. In general,
page TSconfig dictates what a user sees when they click on modules under `Web` in the
left-hand module bar that open a pagetree, e.g. Page, View, List.

..  _tsconfig-more-information:

Where to find more information
==============================

To learn more about TSconfig and how to use it in your TYPO3 projects, refer to the official
TYPO3 documentation:

*   `Using and setting TSconfig <https://docs.typo3.org/permalink/t3tsref:typoscript-syntax-using-setting>`_
