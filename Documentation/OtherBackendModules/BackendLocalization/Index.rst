.. include:: ../../Includes.txt


.. _changing-backend-language:

Changing backend language
^^^^^^^^^^^^^^^^^^^^^^^^^

The TYPO3 CMS backend is available in many languages. These
translations are bundled into packages which need to be fetched
from the community translation server (https://translation.typo3.org/).
Once installed backend users can choose which language to use.

Loading translation packages happens in the **ADMIN TOOLS > Languages**
module.

.. figure:: ../../Images/BackendLanguageModule.png
   :alt: The backend language administration module


Click on the "+" icon to activate a new language. A download button
appears to the right. Click on it to get the translations. In the docheader
is a download icon which will fetch packages for all activated languages.
It is recommended to update regularly to benefit from completed or
improved translations.

To change the language of the backend, move to the **User Settings**
module, which is accessed by clicking on your user name in the top bar.

.. figure:: ../../Images/BackendSettingsLanguage.png
   :alt: Changing the current user's interface language


Choose "Language" at the bottom, then hit the "Save" button
in the docheader. The backend should update itself automatically
but you may want to reload the page in the browser.
Your backend should now be in Basque.

.. figure:: ../../Images/BackendTranslated.png
   :alt: The backend translated to Basque


As you can see, if a translation is incomplete, the backend
will fall back to English.

A default language can also be set when creating a new backend
user.

.. figure:: ../../Images/BackendBackendDefaultLanguage.png
   :alt: Setting the default language for a new backend user


.. caution::

   Changing a user's default language will not change the backend
   language if that user has already logged in at least once, as
   the language is kept in the user preferences. Such users will
   need to update their language themselves.
