.. include:: ../Includes.txt


.. _setup:

================
Setting Up TYPO3
================

Once TYPO3 is installed, the default Site record needs to be configured before content and templates can be added.

Managing Site Records
=====================

A single installation of TYPO3 can host multiple websites each with its own content, appearance and domain.

The Site Management Module handles the routing and management for every site in an installation of TYPO3 and stores this information inside individual configuration files.

During installation, TYPO3 automatically creates a basic site record.

However, some additional information is required.

-  A unique internal and external site name needs to be set.
-  Set the domain for the site

Site name, title and entry point
--------------------------------

:guilabel:`Site Management > Sites > "THING"`

* **Root Page ID*** Points to the root page of the page tree for this site
* **Site Identifier** Used internally, make this unique and only use alphanumeric characters (will also be the directory name of this site configuration)
* **Website Title** Visible in the front end title tag
* **Entry Point** Here we attach the domain for our site, it should be the fully qualified domain of our web site https://example.com/
* **Variant for the entry point** Used to configure for example the local web site domain (in development context)

.. todo:: Mention development vs. production context in the install and deployment guide

Languages
---------

Configure the first/default language
++++++++++++++++++++++++++++++++++++

:guilabel:`Site Management > Languages`

TYPO3 adds a "default" language to the site configuration during installation.

If the default language is not English US, it can be changed here.

Add users to the backend
========================

To create additional backend user records, navigate to :guilabel:`System > Backend Users`.

Here a list of all current backend users will be displayed.

With :guilabel:`create new record` a new backend user can be created.

This user record has to be "Enabled" before it can be used to log in to the backend.

A username and password need to be set. Additional information can also be provided such as the users name and email address.

If this user should have full access to the backend, the "Admin" toggle needs to be enabled.

Change the backend language
===========================

By default, TYPO3s backend is set to English with no additional languages available.

To install an additional language pack and have it set as the default backend language for your user account:

* Admin Tools > Maintenance > Manage Languages Packs

* Select "Add Language" and "Activate" the new language

* Toolbar (top right) > User Avatar > User Settings

* Language > Select the new language > Save > Reload the browser

Note, this change only applies to your account.

To change the backend language of another user:

* :guilabel:`System > Backend Users`

* Select the user

* User Interface Language > Select New language