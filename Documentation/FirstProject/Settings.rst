..  include:: /Includes.rst.txt

..  _settings:

========
Settings
========

There are different possibilities to make settings to your installation or
parts of it.

..  contents::

..  _settings_global:

Global settings
===============

Global settings can be made in the modules under the :guilabel:`Admin Tools` section,
which updates the :file:`config/system/settings.php` file. Alternatively, settings can
be overridden manually in the :file:`config/system/additional.php` file. Avoid making
manual changes to the first file mentioned, as it is auto-managed.

..  todo: Also explain Configuration Presets and Feature Toggles here?

..  _settings_global-extension:

Global extension settings
-------------------------

Global settings for installed extensions, including some that are part of a
default installation, can be made in the
:guilabel:`Admin Tools > Settings > Extension Configuration` submodule.

..  figure:: /Images/ManualScreenshots/AdminTools/ExtensionConfiguration.png
    :zoom: gallery
    :alt: Screenshot demonstration the location of the Extension Configuration in module "Settings"

    You can find the global Extension Configuration in module Settings

After opening the submodule, you can make your changes and hit "Save":


..  figure:: /Images/ManualScreenshots/AdminTools/ExtensionConfigurationDetail.png
    :zoom: gallery
    :alt: Screenshot of the Extension Configuration submodule

    Make changes and hit "Save".

..  note::
    The :file:`config/system/settings.php` file has to be writable. If you keep
    it under version control, make sure to commit and push your changes.

..  _settings_site:

Site handling
=============

One TYPO3 installation can contain more then one site. Even if you only have one
site in your installation, important settings can be made in the Site Configuration.
Read more about this in the chapter: :ref:`siteconfiguration`.

Site configurations are stored in a file called
:file:`config/sites/my-site/config.yaml` and can be edited from the
:guilabel:`Site Management > Sites` module. Each site must have a unique key, called
the "Site Identifier". For demonstration purposes, we use "my-site" here. The
Site Identifier is also used as the path for saving the configuration file.

..  figure:: /Images/ManualScreenshots/SiteManagement/SiteIdentifier.png
    :zoom: gallery
    :alt: Screenshot demonstration field "Site Identifier" in a site configuration

    The Site Identifier can be changed in this field

Find detailed information in :ref:`TYPO3 Explained, Site handling <t3coreapi:sitehandling>`.

..  _settings_site_settings:

Site settings
-------------

..  versionadded:: 13.3
    Starting with TYPO3 v13.3, site settings can also be edited in the site
    settings editor.

You can edit site settings in the :guilabel:`Site Management > Settings` module.
Changes are written to the :file:`config/sites/my-site/settings.yaml` file. If you
keep this file under version control, you must commit and push the changes made
to this file.

..  figure:: /Images/ManualScreenshots/SiteManagement/SiteSettingsOverview.png
    :zoom: gallery
    :alt: Screenshot of the Site Settings Overview

    You can find all sites in the "Settings" module. If editable settings are available, there is a button "Edit Settings"

You can find more information about this editor in
:ref:`TYPO3 Explained, Site settings editor <t3coreapi:site-settings-editor>`.

If site settings are available, refer to the documentation of the extension
offering them.

The following optional Core extensions offer site settings:

*   :composer:`typo3/cms-fluid-styled-content`:
    :ref:`Site set "Fluid Styled Content" <typo3/cms-fluid-styled-content:site-set-fluid-styled-content>`.
    Commonly used in projects that do not depend on :composer:`bk2k/bootstrap-package`.
*   :composer:`typo3/cms-felogin`:
    :ref:`Settings for the "Frontend Login" site set <typo3/cms-felogin:configuration-site-set-settings>`.
    Used to offer a login for frontend users.
*   :composer:`typo3/cms-indexed-search`:
    :ref:`Settings of the site set "Indexed Search" <typo3/cms-indexed-search:site-set-settings>`.
    Used to display a search box and offer basic indexing of a page without the need
    for a Solr core, as would be required by :composer:`apache-solr-for-typo3/solr`.
*   :composer:`typo3/cms-seo`:
    :ref:`Site sets settings of EXT:seo <typo3/cms-seo:configuration-site-set-settings>`.
    Used to improve meta tags and page titles, and provides an XML sitemap.

You can define custom site settings in your site package:
:ref:`TYPO3 Sitepackage Tutorial <t3sitepackage:start>`.

..  todo: link to the site settings page in the sitepackage tutorial once it is written.

For detailed information on this topic, see also
:ref:`TYPO3 Explained, Site settings <t3coreapi:sitehandling-settings>`.

..  _settings_typoscript:

Page wide frontend definitions: TypoScript
==========================================

..  versionchanged:: 12.0
    This module was renamed. With TYPO3 v12 it was moved from
    :guilabel:`Web > Template` to :guilabel:`Site Management > TypoScript`.

TypoScript is a configuration language used to configure both the frontend
output and the backend of a TYPO3 web site. TypoScript can be managed in a TypoScript
record, which can be found in the :guilabel:`Site Management > TypoScript` module.

..  figure:: /Images/ManualScreenshots/SiteManagement/TypoScriptModule.png
    :ref: Screenshot demonstrating the TypoScript overview module

    Edit the TypoScript record by clicking on the name of the record in the overview module

TypoScript affects the page on which it is defined, and any subpages. In most cases,
TypoScript is only defined on the root page of a site. In this case. the
settings made here affect the entire page.

You can also navigate between the different submodules by using the submodule menu:

..  figure:: /Images/ManualScreenshots/SiteManagement/TypoScriptModuleMenu.png
    :ref: Screenshot demonstrating the TypoScript module and its location of the submodule menu

    Switch between the different submodules of the TypoScript module.

See also the complete :ref:`TypoScript Reference <t3tsref:start>`.

..  todo: Describe TypoScript in more detail?

..  _settings_page_tsconfig:

Page wide backend settings: Page TSconfig
=========================================

Read more about this topic in :ref:`Setting page TSconfig <t3tsref:setting-page-tsconfig>`.

..  todo: Add screenshots, mention the module etc?
