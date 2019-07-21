.. include:: ../Includes.txt


.. _extension-manager:
.. _a-short-glimpse-into-the-extension-manager:

=====================
The Extension Manager
=====================

TYPO3 CMS has many built-in features but even more features are
available via extensions. Actually the whole of TYPO3 CMS itself
is made of extensions. With public extensions you can enhance existing
features or add totally new ones.

The *Extension Manager* is where you can manage available extensions
or get new ones from the TYPO3 Extension Repository (TER). It is quite
a rich tool and this chapter provides only a brief overview.

It is possible to set up your TYPO3 CMS installation and install
extensions by using Composer. In that case, the *Extension Manager*
is of little relevance. For more information, see the :ref:`t3install:start`.

Moving to **ADMIN TOOLS > Extensions**, we get the following view:

.. figure:: ../Images/BackendExtensionManager.png
   :alt: TYPO3 CMS Extension Manager
   :class: with-shadow

It shows the "Installed extensions". The first action icon (1) can be used
to install an uninstalled extension or vice-versa (uninstalled extensions
appear grayed out).

Next comes information about the extension: title, key, version and state.
Finally are one or more actions icons, depending on what the extension offers.
All extensions have a download action, many will have a configuration action,
which can be used to access the extension's options. Again just hover over
the actions to get a help text.


.. _install-extension:

Installing a New Extension
==========================

This is covered in the "Installation and Upgrade Guide": :ref:`t3install:extension-installation`.

.. warning::

   **Extension security**

   Please keep in mind there is no security audit available for public
   extensions! Have a close look at the extensions you are installing.
   If you find any security issue get in touch with the security team:
   security@typo3.org .
