..  include:: /Includes.rst.txt

..  index:: Deployment; Deployer

..  _deployment-deployer:

========
Deployer
========

`Deployer <https://deployer.org/>`__ is a deployment tool written in PHP. Please
also have a look into the
`documentation of Deployer <https://deployer.org/docs/7.x/installation>`__,
mainly the "Basics" and "Main Concepts".

..  todo: Explain:
    * releases (which are symlinked)

.. contents:: **Table of Contents**
   :local:


Installation
============

It is recommended to install Deployer either as a separate project or in a
sub-folder of your project, for example :file:`<project-root>/deployment/`. This
avoids dependency problems with the dependencies of your project.

..  code-block:: bash

    composer require deployer/deployer


Initialize configuration
========================

Afterwards you can initialize the configuration with

..  code-block:: bash

    vendor/bin/dep init

On console you are asked interactively some questions to generate a
configuration:

#.  Recipe language: The following sections use the PHP configuration, so choose
    `php`.

#.  Project template: You may choose `typo3` as project template, but this is
    slightly outdated, so it is suggested to use the `common` template.

#.  Repository: Enter the repository URL of your TYPO3 project.

#.  Project name: Enter the name of the project.

#.  Hosts: Leave empty for now, we will come back later to this.

A :file:`deploy.php` file has been created, which is the starting point:

..  literalinclude:: _deploy-initial.php
    :language: php
    :caption: deploy.php


Customization
=============

Define folders and files
------------------------

We have to define some folders and files:

*   A `typo3_webroot` which holds the folder of the project's web root folder,
    common names are :file:`public`, :file:`htdocs` or :file:`web`. We will use
    :file:`public` in the example.

*   Some `shared_dirs` which hold content and must not change when switching
    releases.

*   Some `shared_files` may be necessary, if you use a .env file, this will
    be referenced here.

*   Some of the folders must be writable (`writable_dirs`). There a separate
    options for this, see `writable_mode <https://deployer.org/docs/7.x/recipe/deploy/writable#writable_mode>`__.

..  literalinclude:: _deploy-folders-files.php
    :language: php
    :caption: deploy.php
    :emphasize-lines: 11-30
