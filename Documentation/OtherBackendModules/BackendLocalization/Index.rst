.. include:: /Includes.rst.txt
.. index:: Backend; Languages
.. _changing-backend-language:

========================
Manage backend languages
========================

.. important::

   This chapters cover modules that will only be available for backend users
   with :ref:`"system maintainer" <system-maintainer>` access privileges.

The TYPO3 CMS backend is available in many languages. These
translations are bundled into packages which need to be fetched
from the community translation server (https://translation.typo3.org/).
Once installed backend users can choose which language to use.


.. index:: Modules;  Manage language packs

Load and update translation packages
====================================

.. rst-class:: bignums

1. Open the module :guilabel:`Manage Language Packs`

   .. figure:: /Images/ManualScreenshots/AdminTools/ManageLanguage.png
      :alt: Open the backend language administration module
      :class: with-shadow

      Open the backend language administration module

2. Click on :guilabel:`add language` and on the :guilabel:`+` next to your language

   .. figure:: /Images/ManualScreenshots/AdminTools/ManageLanguagePacksAddLanguage.png
      :alt: Open the backend language administration module
      :class: with-shadow

      Open the backend language administration module

3. Click on "Update all" to update the activated languages.

It is recommended to update regularly to benefit from completed or
improved translations.


Change the Language in the Backend
==================================

.. rst-class:: bignums

1. Open the **User Settings** module

   This is accessed by clicking on your user name in the top bar.

2. Choose "Language" at the bottom

3. Hit the "Save" button in the docheader.

.. figure:: /Images/ManualScreenshots/BackendUsers/SettingsLanguage.png
   :alt: Changing the current user's interface language
   :class: with-shadow

The backend should update itself automatically
but you may want to reload the page in the browser.
Your backend should now be in you selected language.

If a translation is incomplete, the backend will fall
back to English.


Set a default language when creating a backend user
===================================================

A default language can also be set when creating a new backend
user.

.. include:: /Images/ManualScreenshots/BackendUsers/DefaultLanguage.rst.txt

.. caution::

   Changing a user's default language will not change the backend
   language if that user has already logged in at least once, as
   the language is kept in the user preferences. Such users will
   need to update their language themselves.
