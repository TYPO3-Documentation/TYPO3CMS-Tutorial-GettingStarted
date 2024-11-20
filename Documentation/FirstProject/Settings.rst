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

..  versionadded:: 12.0
    Starting with TYPO3 v12 site settings can be saved in a file called
    :file:`config/sites/my-site/settings.yaml`.

Settings that only affect one site can be made in file
:file:`config/sites/my-site/settings.yaml`. If that is necessary we will refer
to this file in the documentation and authors of third party extensions might
also refer you to it. Find detailed information in
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

Read more about this in :ref:`Setting page TSconfig <t3tsref:setting-page-tsconfig>`.

..  todo: Add screenshots, mention the module etc?
