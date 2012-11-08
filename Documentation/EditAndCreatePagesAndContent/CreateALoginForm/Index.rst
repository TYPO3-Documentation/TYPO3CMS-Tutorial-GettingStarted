.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


Create a login form
^^^^^^^^^^^^^^^^^^^

The Introduction Package already comes with a fully configured login
form. But what if you want to create another one, for example on the
homepage? No problem. In general the login form is just a content
element like text or text with image. Go (in the backend) to the page
"Welcome to TYPO3", make sure that the page module is selected and
click on the little content element icon with the green plus in the
header of the "Related information" content element. This will create
a new content element after this one.

|img-98|

Activate the tab "Form elements" and select "Login Form":

|img-99|

You will get the form for configuration of the login. Give the login a
header and then go to the "Plugin" tab. The most important thing here
is to set the “User Storage Page”. This is the folder where the login
looks for users. Click on the little folder icon next to the “User
Storage Page” field:

|img-100| In the appearing popup select your "Frontend users and groups" page:

|img-101| This is all you have to do. Now take a look at your website and you
will see your shiny new login box on your home page:

|img-102|

