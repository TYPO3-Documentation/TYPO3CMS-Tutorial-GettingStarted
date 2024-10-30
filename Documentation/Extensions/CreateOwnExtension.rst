.. include:: /Includes.rst.txt

.. _create-own-extension:

=========================
Create your own extension
=========================

In TYPO3, extensions allow you to expand the system’s functionality by
adding new features and customizing behavior according to your project's needs.

Prerequisites
=============

*   A working :ref:`TYPO3 installation <t3start:installation-ddev-tutorial>`
    using Composer.
*   Familiarity with Composer
*   Basic knowledge of PHP and TYPO3 development concepts
*   CLI access to your TYPO3 instance

.. _why-create-extension:

Why create an extension?
========================

Creating an extension allows you to:

*   Add custom features and modules to TYPO3
*   Share functionality across multiple TYPO3 instances


.. _how-to-create-extension:

How to start developing an extension
====================================

Developing an extension involves several steps, from setting up the extension
structure to implementing your custom functionality.
To guide you through this process, TYPO3 provides a detailed tutorial on
extension development.

Please refer to this :ref:`link <t3coreapi:extension-tutorials>` for
comprehensive, step-by-step instructions on how to create an extension.


.. _basic-steps:

Basic steps to create an extension
==================================

*   Define the purpose of your extension.

    Determine what specific functionality or feature you want to add to TYPO3

*   Create the extension skeleton

    Set up the basic structure for your extension.

*   Implement the desired features

    Add the necessary PHP classes, TypoScript configuration and templates
    that will bring your extension´s functionality to life.

*   Register the extension in TYPO3

    Register your extension so TYPO3 can recognize it. This includes adding it
    to your instance´s configuration.

*   Test and refine

    Test your extension to ensure it works as expected and make any needed
    adjustments.
