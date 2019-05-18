.. include:: ../Includes.txt


.. _installation:

============
Installation
============

.. _prerequisite:

Prerequisite
============

For trying out TYPO3 CMS you need to have a fully configured and ready
to use web server which meets the `minimum system requirements
<https://get.typo3.org/version/9#system-requirements>`_.

.. _getting-the-introduction-package:
.. _installing-typo3-cms-base-system:
.. _installing-the-introduction-package:

Installing TYPO3 CMS Base System
================================

First you will need to download and install the TYPO3's Base Distribution.
Follow the steps provided in the :ref:`Quick Installation <t3install:quick-installation>`
part of the :ref:`Installation and Upgrade Guide <t3install:start>`.

.. _installing-the-introduction-package:

Installing the Introduction Package
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Introduction Package contains several pages of example content
using differing page layouts to help give you a better understanding
about the various types content you can create using TYPO3.

When you are at step 6 of the Install Tool, select the option to download a list
of distributions.

.. figure:: ../Images/InstallToolLoadDistributions.png
   :alt: Choosing to load distributions in the Install Tool

You will then be prompted to log into the CMS backend using
the login and password you defined in step 5.

Once you have successfully logged in, you will be presented with a list
of available distributions.

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

The rest of this tutorial is based on the Introduction Package.
