.. include:: /Includes.rst.txt
.. index:: Modules; List module
.. _list-module:

===============
The list module
===============

Almost all data stored in the database is represented as a
:ref:`Database record <t3coreapi:database-records>` in the TYPO3 backend.

The respective backend module called :guilabel:`Web > List` module can be
used to view, edit, search and export database records.

How to use the List module effectively for managing database records is
described in-depth in
:ref:`Editors Guide, Using the list module <t3editors:using-the-list-module-effectively>`.

For example there is a :ref:`Mass editing mode <t3editors:selective-editing>` and
a :ref:`clipboard <t3editors:clipboard>`.

.. _list-module-tca:

Display of database records in the List module
==============================================

How a database record type is displayed in the list module is determined by
:ref:`tca` and can be further configured by TSconfig. While TCA is always loaded
globally Tsconfig can be included on a per-site or per-page level.

..  todo: Link tsconfig once article exists in concepts.

Here are some examples of what you might want to change in the list module:

.. _list-module-mod-hideTables:

Hide tables in the List module
------------------------------

The TSconfig properties in section :ref:`web_list <t3tsref:pageweblist>`
can be used to influence display and functionality of the List module.

For example you can hide the records of certain tables visible in the List module with:

..  code-block:: typoscript
    :caption: EXT:site_package/Configuration/page.tsconfig

    mod.web_list {
        hideTables := addToList(tx_my_table,tx_my_table2)
    }

We use the :ref:`operator ":=" <t3tsref:typoscript-syntax-syntax-value-modification>` to add tables to a list that we want to hide.

.. _list-module-disableHideAtCopy:

Disable hide and prepend at copy
--------------------------------

By default copied database records are inserted hidden and with `(copy X)`
appended to their label. You can disable this default behaviour by
setting :ref:`disablePrependAtCopy <t3tsref:pagetcemaintables-disableprependatcopy>`
and :ref:`disableHideAtCopy <t3tsref:pagetcemaintables-disablehideatcopy>` for
the affected table belonging to the record to true like so:

..  code-block:: typoscript
    :caption: EXT:site_package/Configuration/page.tsconfig

    TCEMAIN.table.tx_my_table {
       disablePrependAtCopy = 1
       disableHideAtCopy = 1
    }

.. _list-module-TCAdefaults:

Define defaults for certain fields
----------------------------------

You can override the :confval:`default (TCA reference) <t3tca:input-default>`
set globally in the :ref:`tca` by setting a custom default value in TSconfig
:ref:`TCAdefaults <t3tsref:pageTsTcaDefaults>`:

..  code-block:: typoscript
    :caption: EXT:site_package/Configuration/page.tsconfig

    # Do not hide newly created pages by default
    TCAdefaults.pages.hidden = 0

    # Set the author of a news to "Anonymous"
    TCAdefaults.tx_news_domain_model_news.author = Anonymous
