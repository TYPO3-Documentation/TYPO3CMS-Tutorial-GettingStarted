:navigation-title: Cache
..  include:: /Includes.rst.txt

..  _cache:

=====
Cache
=====

.. _what-is-caching:

What is Caching in TYPO3?
=========================

Caching is a process TYPO3 uses to temporarily store content and data to help
your website load faster and perform efficiently. Instead of regenerating
every page or content piece each time a visitor loads it, TYPO3 saves a
"cached" version. This way, the system can quickly serve this saved content,
reducing the load on the server and speeding up the response time for users.

.. _how-to-clear-cache:

How to clear caches in TYPO3?
=============================

When you update content or make configuration changes, TYPO3 sometimes needs a
cache refresh to reflect these updates on the live site.
Here are the main ways to clear caches in TYPO3 13:

*   Clearing Cache in the backend:

    *   In the Backend, look for the Clear Cache icon, which resembles a
        lightning bolt. You can find this in the top toolbar.

        .. figure:: /Images/ManualScreenshots/ClearCache/Toolbar.png

    *   For deeper cache management, you can use the Install Tool:
        In :guilabel:`Admin Tools > Maintenance` you can find the option to
        clear all caches. This will refresh everything, including caches
        that aren't typically cleared through the backend toolbar.backend

*   Clearing Caches via Command Line

    For advanced users or developers, caches can also be cleared from
    the command line:

    ..  code-block:: bash

        ddev typo3 cache:flush

.. _when-to-clear-cache:

When should you clear Caches?
=============================

*   If new content, images or text doesn't show up right away.
*   When adjusting templates, extensions or system settings.
*   While working on custom code, plugins or during site updates.
