.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


**Changing backend language**
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Usually an editor would like to use TYPO3 in his own language. So you
need to change the language of TYPO3 for him. As an first step, you
have to just download the language packages you need. To do so, just
start the Extension Manager and select "Translation handling".

|img-213| Now select which language packages you want to download.
Select all language packages you want to provide to your users.

|img-214| Save your selection by hitting "Save selection". You can
alter your selection at any time, so just select the languages you
need now.

|img-215| After saving your selection, you can either compare the
actual status against the repository or just update and download the
language packages from the repository. Just hit update. You will see
an progress-bar where you can see for which Extension the language
packages has been downloaded. Usually you should get a green bar and
an green "UPD" marker for you language for each extension key. It can
happen, that some extensions are not yet translated in your language,
then you will get an "N/A".

It may happen that not all packages get downloaded. Just hit the
update button again - it should then retrieve the missing parts.

|img-216|

Up to now, you just downloaded the language packages. Now you need to
alter your "User settings" and select your language. Switch to the
"User settings" Module and select the language you want to use for
your account.

|img-217| Save your new configuration. You will then get an message
that your settings were updates. If you have a look at the main
modules, you see that the modules are now shown in the language, you
selected. If you hit again "User settings" even that page will be
translated.

|img-218| So, you just changed your own backend language. All editors
needs to do it for themselves.

If you create new editors you can give them a helping hand by
selection an "default language" while creating new Backend user
records. This language will be used when the log into TYPO3 the first
time.

|img-219| Keep in mind, that the "Default Language" really is nothing
else, than an default setting. If they have logged in already, they
have to switch their language for themselves in the "User settings"
Module.

