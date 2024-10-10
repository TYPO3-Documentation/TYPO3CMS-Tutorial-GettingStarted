.. include:: /Includes.rst.txt
.. _webroot:

==================
Webroot and assets
==================

In TYPO3 files that are displayed in the web browser, must - for
security reasons - be placed in certain directories.

In a standard Composer-based installation, which this tutorial assumes you have, the webroot
of the server points to directory :directory:`public`. Read more about this folder:
:ref:`TYPO3 Explained, folder "public/" <t3coreapi:directory-public>`. Files
placed outside of this folder cannot be called directly by the web browser.

There are 3 types of files that must be accessed directly by the browser:

*   :ref:`Media and downloads <media>`: Images, videos and audio files used within the content and
    managed by editors. Downloads like PDF files, Excel sheets etc.
*   :ref:`Assets <assets>`: Including CSS, JavaScript, fonts, images and icons used for design purposes.
*   Technical files managed by Composer and TYPO3, including the `index.php` as
    Entry point, automatically generated assets and scaled versions of images.

.. _media:

Media and downloads
===================

Media and downloads **must** be stored in fileadmin. In standard
Composer-based installations, as we assume you have here, they are stored in
:path:`public/fileadmin/`.

Read more about this folder:
:ref:`TYPO3 Explained, folder "public/fileadmin/" <t3coreapi:directory-public-fileadmin>`.

Files in the fileadmin directory are managed by the
:ref:`File abstraction layer (FAL) <t3coreapi:fal_introduction>`.

They can be uploaded, moved and deleted in the backend module
:guilabel:`File > Filelist` by administrators and
depending on :ref:`permissions <permissions-management>`,
by editors.

..  warning::
    For security reasons, do not store any templates, scripts or assets in this
    directory. Store them in a :ref:`site package <t3sitepackage:start>`
    :ref:`assets`.

.. _assets:

Assets in extensions and site packages
=====================================

Assets usually include CSS files, JavaScript and images / icons used for design
purposes.

Within an extension, including a site package, they can only be placed in folder
:path:`Resources/Public` and subfolders of this folder.

During Composer installation the :path:`Resources/Public` directories of all
installed extensions are symlinked into the webroot, folder :path:`public/_assets`.
For security reasons the folders in :path:`public/_assets` have hashed names.

..  note::
    You **must never** reference any file in :path:`public/_assets` directly by
    using the hash in an absolute or relative URL. The hashes can change at any
    time. Only use TYPO3 library methods to reference the assets.

Read more about this folder:
:ref:`TYPO3 Explained, folder "public/_assets/" <t3coreapi:directory-public-assets>`.
