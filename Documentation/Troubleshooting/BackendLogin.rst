:navigation-title: Backend login
..  include:: /Includes.rst.txt

..  _troubleshooting-backend-login:

===================================================
Troubleshooting common TYPO3 backend login problems
===================================================

The following errors can happen during backend login:

..  contents::

..  tip::
    `Creating a TYPO3 backend administrator <https://docs.typo3.org/permalink/t3start:backend-users-admin-creation>`_
    is a solution if you lost the password or user name of your administrator account.

..  _troubleshooting-login-reload:

Login page reloads without error
================================

*   Try deleting all browser cookies and caches or use a different browser /
    device. There might be an outdated cookie that prevents log-in.
*   Clear all TYPO3 caches via console command or install tool.
*   Delete folder :path:`var/cache` to remove possible corrupted cache data.
*   Check the cookies configuration in TYPO3: Ensure that cookie-related
    settings (:confval:`sessionTimeout <t3coreapi:globals-typo3-conf-vars-be-sessiontimeout>`,
    :confval:`cookieDomain <t3coreapi:globals-typo3-conf-vars-be-cookiedomain>`)
    are correct and not causing session issues. Additionally, if 
    `$GLOBALS[TYPO3_CONF_VARS][BE][cookieSameSite]  <https://docs.typo3.org/permalink/t3coreapi:confval-globals-typo3-conf-vars-be-cookiesamesite>`_
    is set to "none", a login will only work on HTTPS connections.

..  _troubleshooting-login-invalid:

"Invalid Credentials" error
===========================

*   Check if the username and password are correct.
*   Try to `Create a new backend administrator <https://docs.typo3.org/permalink/t3start:backend-users-admin-creation>`_
    and use that one.

..  _troubleshooting-login-white-screen:

White screen before or after login
==================================

Many older TYPO3 files contain a line like the following that needs to be replaced:

..  code-block:: diff

    -defined('TYPO3_MODE') or die();
    +defined('TYPO3') or die();

The PHP constant `TYPO3_MODE` was removed with TYPO3 v12 but it is still
widespread in older code examples and extensions. This can also happen if you
installed a TYPO3 extension that is not compatible with newer TYPO3 versions.

If you have this line in your own code, replace it. If you find it in the above
code in a third party extension, check if a newer version is available. If you
do not find one you can try to reach out to the extension author or patch it
yourself.

..  _troubleshooting-login-access-denied:

Access denied before or after login
===================================

*   If the line above contains "Access denied." or a similar string that string will
    be output and the login page contains nothing else:

    ..  code-block:: diff

        -defined('TYPO3_MODE') or die('Access denied.');
        +defined('TYPO3') or die('Access denied.');

    The solution is the same like for :ref:`troubleshooting-login-white-screen`.
*   Check file permissions on the TYPO3 files.
*   Check the `.htaccess` or Nginx configurations

..  _troubleshooting-login-account-locked:

"Account locked" message
========================

*   Wait the required time
*   Or delete the folder :path:`var/cache`

..  _troubleshooting-login-page-not-found:

"Page Not Found" or 404 Error
=============================

*   Check file permissions on the TYPO3 files.
*   Check the `.htaccess` or Nginx configurations

..  _troubleshooting-login-broken:

Broken login form or missing elements
=====================================

*   Try deleting all browser cookies and caches or use a different browser /
    device. There might be an outdated cookie that prevents log-in.
*   Clear all TYPO3 caches via console command or install tool.
*   Was there a warning during `composer install`? The :path:`_assets` folder
    might not have been properly symlinked during installation.
*   Check the browser console for errors.
