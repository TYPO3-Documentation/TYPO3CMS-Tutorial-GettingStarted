.. include:: /Includes.rst.txt
.. _file-module:

===================
The Filelist module
===================

The :guilabel:`File > Filelist` module is where you can manage
all the :ref:`media and downloads <media>` associated with your TYPO3 web site.

The Editors Guide describes how to
:ref:`manage media in the TYPO3 backend <t3editors:managing-files-in-typo>`.

Do not store :ref:`assets <assets>` needed for your theme here. Store these in
the folder :path:`Resources/Public` of your :ref:`site package <creating-a-site-package>`
or another :ref:`extension <create-own-extension>`.
leuchtfeuer/secure-downloads

.. _file-module-fileadmin:

Fileadmin - the default file storage
====================================

By default all media managed via the Filelist module is stored in the folder
:path:`public/fileadmin`.

This folder is publicly accessible and it is possible for attackers to access
any file herein when they have or guess the correct path.

Third party extensions like :composer:`leuchtfeuer/secure-downloads` can help
you if downloads should only be available to logged-in frontend users.

.. _file-module-storages:

File storages
=============

It is possible to configure additional file storages, including private and
read only ones. This topic is beyond the scope of this guide. It is explained in
TYPO3 Explained, chapter :ref:`File storages <t3coreapi:fal-administration-storages>`.

.. _file-module-fal:

File abstraction layer (FAL)
============================

All media and download files managed in the Filelist module are managed via
an abstraction layer. You can find the documentation of this layer in TYPO3
Explained, chapter :ref:`File abstraction layer (FAL) <t3coreapi:fal_introduction>`.

On uploading, each file get a unique identifier assigned to
it. This identifier is used to link to files and also to attach meta data to
them.

This allows your editors to rename and move files without breaking the frontend.
It also allows to test weather a file is still being used on deletion and to
automatically delete unused media if desired.

However you can only use the full power of the FAL if you do not link directly
to files but only use the API to access them:

In Fluid link files using the
:ref:`Image ViewHelper <f:image> <t3viewhelper:typo3-fluid-image>` with property
:typo3:viewhelper-argument:`image <t3viewhelper:typo3-cms-fluid-viewhelpers-imageviewhelper-image>`
for images and the :ref:`Link.file ViewHelper <f:link.file> <t3viewhelper:typo3-fluid-link-file>`
for download links.

In TypoScript the :ref:`typolink function with the file property <t3tsref:typolink-handler-file>`
can be used to link downloads.

For usage in PHP there is an API: :ref:`Working with files, folders and file
references <t3coreapi:fal-using-fal-examples-file-folder>`

..  note::
    Never link to a file in the fileadmin from CSS or or JavaScript. Such files
    like logos, icons, background images etc. should be stored as
    :ref:`Assets in extensions and site packages <assets>`.

.. _file-module-meta-data:

File meta data
==============

A number of meta data fields for media uploaded in the Filelist module is
available out-of-the-box. Additional meta data fields are available if the
system extension :composer:`typo3/cms-filemetadata` is installed.

For accessibility reasons images should always have an alt text defined.
Editors can input an alt text either in the file metadata in the Filelist module
or override it in the file relation when they use an image in a content element.

By using the :ref:`Image ViewHelper <f:image> <t3viewhelper:typo3-fluid-image>`
the alt text is automatically output unless you override it with property 'alt'.
