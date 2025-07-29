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

    ..  card:: Backend

        The backend in TYPO3 is the administrative interface where users
        manage content, configure settings, and control the overall
        structure and functionality of the website.

        ..  card-footer:: :ref:`Backend <backend>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Frontend

        The frontend in TYPO3 refers to the part of the website that visitors
        see and interact with, including all visual elements and
        content displayed in the browser.

        ..  card-footer:: :ref:`Frontend <frontend>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Project Structure

        This chapter describes the structure of a TYPO3 project.

        ..  card-footer:: :ref:`Project Structure <project-structure>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Extensions

        An extension in TYPO3 is an add-on module that enhances the core
        functionality of the CMS, allowing you to add custom features or
        tools to your website.

        ..  card-footer:: :ref:`Extensions <concepts-extensions>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: Cache

        The TYPO3 cache temporarily stores website data to improve loading
        speed and reduce server load by delivering saved versions
        of content to visitors.

        ..  card-footer:: :ref:`Cache <cache>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: TypoScript

        TypoScript is the basic configuration language used to configure the
        frontend output of a page in TYPO3.

        ..  card-footer:: :ref:`Create a minimal page by pure TypoScript <typoscript>`
            :button-style: btn btn-secondary stretched-link

    ..  card:: TSconfig

        TSconfig is a configuration language used to configure the
        TYPO3 backend. It has the same syntax as TypoScript.

        ..  card-footer:: :ref:`TSconfig <tsconfig>`
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

    Backend/Index
    Frontend/Index
    ProjectStructure/Index
    Extensions/Index
    Cache/Index
    TypoScript/Index
    TSconfig/Index
    Fluid/Index
    TCA/Index
    Assets/Index
    */Index
    *
