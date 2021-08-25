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
    (e.g. ``{"platform": {"php": "7.2"}}``), so `composer` will always check
    the correct dependencies.

Production Settings
===================

To ensure a secure installation of TYPO3 on a production server, the following settings need to be set:

- :guilabel:`Admin Tools > Settings > Configuration Presets` The "Live" preset has to be chosen to make sure no debug output is displayed.
- `HTTPS` should be used on production servers and :php:`$GLOBALS['TYPO3_CONF_VARS']['BE']['lockSSL']` should be set to `true`.
- The `TYPO3_CONTEXT` environment variable should be set to production (can be verified on the top right in the TYPO3 backend :guilabel:`Application Information`).

Additionally, verify the :ref:`file permissions <t3coreapi:file-directory-permissions>` on the live system.


Deployment Automation
=====================

A typical setup for deploying web applications consists of three different parts:

- The local environment
- The build or continuous integration server (for example Gitlab CI or Github Actions)
- The live (production) environment

To get an application from the local environment to the production system, the usage of a deployment tool and/or a continuous integration solution is recommended.

The directory structure of a 'production' TYPO3 installation looks like this:

.. code-block:: none

    ├── shared
    │    ├── fileadmin/
    │    ├── typo3temp/
    │    └── var/
    ├── releases
    │    ├── current -> ../release1 (symlink to current release)
    │    └── release1
    │        ├── public
    │        │  ├── typo3conf
    │        │  ├── typo3temp -> ../../../shared/typo3temp/ (symlink)
    │        │  └── index.php
    │        ├── composer.json
    │        ├── composer.lock
    │        ├── var -> ../../shared/var/ (symlink)
    │        └── vendor
    └── public -> releases/current/public (web server root, symlink)


The files in `shared` are shared between different releases of a web site. This is the place were assets (images, videos or PDFs) or generated
images are stored and where log files can be found.
The `releases` directory contains the TYPO3 code that will change between the release of each version.

When using a deployment tool this kind of directory structure is usually created automatically.

The following section contains examples for various deployment tools and how they can be configured to use TYPO3:

.. tabs::

   .. tab:: TYPO3 Surf

      `TYPO3 Surf <https://github.com/TYPO3/Surf#powerful-and-flexible-deployment-tool-for-php-projects>`__ is a deployment tool written in PHP.


      .. code-block:: php

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
            ->addSymlink($application->getOption('webDirectory') . '/typo3conf/LocalConfiguration.php', '../../../../shared/Configuration/LocalConfiguration.php')
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

      `Deployer <https://deployer.org>`__ is an alternative deployment tool written in PHP. An full description about how to get deployer running
      for TYPO3 can be found at https://t3terminal.com/blog/typo3-deploy/

      .. code-block:: php

        <?php

        namespace Deployer;

        require_once(__DIR__ . '/vendor/sourcebroker/deployer-loader/autoload.php');
        new \SourceBroker\DeployerExtendedTypo3\Loader();

        set('repository', 'git@github.com:sourcebrokergit/t3base10.git');
        set('bin/php', '/home/www/example-project-directory/.bin/php');
        set('web_path', 'public/');

        host('live')
            ->hostname('production.example.com')
            ->user('deploy')
            ->set('branch', 'master')
            ->set('public_urls', ['https://production.example.com'])
            ->set('deploy_path', '/home/www/example-project-directory/live');


   .. tab:: Magallanes

      Yet another deployment tool for PHP applications written in PHP: https://www.magephp.com

      .. code-block:: yaml

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
                - production.example.com
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
