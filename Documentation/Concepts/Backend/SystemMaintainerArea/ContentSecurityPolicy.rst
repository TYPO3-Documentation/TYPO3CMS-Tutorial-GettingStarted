:navigation-title: Content Security Policy

..  include:: /Includes.rst.txt
..  _admin-tools-csp:
..  _system-csp:

================================
Content Security Policy (System)
================================

..  versionchanged:: 14.0
    :changelog: feature-107628-1729026000

    This module has been moved from :guilabel:`Admin tools` to
    :guilabel:`System`.

:ref:`Content Security Policy <t3coreapi:content-security-policy>` declarations
can be applied to a TYPO3 website in frontend and backend scope with a dedicated
API.

This module handles
:ref:`Reporting of violations of the Content Security
Policy <t3coreapi:content-security-policy-reporting>`. It is always available
but can only be :ref:`accessed via the backend <t3start:admin-tools-access>`,
not the Install Tool.
