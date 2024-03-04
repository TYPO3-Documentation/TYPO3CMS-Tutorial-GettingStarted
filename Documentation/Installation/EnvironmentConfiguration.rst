.. include:: /Includes.rst.txt

.. index:: Environment; Configuration; .env ; dotenv

.. _legacyinstallation:

========================
Configuring environments
========================

..  todo: Enhancements
    * .env / dotenv (with loaders, also helhum/dotenv-connector)
    * AdditionalConfiguration specifics
    * debug settings / presets
    * PasswordPolicies
    * Mail settings
    * EncryptionKey/InstallPassword
    * Error handling
    * Additional service keys (Redis, API, ...)
    * SiteConfiguration (via siteVariants, link to that chapter)
    * what to version (link to "versioning")
    * Rephrase "Production Settings" section


Production Settings
===================

To ensure a secure installation of TYPO3 on a production server, the following settings need to be set:

- :guilabel:`Admin Tools > Settings > Configuration Presets` The "Live" preset has to be chosen to make sure no debug output is displayed.
- `HTTPS` should be used on production servers and :php:`$GLOBALS['TYPO3_CONF_VARS']['BE']['lockSSL']` should be set to `true`.
- Enforce HSTS (Strict-Transport-Security header) in the web servers configuration.
- The `TYPO3_CONTEXT` environment variable should be set to a main context of `Production` (can be verified on the top right in the TYPO3 backend :guilabel:`Application Information`). It should be used to select the appropriate `base variant` for the target system in the Site Configuration.
- Configure the :ref:`TYPO3 logging framework <t3coreapi:logging-configuration>` to log messages of high severity including and above WARNING or ERROR
  and continue to rotate log files stored in :file:`var/log`.
- Verify the :ref:`file permissions <t3coreapi:security-file-directory-permissions>` are correct on the live system.
