:navigation-title: Setup

..  include:: /Includes.rst.txt
..  _typo3-setup:

=================================
TYPO3 setup on first installation
=================================

You can set up TYPO3 either via a console command or by using the web-based
Install Tool.

..  contents::
    :local:

..  _typo3-setup-console:

Set up TYPO3 using the console
===============================

..  versionadded:: 12.1
    Starting with TYPO3 12.1, a new CLI command `typo3 setup` is available
    as an alternative to the traditional web-based installer.

To perform an interactive guided setup, run:

..  code-block:: bash

    # Run TYPO3 CLI setup (database credentials are pre-filled)
    ddev typo3 setup --server-type=other --driver=mysqli --host=db --port=3306 --dbname=db --username=db --password=db

When prompted, provide the following answers to match the default DDEV
configuration:

..  code-block:: text

    Admin username (user will be "system maintainer") ? j.doe
    Admin user and installer password ?
    Admin user email ? j.doe@example.org
    Give your project a name [default: New TYPO3 Project] ? My Project
    Create a basic site? Please enter a URL [default: no] https://my-project.ddev.site
    ✓ Congratulations - TYPO3 Setup is done.

..  _install-access-typo3-via-a-web-browser:

Set up TYPO3 using the web installer (1-2-3 install tool)
=========================================================

Alternatively, you can use the web-based Install Tool to set up TYPO3.

1.  Create a file named :file:`FIRST_INSTALL` in your webroot:

    ..  code-block:: bash

        ddev exec touch public/FIRST_INSTALL

2.  Open the TYPO3 installer in your browser:

    ..  code-block:: bash

        ddev launch /typo3/install.php

3.  After completing the setup, access the TYPO3 backend:

    ..  code-block:: bash

        ddev launch /typo3

Log in using the credentials you just created during the setup process.

..  _typo3-setup-application context:

Set the application context for local development
==================================================

After completing the setup, TYPO3 will run in the "Production" application
context by default.

For local development, it is recommended to switch to the "Development/DDEV"
context for better error reporting, debugging features, and developer-friendly
features.

 Edit your :file:`.ddev/config.yaml` and add:

..  code-block:: yaml
    :caption: .ddev/config.yaml

    web_environment:
      - TYPO3_CONTEXT=Development/DDEV

Restart DDEV to apply the changes:

..  code-block:: bash

    ddev restart
