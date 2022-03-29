.. include:: /Includes.rst.txt


.. _installation:

============
Installation
============

.. _prerequisite:

Prerequisite
============

For trying out TYPO3 CMS you need to have a fully configured and ready
to use web server which meets the `minimum system requirements
<https://get.typo3.org/version/8#system-requirements>`_.

If you do not have a web server and you are running a MS Windows
on your local machine, you might want to try the `TYPO3Winstaller
<http://typo3winstaller.sourceforge.net/>`_, which will install a web
server and TYPO3 CMS on your computer.

Make sure to have your database credentials ready.


.. _getting-the-introduction-package:
.. _installing-typo3-cms-base-system:
.. _installing-the-introduction-package:

Installing TYPO3 CMS Base System
================================

First you will need to download and install the TYPO3 CMS Package.
Follow the steps provided in the :ref:`Quick Installation <t3install:quick-installation>`
part of the Installation and Upgrade Guide.

Specifically, these are the steps you must perform:

#. Make sure your system is setup as described in :ref:`t3install:system-requirements`.
#. Install base system: It is recommended to use Composer for installing as described in
   :ref:`t3install:install-via-composer`. As an alternative, you can install
   TYPO3 without Composer: :ref:`t3install:get-and-unpack-the-typo3-package`.
#. After the base installation, you must follow the steps in :ref:`t3install:the-install-tool`.
#. :ref:`Install the Introduction Package <t3install:introduction-package>`.
   During installation, the Introduction Package will create several example pages and
   content, it will configure the web site and add a website template using the Bootstrap
   Package.

The rest of this tutorial is based on the introduction package.
