.. include:: ../Includes.txt


.. _composer:

========
Composer
========

Composer is required to install TYPO3. It is also used to manage updates and install third party packages
and Extensions.

For information on how to install Composer, visit `https://getcomposer.org/ <https://getcomposer.org/>`_

.. note::

   Composer does not need to be available on the target server (the live system). All installation tasks should be done
   locally or via a continuous integration server.

The following section details how the most common tasks can be achieved with composer:

Update Packages
===============

After updating any packages, the :file:`composer.lock` file should be committed to
the version control system and any co-workers
should run `composer install` after checking out the updates.

Update all Packages
-------------------

Running `composer update` without any other attributes, will update all
packages. Composer will always try to install the newest packages that
match the defined version constraints.

.. note::

    This command may cause negative effects if there are wrong (or too open)
    version constraints in the :file:`composer.json`.
    It is preferable to update packages one by one (see below).

Update Single Packages
----------------------

Updating single packages can be achieved by running `composer update` with the
package name. Adding the ``--with-all-dependencies`` attribute also updates the
required third party packages.

Update TYPO3 Core
~~~~~~~~~~~~~~~~~


Update all system extensions::

    composer update typo3/cms-* --with-all-dependencies

Update Extensions Like "news"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    composer update georgringer/news --with-all-dependencies

Use Dev Requirements
====================

Using composer to add packages with the ``--dev`` flag adds packages only to the
development environment. This is very useful for packages, that do not
need or should not be available on the live server, e.g. PHPUnit or
Testing-Frameworks:

::

    composer require typo3/testing-framework:^2.0 --dev

During :ref:`deployment <deployment>`, ``composer install`` should be run with the
flag ``--no-dev`` to avoid installing development packages on the production server.

::

    composer install --no-dev


.. _composer-remove-extension:

Remove Extensions
=================

The composer command `remove` can be used to uninstall extensions or
other composer packages.

::

    composer remove georgringer/news

The :file:`composer.lock` file should be committed to the version
control system after any package changes.

.. note::

   Before removing extensions with composer, extensions should be disabled in TYPO3's Extension Manager.
   Another option is provided by the `extension "typo3_console" <https://docs.typo3.org/typo3cms/extensions/typo3_console/CommandReference/Index.html#install-generatepackagestates>`__:
   It allows the generation of the :file:`typo3conf/PackageStates.php` file automatically based on the currently
   available composer packages.



Check for Available Updates
===========================

The command `composer outdated` shows a list of available updates.

The command `composer outdated -D` shows a list of available updates for directly required packages.

Useful Packages and Bundles
===========================

Simplify Composer Installations
--------------------------------------

Instead of explicitly requiring each core extension, you can require
`typo3/minimal <https://packagist.org/packages/typo3/minimal>`__, which
brings the minimal required set of system extensions.

TYPO3 CMS Base Distribution
---------------------------

Primarily, `typo3/cms-base-distribution <https://packagist.org/packages/typo3/cms-base-distribution>`__
is not meant to be used with `composer require`, but to start new composer based TYPO3 projects.

Nevertheless, it's very good to have heard about it. The packages `README <https://github.com/TYPO3/TYPO3.CMS.BaseDistribution>`__.
provides more information.

.. _secure-web:

Secure Web
----------

`helhum/typo3-secure-web <https://packagist.org/packages/helhum/typo3-secure-web>`__
follows the very interesting concept to split the traditional web root directory into
two parts: the "public" one for all the resources, that must be directly accessible via
HTTP (images, styles, etc.) - and the "private" folder, where all the PHP will be located.

This helps to make TYPO3 installations even more secure!
