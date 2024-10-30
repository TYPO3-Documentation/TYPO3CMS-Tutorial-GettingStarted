:navigation-title: Project Structure
..  include:: /Includes.rst.txt

..  _project-structure:

=================
Project Structure
=================

The following introduction refers to a composer-based installation.

Project Structure
=================

..  directory-tree::
    :level: 2
    :show-file-icons: true


    *   config

        *   sites
        *   system

    *   packages

    *   public/

        *   _assets/
        *   fileadmin/
        *   typo3/
        *   typo3temp/

            *   assets/

    *   var/

        *   cache/
        *   labels/
        *   log

    *   vendor
    *   composer.json
    *   composer.lock

.. _files-and-directories:

Files and directories on project level
======================================

The :file:`composer.json` contains the requirements for the TYPO3 installation and
the :file:`composer.lock` contains information about the concrete installed versions
of each package.

.. _directory-config:

:file:`config/`
~~~~~~~~~~~~~~
This directory contains installation-wide configuration.

.. _directory-config-sites:

:file:`config/sites/`
~~~~~~~~~~~~~~~~~~~~~

The folder :file:`config/sites/` contains subfolders for each site.

The following files are processed:

*   :file:`config.yaml` for the
*   :file:`settings.yaml` for the

.. _directory-config-system:

:file:`config/system/`
~~~~~~~~~~~~~~~~~~~~~~

The folder :file:`config/system/` contains the installation-wide

*   :file:`settings.php`:  written
    by the :guilabel:`Admin Tools > Settings` backend module
*   :file:`additional.php`:
    which can override settings from :file:`settings.php` file

These files define a set of global settings stored in a global array called
.

This path can be retrieved from the Environment API, see
.

.. _directory-packages:

:file:`packages/`
-----------------

Each web site which is run on TYPO3 **should**
have a sitepackage, an extension with a special purpose containing all
templates, styles, images, etc. needed for the theme.

It is usually stored locally and then symlinked into the :ref:`directory-vendor`
folder. Many projects also need custom extensions that can be stored here.

The folder for local packages has to be defined in the project's :file:`composer.json`
to be used:

..  code-block:: json
    :caption: composer.json

    {
        "name": "myvendor/my-project",
        "repositories": {
            "packages": {
                "type": "path",
                "url": "packages/*"
            }
        },
        "...": "..."
    }

.. _directory-public:

:file:`public/`
---------------

This folder contains all files that are publicly available. Your webserver's
web root **must** point here.

This folder contains the main entry script :file:`index.php` created by Composer
and might contain publicly available files like a :file:`robots.txt` and
files needed for the server configuration like a :file:`.htaccess`.

If required, this directory can be renamed by setting `extra > typo3/cms > web-dir`
in the composer.json, for example to :file:`web`:

..  code-block:: json
    :caption: composer.json

    {
        "extra": {
            "typo3/cms": {
                "web-dir": "web"
            }
        },
        "...": "..."
    }

This directory contains the following subdirectories:

.. _directory-public-fileadmin:

:file:`public/fileadmin/`
~~~~~~~~~~~~~~~~~~~~~~~~~

This is a directory in which editors store files. Typically images,
PDFs or video files appear in this directory and/or its subdirectories.

Note this is only the default editor's file storage. This directory
is handled via the FAL API internally, there may be
further storage locations configured outside of :file:`fileadmin/`, even
pointing to different servers or using 3rd party digital asset management
systems.

Depending on the configuration in
$GLOBALS['TYPO3_CONF_VARS']['BE']['fileadminDir'] <typo3ConfVars_be_fileadminDir>`
another folder name than :file:`fileadmin/` can be in use.

..  note::
    This directory is meant for editors! Integrators should
    *not* locate frontend website layout related files in here: Storing
    HTML templates, logos, CSS and similar files used to build the website
    layout in here is considered bad practice. Integrators should locate
    and ship these files within a project specific extension.


.. _directory-public-typo3:

:file:`public/typo3/`
~~~~~~~~~~~~~~~~~~~~~

This directory contains the two PHP files for accessing the TYPO3
backend (:file:`typo3/index.php`) and install tool (:file:`typo3/install.php`).

.. _directory-var:

:file:`var/`
------------

Directory for temporary files that contains private files (e.g.
cache and logs files) and should not be publicly available.

..  attention::

    Although it is a most common understanding in the TYPO3 world that
    :file:`var/` can be removed at any time, it is considered
    bad practice to remove the whole folder. Developers should selectively
    remove folders relevant to the changes made.

.. _directory-var-cache:

:file:`var/cache/`
~~~~~~~~~~~~~~~~~~

This directory contains internal files needed for the cache.

.. _directory-var-log:

:file:`var/log/`
~~~~~~~~~~~~~~~~

This directory contains log files like the
TYPO3 log, the deprecations log and logs generated by extensions.

.. _directory-vendor:

:file:`vendor/`
---------------

In this directory, which lies outside of
the webroot, all extensions (system, third-party and custom) are installed
as Composer packages.

The directory contains folders for each required vendor and inside each
vendor directory there is a folder with the different project names.

For example the system extension `core` has the complete package name
`typo3/cms-core` and will therefore be installed into the directory
:file:`vendor/typo3/cms-core`. The extension `news`, package name
`georgringer/news` will be installed into the folder
:file:`vendor/georgringer/news`.

Never put or symlink your extensions manually into this directory as it is
managed by Composer and any manual changes are getting lost,
for example on deployment. Local extensions and sitepackages
should be kept in a separate folder outside the web root, for example
:ref:`packages <directory-packages>`.
Upon installation , Composer creates a symlink from packages to
:file:`vendor/myvendor/my-extension`.





