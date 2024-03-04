.. include:: /Includes.rst.txt

.. index:: Environment; Configuration; .env ; dotenv

.. _environment-configuration:

========================
Configuring environments
========================

A TYPO3 instance is often used in different contexts that can adapt to your
custom needs:

*   Local development
*   Staging environment
*   Production environment
*   Feature preview environments
*   ...

These can be managed via the same installation by applying different values
for configuration options.

The configuration options can be managed either by an :file:`.env` file or just
simple :file:`.php` files. Each environment would load the specific
:file:`.env/.php` file, which is usually bound to an
:ref:`Application context <t3coreapi:application-context>` (`Development`,
`Production`).

For example, using a :file:`.env` file in your project root, you can define several
variables:

..  literalinclude:: Environments/_example.env
    :language: bash
    :caption: <project-root>/.env

The next step is to retrieve these values in the TYPO3 application bootstrap
process. The best place for this is inside :file:`system/additional.php` (see
:ref:`t3coreapi:configuration-files`). The PHP code for this could look like:

..  literalinclude:: Environments/_additional.php
    :language: php
    :caption: <config>/system/additional.php

Each environment would have its own :file:`.env` file, which is only stored on
the corresponding target system. The development environment file could
be saved as :file:`.env.example` or delivered as the default :file:`.env`
in your project.

..  todo: Should we have a distinct "Versioning" chapter?

It is not recommended to store these :file:`.env` files in your version control
system (e.g. Git). The main reason is that these files usually hold credentials
or other sensitive information.

You should only store environment-specific configuration values in such a
configuration file. Do not use this to manage all the TYPO3 configuration options.
Examples of well-suited configuration options:

* :ref:`t3coreapi:password-policies`
* :ref:`t3coreapi:error-handling-configuration`
* :ref:`t3coreapi:typo3ConfVars_mail`
* :ref:`t3coreapi:typo3ConfVars_sys_encryptionKey`
* :ref:`t3coreapi:security-install-tool`
* Settings, Tokens and URLs to additional services (Redis, Solr, ...)

..  note::
    Note that the URL of your environment must be configured through
    :ref:`site configuration <t3coreapi:sitehandling>` variables, and
    those can actually refer to environment variables as outlined in
    :ref:`t3coreapi:sitehandling-using-env-vars`.

The following sections describe this implementation process in depth.

.. _environment-dotenv:

.env / dotenv files
===================

A central advantage of :file:`.env` files is that environment variables can
also be set in CLI context or injected via Continuous Integration/Deployment
(CI/CD) systems (GitLab/GitHub) or even Webserver configuration. It is also
helpful to have a central place for environment-specific configuration.

To let your TYPO3 configuration parse keys and values stored of such a file,
you need a library like https://github.com/symfony/dotenv/ or
https://github.com/vlucas/phpdotenv/ and parse it in your :file:`system/additional.php`

You can require these libraries through Packagist/Composer or by including the dependency
in your project manually (legacy installation).

Example for `symfony/dotenv`:

..  literalinclude:: Environments/_dotenv-symfony.php
    :language: php
    :caption: <config>/system/additional.php

Example for `vlucas/phpdotenv`:

..  literalinclude:: Environments/_dotenv-vlucas.php
    :language: php
    :caption: <config>/system/additional.php

Once this code has loaded the :php:`$_ENV` variables from the specified file,
you can access contents of the variables anywhere you need.

.. _environment-helhum-dotenv:

helhum/dotenv-connect
---------------------

You can also use https://github.com/helhum/dotenv-connector/ (via the Packagist
package `helhum/dotenv-connector`) to allow accessing :php:`$_ENV` variables
directly within the Composer autoload process.

This has two nice benefits:

*   You can even set the `TYPO3_CONTEXT` application context environment variable
    through an :file:`.env` file, and no longer need to specify that in your webserver
    configuration (e.g. via `.htaccess` or VirtualHost-Configuration).
*   You do not need to add and maintain such loading code to your :file:`additional.php`
    file.

The drawback is that you'll have an additional dependency on another package, and
glue code that is outside of your own implementation.

.. _environment-phpconfig:

Plain PHP configuration files
=============================

If the concept of requiring a specific file format and their loader dependencies
seems like too much overhead for you, something similar can be achieved
by including environment-specific :php:`.php` files

For example, you can create a custom file like :file:`system/environment.php` that
will only be placed on your specific target server (and not be kept in your versioning
control system).

..  literalinclude:: Environments/_environment.php
    :language: php
    :caption: <config>/system/environment.php

This file would also need to be loaded through the additional configuration
workflow:

..  literalinclude:: Environments/_additional-native.php
    :language: php
    :caption: <config>/system/additional.php

You can of course move such a file to a special :file:`Shared/Data/` directory
(see :ref:`deploytypo3`), as long as you take care the file is outside
your public web root directory scope.

The file :file:`additional.php` can still contain custom changes that shall
be applied to every environment of yours, and that is not managed through
:file:`settings.php`.

..  hint::
    The file :file:`settings.php` is used by TYPO3 to store changes made through
    the GUI of the backend. :file:`additional.php` always has the higher
    priority, so configuration values there will overwrite the GUI configuration.

..  tip::
    You can utilize the defined TYPO3
    :ref:`Application context <t3coreapi:application-context>` to dynamically load
    (and enhance) context-specific configuration files, like:

    ..  literalinclude:: Environments/_additional-context.php
        :language: php
        :caption: <config>/system/additional.php


.. _environment-production-settings:

Production Settings
===================

To ensure a secure installation of TYPO3 on a production server, the following settings need to be set:

- :guilabel:`Admin Tools > Settings > Configuration Presets` The "Live" preset has to be chosen to make sure no debug output is displayed.
  When using environment specific configurations, the recommended way is to specifically set the values for
  error/debugging configuration values instead of presets, like:
    ..  code::
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['displayErrors'] = '0';
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['sqlDebug'] = '0';
        $GLOBALS['TYPO3_CONF_VARS']['FE']['debug'] = '0';
        $GLOBALS['TYPO3_CONF_VARS']['BE']['debug'] = '0';
- `HTTPS` should be used on production servers and :php:`$GLOBALS['TYPO3_CONF_VARS']['BE']['lockSSL']` should be set to `true`.
- Enforce HSTS (Strict-Transport-Security header) in the web servers configuration.
- The `TYPO3_CONTEXT` environment variable should be set to a main context of `Production` (can be verified on the top right in the TYPO3 backend :guilabel:`Application Information`). It should be used to select the appropriate `base variant` for the target system in the Site Configuration.
- Configure the :ref:`TYPO3 logging framework <t3coreapi:logging-configuration>` to log messages of high severity including and above WARNING or ERROR
  and continue to rotate log files stored in :file:`var/log`.
- Verify the :ref:`file permissions <t3coreapi:security-file-directory-permissions>` are correct on the live system.

