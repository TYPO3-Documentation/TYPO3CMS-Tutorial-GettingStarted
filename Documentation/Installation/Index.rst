.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../Includes.txt


.. _installation:

Installation
------------

.. _prerequisite:

Prerequisite
^^^^^^^^^^^^

You should have a fully configured and ready web server meeting the
requirements you find at `http://typo3.org/about/typo3-the-cms/system-requirements/
<http://typo3.org/about/typo3-the-cms/system-requirements/>`_.

If you do not have a web server and you are running a Windows
operation system, you might want to try the
`TYPO3Winstaller <http://typo3winstaller.sourceforge.net/>`_,
which will install a web
server and the Introduction Package on your local computer.

Make sure to have your database creditials ready.

.. _getting-the-introduction-package:

Getting the Introduction Package
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

First you will need to download and install the introduction package
which is used to explain TYPO3 in this tutorial. Get the package at
`http://typo3.org/download/ <http://typo3.org/download/>`__ .
To install your first
website follow the steps provided in the quick install part in the
:ref:`Installation and Upgrade Guide <t3install:installing-typo3-quick-install>`
- if you want to use
TYPO3 professionally you should read the full guide sometime.


.. _for-those-who-can-t-wait-try-this-very-short-installation-guide:

For those who can't wait, try this very short installation guide:
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

- Unzip / untar your downloaded introduction package in the root folder
  of your web server

- Make sure that the web server user has write permissions to the
  folders :file:`fileadmin/,typo3conf/,typo3temp/` and :file:`uploads/`

- Go to `http://your-site.example.org/ <http://your-site.example.org/>`_ with a browser, you should get
  redirected to the TYPO3 installer

- If this does not happen, create a file called :file:`ENABLE\_INSTALL\_TOOL` in
  the folder :file:`typo3conf/`

- Follow the installer steps

