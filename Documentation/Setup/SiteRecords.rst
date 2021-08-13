.. include:: /Includes.rst.txt


.. _siterecords:

======================
Creating A Site Record
======================

A single installation of TYPO3 can host multiple websites each with its own content, appearance and domain.

The Site Management Module handles the routing and management for every site in an installation of TYPO3 and stores this information inside individual configuration files.

During installation, TYPO3 automatically creates a basic site record.

However, some additional information is required once TYPO3 is installed.

-  A unique internal and external name needs to be set for the site record.
-  A domain needs to be set for the site.

Site name, title and entry point
--------------------------------

:guilabel:`Site Management > Sites > "THING"`

* **Root Page ID*** Points to the root page of the page tree for this site
* **Site Identifier** Used internally, make this unique and only use alphanumeric characters (will also be the directory name of this site configuration)
* **Website Title** Visible in the front end title tag
* **Entry Point** Here we attach the fully qualified domain of our web site - https://example.com/
* **Variant for the entry point** Used to configure for example the local web site domain (in development context)

Languages
---------

Configure the first/default language
++++++++++++++++++++++++++++++++++++

:guilabel:`Site Management > Languages`

TYPO3 adds a "default" language to the site configuration during installation.

If the default language is not English US, it can be changed here.
