.. include:: /Includes.rst.txt

.. index:: deployment, composer, production setup

.. _deploytypo3:

===============
Deploying TYPO3
===============

This guide outlines the steps required to manually deploy TYPO3 and ensure the installation
is secure and ready to be used in a production context. This guide also highlights a number of
automation tools that can help automate the deployment process.

There are several different ways to deploy TYPO3. One of the more simple
options is to manually copy its files and database
from a local machine to the live server, adjusting the configuration where
necessary.

General Deployment Steps
========================

-  Build the local environment (installing everything necessary for the website)
-  Run `composer install --no-dev` to install without development dependencies
-  Copy files to the production server
-  Copy the database to the production server
-  Clearing the caches

.. note::

    The `composer install` command should not be run on the live environment.
    Ideally, `composer` should only run locally or on a dedicated deployment machine,
    to allow testing before going live.

    To avoid conflicts between the local and the server's PHP version,
    the server's PHP version can be defined in the :file:`composer.json` file
    (e.g. ``{"platform": {"php": "8.1"}}``), so `composer` will always check
    the correct dependencies.

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

Deployment Automation
=====================

A typical setup for deploying web applications consists of three different parts:

- The local environment (for development)
- The build environment (for reproducible builds). This can be a controlled local environment or a remote continuous integration server (for example Gitlab CI or Github Actions)
- The live (production) environment

To get an application from the local environment to the production system, the usage of a deployment tool and/or a continuous integration solution is recommended. This ensures that only version-controlled code is deployed and that builds are reproducible. Ideally setting a new release live will be an atomical operation and lead to no downtime. If there are errors in any of the deployment or test stages, most deployment tools will initiate an automatic "rollback" preventing that an erroneous build is released.

One widely employed strategy is the "symlink-switching" approach:

In that strategy, the webserver serves files from a virtual path :file:`releases/current/public` which consists of a symlink :file:`releases/current` pointing to the latest deployment ("release"). That symlink is switched after a new release has been successfully prepared.
The latest deployment contains symlinks to folders that should be common among all releases (commonly called "shared folders").

Usually the database is shared between releases and upgrade wizards and schema upgrades are run automatically before or
shortly after the new release has been set live.

This is an exemplatory directory structure of a "symlink-switching" TYPO3 installation:

.. code-block:: none

    ├── shared/
    │    ├── fileadmin/
    │    └── var/
    │        ├── var/charset/
    │        ├── var/lock/
    │        ├── var/log/
    │        └── var/session/
    ├── releases/
    │    ├── current -> ./release1 (symlink to current release)
    │    └── release1/
    │        ├── public/ (webserver root, via releases/current/public)
    │        │   ├── typo3conf/
    │        │   ├── fileadmin -> ../../../shared/fileadmin/ (symlink)
    │        │   └── index.php
    │        ├── var/
    │        |   ├── var/build/
    │        |   ├── var/cache/
    │        |   ├── var/charset -> ../../../shared/var/charset/ (symlink)
    │        |   ├── var/labels/
    │        |   ├── var/lock -> ../../../shared/var/lock/ (symlink)
    │        |   ├── var/log -> ../../../shared/var/log/ (symlink)
    │        |   └── var/session -> ../../../shared/var/session/ (symlink)
    │        ├── vendor/
    │        ├── composer.json
    │        └── composer.lock


The files in `shared` are shared between different releases of a web site.
The `releases` directory contains the TYPO3 code that will change between the release of each version.

When using a deployment tool this kind of directory structure is usually created automatically.

The following section contains examples for various deployment tools and how they can be configured to use TYPO3:

.. tabs::

   .. tab:: TYPO3 Surf

      :doc:`TYPO3 Surf <ext_surf:Index>` is a deployment tool written in PHP.


      .. code-block:: php
         :caption: ~/.surf/MyDeployment.php

         <?php
         /** @var \TYPO3\Surf\Domain\Model\Deployment $deployment */

         $node = new \TYPO3\Surf\Domain\Model\Node('my.node.com');
         $node
             ->setHostname($node->getName())
             ->setOption('username', 'myuser')
             ->setOption('phpBinaryPathAndFilename', '/usr/local/bin/php_cli');

         $application = new \TYPO3\Surf\Application\TYPO3\CMS();
         $application
             ->setDeploymentPath('/httpdocs')
             ->setOption('baseUrl', 'https://my.node.com/')
             ->setOption('webDirectory', 'public')
             ->setOption('symlinkDataFolders', ['fileadmin'])
             ->setOption('repositoryUrl', 'file://' . dirname(__DIR__))
             ->setOption('keepReleases', 3)
             ->setOption('composerCommandPath', 'composer')
             ->setOption('rsyncExcludes', [
                 '.ddev',
                 '.git',
                 $application->getOption('webDirectory') . '/fileadmin',
                 'packages/**.sass'
             ])
             ->setOption(TYPO3\Surf\Task\TYPO3\CMS\FlushCachesTask::class . '[arguments]', [])
             ->addSymlink($application->getOption('webDirectory') . '/config/system/settings.php', '../../../../shared/Configuration/settings.php')
             ->addNode($node);

             $deployment
                 ->addApplication($application)
                 ->onInitialize(
                     function () use ($deployment, $application) {
                         $deployment->getWorkflow()
                             ->beforeTask(\TYPO3\Surf\Task\TYPO3\CMS\SetUpExtensionsTask::class, \TYPO3\Surf\Task\TYPO3\CMS\CompareDatabaseTask::class, $application)
                             ->beforeStage('transfer', \TYPO3\Surf\Task\Php\WebOpcacheResetCreateScriptTask::class, $application)
                             ->afterStage('switch', \TYPO3\Surf\Task\Php\WebOpcacheResetExecuteTask::class, $application)
                             // CreatePackageStatesTask is done by post-autoload-dump script and can be removed
                             // https://github.com/TYPO3/TYPO3.CMS.BaseDistribution/blob/9.x/composer.json#L38
                             ->removeTask(\TYPO3\Surf\Task\TYPO3\CMS\CreatePackageStatesTask::class, $application)
                             ->removeTask(\TYPO3\Surf\Task\TYPO3\CMS\CopyConfigurationTask::class, $application);
                     }
                 );


   .. tab:: Deployer

      `Deployer <https://deployer.org>`__ is an alternative deployment tool
      written in PHP. A full description about how to get deployer running
      for TYPO3 can be found at https://t3terminal.com/blog/typo3-deploy/

      .. code-block:: php

         <?php

         namespace Deployer;

         require_once(__DIR__ . '/vendor/sourcebroker/deployer-loader/autoload.php');
         new \SourceBroker\DeployerExtendedTypo3\Loader();

         set('repository', 'git@github.com:youraccount/yourproject.git');
         set('bin/php', '/home/www/example-project-directory/.bin/php');
         set('web_path', 'public/');

         host('live')
             ->hostname('production.example.org')
             ->user('deploy')
             ->set('branch', 'main')
             ->set('public_urls', ['https://production.example.org'])
             ->set('deploy_path', '/home/www/example-project-directory/live');


   .. tab:: Magallanes

      Yet another deployment tool for PHP applications written in PHP: https://www.magephp.com

      .. code-block:: yaml
         :caption: .mage.yml

         magephp:
           log_dir: ./.mage/logs
           composer:
             path: composer
           exclude:
             - ./.ddev
             - ./.git
             - ./.mage
             - ./public/fileadmin
             - ./public/typo3temp
             - ./var
             - ./.mage.yml
             - ./composer.json
             - ./composer.lock
             - ./LICENSE
             - ./README.md
           environments:
             main:
               user: ssh-user
               from: ./
               host_path: /srv/vhosts/target-path/site/mage
               releases: 3
               hosts:
                 - production.example.org
               pre-deploy:
                 - exec: { cmd: "composer install --no-dev --no-progress --optimize-autoloader"}
               on-deploy:
                 - fs/link: { from: "../../../../shared/public/fileadmin", to: "public/fileadmin" }
                 - fs/link: { from: "../../../../shared/public/typo3temp", to: "public/typo3temp" }
                 - fs/link: { from: "../../../shared/var", to: "var" }
               on-release:
               post-release:
                 - exec: { cmd: './bin/typo3 backend:lock', timeout: 9000  }
                 - exec: { cmd: './bin/typo3cms database:updateschema *.add,*.change', timeout: 9000  }
                 - exec: { cmd: './bin/typo3cms cache:flush', timeout: 9000  }
                 - exec: { cmd: './bin/typo3 upgrade:run', timeout: 9000  }
                 - exec: { cmd: './bin/typo3 backend:unlock', timeout: 9000  }
               post-deploy:
