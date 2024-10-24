.. include:: /Includes.rst.txt

.. index:: backend, frontend, concepts

.. _concepts:

==============
TYPO3 Concepts
==============

..  card-grid::
    :columns: 1
    :columns-md: 2
    :gap: 4
    :class: pb-4
    :card-height: 100

    ..  card:: TypoScript

        TypoScript is the basic configuration language used to configure the
        frontend output of a page in TYPO3.

        ..  card-footer:: :ref:`Create a minimal page created by pure TypoScript <typoscript>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Fluid templating

        Fluid is the standard templating engine that is used with TYPO3.

        ..  card-footer:: :ref:`Quick introduction to Fluid <fluid-templates>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: TCA

        TCA (Table Configuration Array) in TYPO3 is a configuration system that
        defines the structure, behavior, and appearance of database tables and
        their fields in the backend, impacting how data is stored, validated,
        and displayed.

        ..  card-footer:: :ref:`Quick introduction to TCA <tca>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Webroot and assets

        In TYPO3 files that are displayed in the web browser, must - for
        security reasons - be placed in certain directories.

        ..  card-footer:: :ref:`Webroot and assets - where to put public files <webroot>`
            :button-style: btn btn-secondary stretched-link


..  toctree::
    :caption: Topics
    :glob:
    :titlesonly:
    :hidden:

    TypoScript/Index
    Fluid/Index
    TCA/Index
    Assets/Index
    Backend/Index
    Frontend/Index
    */Index
    *





Extensions
----------

.. figure:: /Images/Illustrations/extensions.png

Extensions are pieces of software developed by the TYPO3 community that extend
the functionality of a TYPO3 installation. Extensions come in many forms
- from small extensions that carry out specific tasks to larger extensions that
provide an entire suite of functionality, e.g. the TYPO3 Blog Extension.

