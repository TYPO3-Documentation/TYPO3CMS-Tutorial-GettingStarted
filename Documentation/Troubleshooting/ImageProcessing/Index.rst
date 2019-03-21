.. include:: ../../Includes.txt

.. _image-processing:
.. _note-on-image-processing-in-typo:

==========================
A Note on Image Processing
==========================

TYPO3 CMS relies on ImageMagick or GraphicsMagic to generate on the fly
images matching the specified sizes. If you do not see all expected images
it could that neither ImageMagick nor GraphicsMagic are installed on your
server or that your installation is not properly configured.

For more help on the topic, please refer to the
:ref:`Installation Guide <t3install:start>`.

You could also ask for help in the `installation forums <https://forum.typo3.org/index.php/i/6/>`_.

.. note::
   Please be aware that converting/reading of PDF and AI files is actually no
   more possible because GraphicsMagic and ImageMagick recently dropped this 
   functionality for security reasons. 

   See the issues https://forge.typo3.org/issues/86368 and https://forge.typo3.org/issues/86369
   for further details, where a workaround is also present.

