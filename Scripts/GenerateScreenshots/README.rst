=====================
Automatic Screenshots
=====================

The files in this folder can be used to create automatic screenshots. Read
the `Manual of the automatic screenshot project
<https://typo3-documentation.github.io/t3docs-screenshots/Install/Index.html>`_

Generate the mappings
=====================

.. code-block:: bash

   ddev exec ./public/OriginalManual/TYPO3CMS-Tutorial-GettingStarted/Scripts/GenerateScreenshots/CreateMappings.sh

Run Puppeteer
=============

.. code-block:: bash

   ddev exec node typo3.js --suite=TYPO3CMS-Tutorial-GettingStarted

Compare images and copy files
=============================

::

   https://sig-screenshots.ddev.site/scripts/index.php?manual=TYPO3CMS-Tutorial-GettingStarted
