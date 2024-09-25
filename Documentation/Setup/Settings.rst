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

Global settings can be made in the modules in section :guilabel:`Admin Tools`,
which changes file :file:`config/system/settings.php` or be overridden manually
in file :file:`config/system/additional.php`. Avoid making manual changes to
the first file as it is auto-managed.

..  todo: Also explain Configuration Presets and Feature Toggles here?

..  _settings_global-extension:

Global extension settings
-------------------------

Global settings to installed extensions, including some that are part of a
default installation can be made in submodule
:guilabel:`Admin Tools > Settings > Extension Configuration`.

..  figure:: /Images/ManualScreenshots/AdminTools/ExtensionConfiguration.png
    :alt: Screenshot demonstration the location of the Extension Configuration in module "Settings"

    You can find the global Extension Configuration in module Settings

After opening the submodule you can make your changes and hit save:


..  figure:: /Images/ManualScreenshots/AdminTools/ExtensionConfigurationDetail.png
    :alt: Screenshot of the Extension Configuration submodule

    Make changes and hit "Save".

..  note::
    File :file:`config/system/settings.php` has to be writable. If you keep it
    under version control make sure to commit and push your changes.

..  _settings_site:

Site handling
=============

One TYPO3 installation may contain more then one site. Even if you have only one
site in your installation important settings can be made here.

Important settings can be made in the site configuration. Read more about
them in chapter :ref:`siteconfiguration`.

Site configurations are stored in a file called
:file:`config/sites/my-site/config.yaml` and can be edited from module
:guilabel:`Site Management > Sites`. Each site must have a unique key, called
the "Site Identifier". For demonstration purposes we use "my-site" here. The
Site Identifier is also used in the path to save the configuration.

..  figure:: /Images/ManualScreenshots/SiteManagement/SiteIdentifier.png
    :alt: Screenshot demonstration field "Site Identifier" in a site configuration

    The Site Identifier can be changed in this field

Find detailed information in :ref:`TYPO3 Explained, Site handling <t3coreapi:sitehandling>`.

..  _settings_site_settings:

Site settings
-------------

..  versionadded:: 13.3
    Starting with TYPO3 v13.3 site settings can also be edited in the site
    settings editor.

You can edit site settings in the module :guilabel:`Site Management > Settings`.
Changes are written to file :file:`config/sites/my-site/settings.yaml`. If you
keep this file under version control you must commit and push the changes made
to this file.

..  figure:: /Images/ManualScreenshots/SiteManagement/SiteSettingsOverview.png
    :alt: Screenshot of the Site Settings Overview

    You can find all sites in the settings module. If editable settings are available there is a button "Edit Settings"

You can find more information about this editor in
:ref:`TYPO3 Explained, Site settings editor <t3coreapi:site-settings-editor>`.

If site settings are available refer to the documentation of the extension
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
    Used to display a search box and offer basic indexing of a page without need
    for a Solr core as would be required by :composer:`apache-solr-for-typo3/solr`.
*   :composer:`typo3/cms-seo`:
    :ref:`Site sets settings of EXT:seo <typo3/cms-seo:configuration-site-set-settings>`.
    Used to improve meta tags, page titles and a provides a XML sitemap.

You can define custom site settings in your site package:
:ref:`TYPO3 Sitepackage Tutorial <t3sitepackage:start>`.

..  todo: link to the site settings page once it is written.

Find detailed information on the topic also in
:ref:`TYPO3 Explained, Site settings <t3coreapi:sitehandling-settings>`.

..  _settings_typoscript:

Page wide frontend definitions: TypoScript
==========================================

..  versionchanged:: 12.0
    This module was renamed. With TYPO3 v12 it was moved from
    :guilabel:`Web > Template` to :guilabel:`Site Management > TypoScript`.

TypoScript is a scripting language that can and will most likely be used to
influence the output of your pages. TypoScript can be managed in a TypoScript
record that you find in module :guilabel:`Site Management > TypoScript`.

..  figure:: /Images/ManualScreenshots/SiteManagement/TypoScriptModule.png
    :ref: Screenshot demonstrating the TypoScript overview module

    Edit the TypoScript record by clicking on the name of the record in the overview module

TypoScript affects the page it is defined on and all subpages. In most cases
TypoScript is only defined on the root page of a site. In that case the
settings made here affect the whole page.

You can also navigate between the different submodules by using the submodule menu:

..  figure:: /Images/ManualScreenshots/SiteManagement/TypoScriptModuleMenu.png
    :ref: Screenshot demonstrating the TypoScript module and its location of the submodule menu

    Switch between the different submodules of the TypoScript module.

See also the complete :ref:`TypoScript Reference <t3tsref:start>`.

..  todo: Describe TypoScript in more detail?

..  _settings_page_tsconfig:

Page wide backend settings: Page TSconfig
=========================================

Read more about this in :ref:`Setting page TSconfig <t3tsconfig:setting-page-tsconfig>`.

..  todo: Add screenshots, mention the module etc?
