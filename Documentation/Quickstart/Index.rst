:navigation-title: Quickstart

..  include:: /Includes.rst.txt
..  _quickstart:

=====================================================
Quickstart: From zero to a basic website in TYPO3 v14
=====================================================

..  versionadded:: 14.1
    The default theme "Camino" was introduced with TYPO3 14.1.

    This tutorial does not work with earlier TYPO3 versions.

In this quickstart tutorial, we demonstrate how to install TYPO3 and set up a
basic website using the default theme "Camino".

..  contents::

..  _quickstart-installation:

Installing TYPO3 v14 (short version)
====================================

To follow these steps, you need either Docker and DDEV for local development
(`Installing and using DDEV <https://docs.typo3.org/permalink/t3start:ddev>`_)
or a Linux system with a web server (Apache or Nginx), a database,
`Composer <https://getcomposer.org/>`_, and at least PHP 8.2.

(See also the `system requirements <https://docs.typo3.org/permalink/t3start:system-requirements>`_.)

..  tabs::

    ..  group-tab:: DDEV

        ..  literalinclude:: /Quickstart/_installation_ddev.sh
            :language: bash

    ..  group-tab:: Linux

        ..  literalinclude:: /Quickstart/_installation_linux.sh
            :language: bash

The directory in which you run these commands must be empty.
Do not initialize Git or open the folder in an IDE before running the
commands, as the installation process expects no pre-existing files.

..  seealso::

    There are multiple strategies to install TYPO3 depending on your needs:

    *   `Step-by-step: TYPO3 Installation with DDEV <https://docs.typo3.org/permalink/t3start:installation-ddev-tutorial>`_
    *   `TYPO3 installation overview <https://docs.typo3.org/permalink/t3coreapi:installation-index>`_
    *   `Classic TYPO3 demo installation using Docker Compose <https://docs.typo3.org/permalink/t3coreapi:docker-compose-typo3>`_
        (Docker only, no DDEV or Composer required)


..  _quickstart-backend:

TYPO3 v14 backend overview
==========================

Open the TYPO3 backend (`Backend login <https://docs.typo3.org/permalink/t3start:backend-login>`_)
using the credentials you entered during installation.

Open the backend URL of your installation, for example
``https://my-site.ddev.site/typo3`` when using DDEV.

You should see something like the following:

..  figure:: /Images/ManualScreenshots/Quickstart/backend.png
    :zoom: gallery
    :alt: Screenshot of the backend of a fresh TYPO3 v14.1 installation, with the system information window open

    Check the system information: Version at least 14.1? Composer mode or Classic mode?

If you see an error message instead, see
`Troubleshooting <https://docs.typo3.org/permalink/t3start:troubleshooting-index>`_.


..  _quickstart-content:

Adding content to your website
==============================

If you selected the default site preset during installation,
a basic website should have been created.

..  figure:: /Images/ManualScreenshots/Quickstart/content_module.png
    :zoom: gallery
    :alt: Screenshot of the "Layout" module, containing the automatically created page
    :width: 500px

    Go to module :guilabel:`Content > Layout` and choose the "Home" page.
    View the webpage and edit some content.

If no root page was created during setup, you will need to
`create a page on root level <https://docs.typo3.org/permalink/t3start:create-root-page-new-page>`_
and
`configure it <https://docs.typo3.org/permalink/t3start:create-root-page-configure>`_.

You will also need to `edit the site configuration <https://docs.typo3.org/permalink/t3start:edit-site-configuration>`_
in order to add the "Theme:Camino" site set.

..  figure:: /Images/ManualScreenshots/Theme/NewSite.png
    :alt: Frontend screenshot of a website using the default theme "Camino" with text "Welcome to your default website"
    :zoom: lightbox
    :width: 500px

    After clicking :guilabel:`View webpage`, you should see the frontend of the website.

..  figure:: /Images/ManualScreenshots/Quickstart/content_module.png
    :zoom: gallery
    :alt: Screenshot of the content editor including a rich text editor with markup options
    :width: 500px

    Edit the content and save your changes.

The `TYPO3 Editors Guide <https://docs.typo3.org/permalink/t3editors:start>`_
provides detailed information on how to work with content.


..  _quickstart-pages:

Adding subpages
===============

In the page tree, you can add new pages via drag and drop:

..  figure:: /Images/ManualScreenshots/Quickstart/page_adding.png
    :zoom: gallery
    :alt: Screenshot of the page tree while a new standard page is added via drag and drop
    :width: 500px

    Drag a standard page into the page tree.

..  figure:: /Images/ManualScreenshots/Quickstart/page_enable.png
    :zoom: gallery
    :alt: Screenshot of the page tree showing a newly added page being enabled
    :width: 250px

    By default, newly added pages are hidden; therefore, you must enable them
    to make them visible.

In the default theme (Camino), a main menu is displayed automatically when you
add pages below the root page.

Some editors prefer pages to be visible immediately. You can configure this
behavior via page TSconfig:
`Example: Do not hide newly created pages by default <https://docs.typo3.org/permalink/t3tsref:pagetstcadefaults-example>`_.


..  _quickstart-configure-theme:

Configuring the default theme (Camino)
======================================

In the module :guilabel:`Sites > Setup`, you can edit the site configuration
and settings:

..  figure:: /Images/ManualScreenshots/Quickstart/site_setup.png
    :zoom: gallery
    :alt: Screenshot of the "Sites > Setup" module in overview
    :width: 250px

    Go to module :guilabel:`Sites > Setup` (1), and edit the site configuration (2) or settings (3).

..  seealso::

    *   `Site configuration <https://docs.typo3.org/permalink/t3start:edit-site-configuration>`_
    *   `Site settings <https://docs.typo3.org/permalink/t3start:settings-site-settings>`_
    *   `Customizing the Camino theme <https://docs.typo3.org/permalink/typo3-theme-camino:customizing-camino>`_

In the site settings, you can change settings provided by the theme and
installed extensions. You may need to `clear the caches <https://docs.typo3.org/permalink/t3start:how-to-clear-cache>`_
to apply changes.

..  figure:: /Images/ManualScreenshots/Quickstart/site_setup.png
    :zoom: gallery
    :alt: Screenshot of the site settings, changing the theme default settings
    :width: 250px

    Choose a different color theme and adjust other settings.

..  figure:: /Images/ManualScreenshots/Quickstart/site_setup.png
    :zoom: gallery
    :alt: Screenshot of the backend toolbar with button "Clear cache" and option "Flush frontend caches"
    :width: 250px

    Clear the frontend cache after saving the site settings.


..  _quickstart-customize-theme:

Customizing the default theme (Camino)
======================================

The files belonging to the default theme can be found in the folder
:folder:`vendor/typo3/theme-camino` in Composer mode, or in
:folder:`typo3/sysext/theme_camino` in Classic mode installations.

..  warning::

    Even if it technically works: Do not change files in the `vendor/typo3`
    directory. Changes will be lost with the next update.

If you want to modify the theme but continue using it, you can either copy it
and edit the copy, or create a custom site package that extends Camino.


..  _quickstart-customize-copy:

Edit a copy of the default theme
--------------------------------

If you copy the theme and modify the copy, future changes to the
original theme will not be applied to your customized version.

Copy the default theme:

..  tabs::

    ..  group-tab:: Composer mode

        ..  literalinclude:: /Quickstart/_copy_theme_composer.sh
            :language: bash

    ..  group-tab:: Classic mode

        ..  literalinclude:: /Quickstart/_copy_theme_classic.sh
            :language: bash

        ..  figure:: /Images/ManualScreenshots/Quickstart/site_setup.png
            :zoom: gallery
            :alt: Screenshot of module "System > Extensions"
            :width: 250px

            Deactivate and activate the theme so that the type is "Local".

You can now edit files in this new location, for example CSS files in
:folder:`packages/theme-camino/Resources/Public/Css`.


..  _quickstart-customize-extend:

Extend the default theme
------------------------

You can use the development extension :composer:`friendsoftypo3/kickstarter`
to create a custom theme that extends the default theme:

..  literalinclude:: /Quickstart/_extend_theme_composer.sh
    :language: bash

Edit the newly created :file:`packages/theme_pluto/composer.json` and update
the ``require`` section to add :composer:`typo3/theme-camino`:

..  code-block:: diff
    :caption: packages/theme_pluto/composer.json

     "require": {
         "typo3/cms-core": "^14",
    +    "typo3/theme-camino": "^14"
     },

Then require the new theme using its Composer name, for example:

..  code-block:: bash

    ddev composer req myvendor/theme-pluto:@dev

You can now create a file
:file:`packages/theme_pluto/Sets/theme_pluto/setup.typoscript`
to override the default theme’s TypoScript and add additional paths for templates
and custom CSS styles and/or JavaScript files:

..  literalinclude:: /Quickstart/_extended_theme.typoscript
    :caption: packages/theme_pluto/Sets/theme_pluto/setup.typoscript

Now add the new theme as a dependency in the site configuration:

..  figure:: /Images/ManualScreenshots/Quickstart/activate_local_theme.png
    :zoom: gallery
    :alt: Screenshot of site settings section "Sets for this Site" with the new theme selected
    :width: 250px

    Go to module :guilabel:`Sites > Setup` and edit the configuration of your site.
    Add the new theme to the sets for this site.

You can now copy any Fluid template, partial, or layout from the folder
:folder:`vendor/typo3/theme-camino/Resources/Templates` into
:folder:`packages/theme_pluto/Resources/Templates` and override it.

..  seealso::

    *   `TypoScript Explained <https://docs.typo3.org/permalink/t3tsref:start>`_
    *   `Fluid ViewHelper Reference <https://docs.typo3.org/permalink/t3viewhelper:start>`_
    *   If you want an individual theme not based on the default theme, see
        `TYPO3 site package tutorial <https://docs.typo3.org/permalink/t3sitepackage:start>`_
