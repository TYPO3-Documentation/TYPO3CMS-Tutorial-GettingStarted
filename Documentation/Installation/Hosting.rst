:navigation-title: Hosting

..  include:: /Includes.rst.txt
..  _hosting:

==================================================
Hosting provider considerations for TYPO3 projects
==================================================

TYPO3 can be run on any hosting environment that fulfills the
`System requirements <https://docs.typo3.org/permalink/t3start:system-requirements>`_.

Still the choice of the provider depends on numerous aspects:

*   Do you want to work on a `preinstalled TYPO3 project <https://docs.typo3.org/permalink/t3start:hosting-preinstalled>`_
    or **install and deploy** it yourself? In the later: Does the provider offer all
    tools you will need during deployment?
*   How much **support** do you want to be able to receive from your provider?
*   Do you need high **availability** and expect a large number of visitors in certain
    time frames?
*   Where do your visitors visit your website from?
*   Which laws regarding **data security and privacy** etc have to be followed
    in your country?
*   Do you need **additional services** like a SOLR Core for a professional on-site
    search?

..  contents:: Table of contents

.. _hosting-saas:

SaaS-like TYPO3 services
=========================

While TYPO3 does not currently have an official, centralized
:abbr:`SaaS (Software as a Service)`
offering comparable to solutions like WordPress.com, some hosting providers and agencies
offer services that come close. These typically include preinstalled TYPO3
instances with automated updates, backups, support, and other managed features,
reducing the technical burden on editors and site owners.

Such offerings are especially useful for teams that want to focus on content
creation and publishing without handling installation, deployment, or server
maintenance themselves.

For an up-to-date list of certified TYPO3 hosting and technology partners,
visit: https://typo3.com/partners

..  _hosting-preinstalled:

Preinstalled TYPO3 projects on a server
=======================================

At the time of writing, two of the official
`TYPO3 Technology Partners <https://typo3.com/partners/technology-partners>`_,
jweiland.net and Mittwald offer packages with preinstalled TYPO3 projects. Both
are situated in Germany.

Other hosting providers might offer the same service, refer to their websites
or customer services.

..  _hosting-deployment:

Deployment friendly tools on shared and managed hosting
=======================================================

If you decide on a shared or managed hosting, you will not have root access
to the server and not be able to install needed tools yourself. The following
tools are helpful or necessary for different deployment strategies:

*   **Multiple PHP versions** available. Some hosting providers only support one
    PHP version at a time and update it automatically. As major TYPO3 versions
    are bound to PHP versions this forces you to time your major TYPO3 updates
    to the servers PHP version updates.
*   Does the server have `Secure backup strategy <https://docs.typo3.org/permalink/t3coreapi:administration-backups>`_
    or will you have to set up one yourself?
*   A **managed Database system** unless you want to handle administration of the
    database system yourself or use a low-weight solution like SQLite.
*   **SSH access**: You will need SSH access to work on the shell of your server.
    Automatic deployment tools like deployer also rely on SSH access. If you
    have no SSH your options of deployment method are very limited or you
    have to rely on graphical user interfaces by your provider.
*   **Command on the shell** like `git`, `unzip`, `nano`, `mysql` etc are needed or
    helpful in your daily work.
*   If you plan on `Deploying TYPO3 Using Git and Composer <https://docs.typo3.org/permalink/t3coreapi:deployment-git-composer>`_
    Both command `git` and `composer` should be preinstalled. See also
    `Finding or installing Composer on the server <https://docs.typo3.org/permalink/t3coreapi:direct-server-composer-access>`_.

..  _hosting-docker:

Docker: Running TYPO3 in container-based solutions
==================================================

If you want to `Run TYPO3 in Docker on production <https://docs.typo3.org/permalink/t3coreapi:admin-docker-index>`_
you **must** choose a hosting provider that either supports running containers
or gives you the infrastructure on which you can run Docker yourself.

At the time of writing (June 2025) container based hosting solutions are on the
rise but not deeply embedded into the TYPO3 community yet.

There is a publicly available non-official image,
`martinhelmich/typo3 <https://github.com/martin-helmich/docker-typo3/blob/master/README.md>`_,
which installs TYPO3 in classic mode on mounted volumes. You can use it to test
`Deploying TYPO3 as a Docker container <https://docs.typo3.org/permalink/t3coreapi:docker-deployment>`_.

You can `Extend martinhelmich/typo3 <https://docs.typo3.org/permalink/t3coreapi:docker-extend-image>`_
or copy from it to create your own docker images.
