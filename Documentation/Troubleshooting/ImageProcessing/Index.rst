.. include:: ../../Includes.txt

.. _image-processing:
.. _note-on-image-processing-in-typo:

==========================
A Note on Image Processing
==========================

TYPO3 CMS relies on ImageMagick or GraphicsMagic to generate
images matching the specified sizes on the fly. If you do not see all expected images
it could be that neither ImageMagick nor GraphicsMagic are installed on your
server or that your installation is not properly configured.

For more help on the topic, please refer to the
:ref:`Installation Guide <t3install:start>`.

You could also ask for help in the `installation forums <https://forum.typo3.org/index.php/i/6/>`_.

.. note::
   Please be aware that converting/reading of PDF and AI files is no longer
   possible because GraphicsMagic and ImageMagick recently dropped this
   functionality for security reasons. 

   See the issues https://forge.typo3.org/issues/86368 and https://forge.typo3.org/issues/86369
   for further details. The issues also describe a workaround.

