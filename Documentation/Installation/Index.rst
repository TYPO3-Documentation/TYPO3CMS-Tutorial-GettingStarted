..  include:: /Includes.rst.txt

..  index:: installation

..  _installation_index:

============
Installation
============

..  toctree::
    :hidden:
    :titlesonly:

    SystemRequirements/Index
    Install
    TutorialDdev
    EnvironmentConfiguration
    ProductionSettings
    DeployTYPO3
    LegacyInstallation

..  card-grid::
    :columns: 1
    :columns-md: 2
    :gap: 4
    :class: pb-4
    :card-height: 100

    ..  card:: :ref:`System requirements <system-requirements>`

        System requirements for the host operating system, including its web
        server and database and how they should be configured prior to
        installation.

    ..  card:: :ref:`Installing TYPO3 <install>`

        The Installation Guide covers everything needed to install TYPO3. Including a preinstallation
        checklist and a detailed walk through that details every step of the installation process.

    ..  card:: :ref:`Deploying TYPO3 <DeployTYPO3>`

        The deployment guide highlights some of solutions available that can help automate the process of deploying TYPO3 to
        a remote server.

    ..  card:: :ref:`TYPO3 Release Integrity <release_integrity>`

        Every release of TYPO3 is electronically signed by the TYPO3 release team.
        In addition, every TYPO3 package also contains a unique file hash that
        can be used to ensure file integrity when downloading the release. This guide
        details how these signatures can be checked and how file hashes can be compared.

    ..  card:: :ref:`Installing TYPO3 With DDEV <installation-ddev-tutorial>`

        This is a step-by-step guide detailing how to install TYPO3 using DDEV, Docker and Composer.

    ..  card:: :ref:`Legacy Installation Guide <legacyinstallation>`

        Looking to install TYPO3 the classic way? Whilst this method of installation is no longer recommended, the Legacy Installation
        Guide demonstrates how TYPO3 can be installed without using Composer.

..  _installation_advanced:

Advanced installation topics
============================

..  card-grid::
    :columns: 1
    :columns-md: 2
    :gap: 4
    :class: pb-4
    :card-height: 100

    ..  card:: :ref:`Tuning TYPO3 <t3coreapi:TuneTYPO3>`

        This chapter in TYPO3 Explained contains information on how to configure and optimize the
        infrastructure running TYPO3.
