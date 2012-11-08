.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


Getting the Introduction Package
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

First you will need to download and install the introduction package
which is used to explain TYPO3 in this tutorial. Get the package at
`http://typo3.org/download/ <http://typo3.org/download/packages/>`__ .
To install your first
website follow the steps provided in the quick install part in the
`Installation and Upgrade Guide <http://typo3.org/documentation/document-library/guides/doc_guide_install/current/>`_
- if you want to use
TYPO3 professionally you should read the full guide sometime. You can
find a step-by-step guide below the "short installation guide".


For those who can't wait, try this very short installation guide:
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

- Unzip / untar your downloaded introduction package in the root folder
  of your web server

- Make sure that the web server user has write permissions to the
  foldersfileadmin/,typo3conf/,typo3temp/anduploads/

- Go tohttp://your-site.example.org/typo3/with a browser, you should get
  redirected to the TYPO3 installer

- If this does not happen, create a file calledENABLE\_INSTALL\_TOOLin
  the foldertypo3conf

- Follow the installer steps


Step-by-step - Installing the Introduction Package
""""""""""""""""""""""""""""""""""""""""""""""""""

This guide will provide you with the steps for downloading,
extracting, uploading and installing the Introduction Package. It
assumes you are using a Windows operation system.


Download
~~~~~~~~

#. Go to " `http://typo3.org/download/ <http://typo3.org/download/>`_ ".

#. Click on the button labeled"Download TYPO3 version 4.5 LTS\| with the
   new Introduction Package"

#. This will lead you to Sourceforge and the download should start
   shortly. If it does not, follow the instructions on the website.


**Extract**
~~~~~~~~~~~

#. Openthe .zip File.

#. Extractthe contents into an empty folder of your choice. Make sure to
   remember this folder.

#. Clickon "Files" >> "Extract All"

#. Selectan empty folder or create a new one.

#. Clickthe extract/go/next button.


Upload
~~~~~~

You can upload the content of your folder with an FTP-client of you
choice. The following step-by-step instruction assumes you are using
the free, platform-independent FTP-client `FileZilla <http://filezilla-project.org/>`_ .

#. Open FileZilla

#. Connect to your website

#. Enter your FTP-server address.This is often something like ftp.your-
   site.example.org.

#. Enteryour username and your password.

#. Enterthe port. If your server supports sFTP you should enter 22. If
   you do not know your port, enter 21 or leave it empty.

#. Press "Connect"

#. If anything fails, you can see some red lines in the log window
   directly under the connect bar. Get in touch with your hoster if you
   are unable to establish a connection.

#. If everything goes well, you should see some folders or files in right
   part of the window.

#. Navigateto your folder on server (right site)

#. Often the actual website is in a folder called website, docroot,
   htdocs or html. Openthe folder.

#. If your website has any content already, you can see that content now.
   Usually there exists a file called index.html or index.php.

#. Navigateto your folder on your local computer (left site). This is the
   folder where you extracted your .zip file into.

#. Openthe folder.

#. You should see a file called index.php, and the folders fileadmin,
   t3lib, typo3, typo3conf, typo3temp and uploads.

#. Selectall files

#. Openthe context menu (right click)

#. Click on "Upload"- your files will be added to the queue at the bottom
   and the upload will start immediately.

The upload is finished, when you can not see any more files in the
queue.


Install
~~~~~~~

Before you precede, you will need to adjust the rights of your
uploaded files and folders.

#. Selectall uploaded files and open the context menu (right click).

#. Clickchmod

#. For all folders enter755

#. For files enter644

#. Make sure to checkinclude subfolders

#. Openyour web browser

#. Typeyour web server's address in the address bar, e.g. http://www
   .your-site.example.org/

#. You should be redirected tohttp://www.your-site.example.org/typo3/ and
   the installer should show up with a welcome message.

#. If you see a large yellow box, telling you that the install tool is
   locked, do the following

#. Open your local folder again.

#. Createa new file called ENABLE\_INSTALL\_TOOL, the type does not
   mater.

#. Uploadthis file to your web server inside the folder typo3conf/

#. Renamefile, remove any kind of file extension (.doc, .txt, ...). The
   name on the server should be "ENABLE\_INSTALL\_TOOL"without anything
   else.

#. Reloadyour website inside your web browser (Press F5).

#. Click continue

#. Enteryour database details

#. Enteryour DB username.

#. Enteryour DB password.

#. Enteryour DB server address. Usually this is localhost. If your do not
   know, enter localhost.

#. Click continue.

#. Chooseyour database. You can create a new one if your have the rights
   to do so. Use an empty database - any table used by TYPO3 **will be
   overridden!**

#. Click continue.

#. Click continueonce again. The installation will take a while, be
   patient. If it takes longer than five minutes, reloadthe page (press
   F5).

#. Entera password. Rememberthe password, your will need it for
   administer your website later. **Do not choose a trivial password.**

#. Chooseyour color.

#. Click continuefor the last time.

#. Click "Go to your website" :)

Done! Your website is ready now. Feel free to read the section "About
TYPO3".

