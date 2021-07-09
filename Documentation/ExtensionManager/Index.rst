.. include:: /Includes.rst.txt
.. index:: Extension Manager
.. _extension-manager:
.. _a-short-glimpse-into-the-extension-manager:

=====================
The Extension Manager
=====================

.. important::

   This chapters cover modules that will only be available for backend users
   with :ref:`"system maintainer" <system-maintainer>` access privileges.

.. tip::

   It is possible to set up your TYPO3 CMS installation and install
   extensions by using **Composer**. In that case, the *Extension Manager*
   is of less relevance. For more information, see the chapters in the
   Installation & Upgrade Guide:

   * :ref:`t3install:install-via-composer`
   * :ref:`t3install:install-extension-with-composer`

TYPO3 CMS has many built-in features but even more features are
available via extensions. Actually the whole of TYPO3 CMS itself
is made of extensions. With public extensions you can enhance existing
features or add new ones.

The *Extension Manager* is where you can manage available extensions.
You can also install extensions from the TYPO3 Extension Repository (TER),
if your installation is not set up with Composer. The *Extension Manager* is quite
a rich tool and this chapter provides only a brief overview.

Moving to **ADMIN TOOLS > Extensions**, we get the following view
(in non-Composer mode):

.. figure:: /Images/ManualScreenshots/ExtensionManager/ExtensionManager.png
   :alt: TYPO3 CMS Extension Manager
   :class: with-shadow

It shows the "Installed extensions". The first action icon (1) can be used
to activate an extension or deactivate it (deactivated extensions
appear grayed out).

Next comes information about the extension (from left to right): the
title (2), key (3), version (4) state (5) and type (6).

On the right, there are one or more actions icons (7), depending on what the extension offers.
All extensions have a download action. Hover over the actions to get a help text.

Extensions are configured in :guilabel:`Settings > Extension Configuration`


.. index:: Extensions; Installation
.. _install-extension:

Installing a new extension
==========================

This is covered in the "Installation and Upgrade Guide": :ref:`t3install:extension-installation`.

.. warning::

   **Extension security**

   Please keep in mind there is no security audit available for public
   extensions! Have a close look at the extensions you are installing.
   If you find any security issue get in touch with the security team:
   security@typo3.org .
