:navigation-title: TSconfig
..  include:: /Includes.rst.txt

..  _tsconfig:

=====
TSConfig
=====

There are two types of TSconfig: user TSconfig and page TSconfig.

..  _concepts_user_tsconfig:

=====
User TSconfig
=====

User TSconfig is a set of configuration values that affect backend users. They can
be set at the user level or at the backend user group level (then affecting all
users in that group). Things that can be configured are generally related to
permissions for basic functionality, for example, whether a user can clear the cache.

There are also configuration values for the admin panel (which is shown in the
frontend and not the backend).


..  _concepts_page_tsconfig:

=====
Page TSconfig
=====

Page TSconfig is a set of configuration values that affect pages.  It is set at
the page level and affects that page and all the pages below it in the tree. The
things that can be configured mainly affect the look and feel of the backend,
such as which fields are available when editing a content element. In general,
page TSconfig dictates what a user sees when they click on modules in the
left-hand module bar, e.g. Page, View, List.

..  _tsconfig-more-information:

Where to find more information
==============================

To learn more about TSconfig and how to use it in your TYPO3 projects, refer to the official
TYPO3 documentation:

*   `Using and setting TSconfig <https://docs.typo3.org/permalink/t3tsref:typoscript-syntax-using-setting>`_
