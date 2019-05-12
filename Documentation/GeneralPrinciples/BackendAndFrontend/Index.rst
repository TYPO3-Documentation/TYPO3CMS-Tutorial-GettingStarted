.. include:: ../../Includes.txt


.. _backend-and-frontend:

====================
Backend and Frontend
====================

TYPO3 CMS is divided into two areas - the *backend* and the *frontend*.

Frontend
========

The *frontend* is the website that is produced by TYPO3 CMS.

To display the *frontend*, enter the URL of your web site
in the address bar of your browser (e.g.
`http://www.your-site.example.org/`).


.. _backend-login:

Backend
=======

The administrative area of the web site is called the *backend*.
It is from here you create and manage the content that is viewed
in the *frontend*.

A user name and a password are always required to log into the backend.

.. rst-class:: bignums


1. Enter URL with `/typo3` in your browser

   The *backend* is accessed by adding `/typo3/` to your web site's
   URL (e.g `http://www.your-site.example.org/typo3/`).

   A login page looking like this will be displayed:

   .. figure:: ../../Images/BackendLoginPage.png
      :alt: Login page for the TYPO3 CMS backend
      :class: with-shadow

2. Login

   Use the user name (default is **admin**) and the password that you defined during
   the installation process.

   After pressing the **login** button you will be redirected to the TYPO3 CMS
   backend overview:

   .. figure:: ../../Images/BackendAboutModules.png
      :alt: TYPO3 CMS backend Overview with the About Modules screen
      :class: with-shadow

The current view is a list of all installed modules and their usage.
It can be reached using the help menu in the top bar
and selecting :guilabel:`About TYPO3 CMS`.

.. figure:: ../../Images/BackendHelpMenu.png
   :alt: Accessing the Help menu from the top bar
   :class: with-shadow
