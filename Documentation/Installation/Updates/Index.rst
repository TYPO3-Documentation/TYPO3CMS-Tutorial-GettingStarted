..  include:: /Includes.rst.txt

..  _getting-started-typo3-updates:

=================
Maintaining TYPO3
=================

..  contents::
    :caption: Content on this page

..  _when-and-why-updates:

When and why should we perform TYPO3 updates?
=============================================

With the newest version of TYPO3 the TYPO3 core developers present you the best
version of TYPO3 CMS currently available on the market. It has the newest security features and the
most amount of useful features. That is why you should always want to have your
TYPO3 instances on the newest version possible. Another advantage is that you get free security fixes.

In TYPO3 however, we follow a specific cycle which usually takes 1.5 years long. Every
1 and a half year a new TYPO3 version occurs. You can follow the cycle `here <https://typo3.org/cms/roadmap>`__.

We explain the different parts in the `roadmap <https://typo3.org/cms/roadmap>`__ now.
When you follow the roadmap you see dark red strokes. They represent the **sprint releases**.
Sprint release is a version that starts for example with v13.0 and then the next sprint release follows with v13.1.
After the last sprint release (v13.3) the **Long Term Support release (LTS release)** v13.4 follows.
The aim of the sprint releases is to test the new code with the new features extensively, until the LTS-release is
reached. Therefore, the reason for sprint releases is to make the new code with the new features as agile and stable
as possible. The order is: sprint release (0), sprint release (1), sprint release (2), sprint release (3), LTS release (4).
Sometimes more sprint releases are possible.

The green area represents the **regular maintenance** state. The orange area is the time where the focus lays on fixing
bugs - so it is the **bug fixing phase**. The light orange area corresponds to the **extended support**. This means, when
you want to get further bugfixes you have to book an
`extended support <https://typo3.com/services/extended-support-elts>`__ which usually costs money.

In the following we look a bit deeper into the types of updates. Otherwise, when you feel safe with the concepts you
can use the :ref:`Upgrade Guide <t3coreapi:upgrading>` as a general or later reference to perform updates.

..  _getting-started-major-minor-patchlevel-updates:

Major, minor and patch level updates
====================================

In TYPO3 you can update your TYPO3 version. There exist three different types
of updates:

#.  Major updates: from for example 12.4.23 to 13.0.0
#.  Minor updates: from for example 13.0 to 13.1
#.  Patch and bugfix level updates (often security updates): from for example 13.4.0 to 13.4.1


..  _getting-started-major-typo3-updates:

Major updates
-------------

In major updates you will definitely have breaking changes and incompatible API
changes.
A breaking change can cause your system to break. You need to find a replacement
for any usage that was removed or changed. For example in version 13.0 was a
breaking change :ref:`Breaking: #101266 - Remove RequireJS <changelog:breaking-101266-1688654482>`.
That means, whenever and wherever you used `requireJsModules` you have to find
an replacement when you would like to have a working JavaScript functionality.
All files that you included with `requireJsModules` will not be loaded anymore.
When you update your TYPO3 version you should be aware of those changelog entries
which you can find in the :doc:`Changelog reference <changelog:Changelog-13#changelog-v13>`.
When dealing with a major version updates you usually have to use the backend module called **Upgrade wizard**. This
module will take care of database table changes that came along with the new TYPO3 version.
In TYPO3, we can separate a TYPO3 update into three stages: the :ref:`pre-upgrade stage <t3coreapi:preupgradetasks>`,
:ref:`actual update <t3coreapi:upgradecore>` and the :ref:`post-upgrade stage <t3coreapi:postupgradetasks>`.

..  _getting-started-minor-typo3-updates:

Minor updates
-------------

Minor changes - `11.*.2`: For example 11.5 has new functionalities compared to
11.4. The version 11.5 is compatible with 11. So withing a version like major
11 the steps do not lead to breaking changes. For example in version 13.3
compared to version 13.2 a new
:ref:`Feature: #101252 - Introduce ErrorHandler for 403 errors with redirect option <changelog:feature-101252-1715447531>`
was introduced.
When performing minor updates you often have to clear the cache, run the Upgrade wizard and to run a database compare.
Usually minor and patch changes are also referred to as **non-breaking** changes.

..  _getting-started-patchlevel-typo3-updates:

Patchlevel updates
------------------

Patchlevel changes - `11.5.*`: The version 11.5.2 indicates a backwards-compatible bugfix or patch release.
It can be for example a security update. Clear the cache and check if website is working as expected. For further
information we refer to the :ref:`Patch/Bugfix update guide<t3coreapi:minor>`.

..  _getting-started-extension-updates:

Extension updates
=================

In a TYPO3 instance you have usually have third party extensions installed. When you update your TYPO3 version you
have to update the third party extensions too. In the **TYPO3 Extension Repository (TER)** you can enter the name of
that extension and get information about supported TYPO3 versions. You find the TER `here <https://extensions.typo3.org/>`__.
You will recognize that some extension developers stopped developing their extension further. We recommend that you only
use third party extensions that are still supported.

Useful commands to simplify the updates of extensions can be found in the :ref:`Upgrade extensions guide <t3coreapi:upgradingextensions>`.

..  _getting-started-cronjobs:

Cron jobs
=========

You can use cron jobs to do tasks that occur repeated. The backend module called
:ref:`TYPO3 Scheduler <typo3/cms-scheduler:start>` can be used to perform a cronjob that you defined previously.
In your terminal you can type


..  code-block:: shell
    :caption: Create or open the crontab

    crontab -e

to create a new job on unix-like operating systems. In :ref:`Setting up the cron job <typo3/cms-scheduler:cron-job>` you can
see how this works. Normally you have to define the time interval in which the job should be performed frequently. To
test your pattern you can insert it `here <https://crontab.guru/>`__ and test if it performs like you expect. When you
are not familiar with cron jobs we refer to https://en.wikipedia.org/wiki/Cron. With a cron job you can for example
create a fal cleanup or a sys history cleanup.


..  _getting-started-deprecations:

Deprecations
============

In TYPO3, deprecations indicate that a specific functionality will be removed in the next TYPO3 version. For further
information we refer to the :ref:`article about deprecation <t3coreapi:deprecation>`. For example the
:ref:`deprecation: #105171 - INCLUDE_TYPOSCRIPT TypoScript syntax <changelog:deprecation-105171-1727785626>`- notice is
a deprecation notice telling you that in TYPO3 v14 you can't use the TypoScript syntax :typoscript:`INCLUDE_TYPOSCRIPT`
to include TypoScript files anymore.

..  _getting-started-little-helpers:

Little Helpers: Rector and Fractor
==================================

In general you can use extensions like `rector <https://github.com/sabbelasichon/typo3-rector/blob/main/README.md>`__
or `fractor <https://github.com/andreaswolf/fractor>`__ to find and replace deprecations. To reach this you have to
fill out a configuration file (in rector file :file:`rector.php`, in fractor file :file:`fractor.php`) that defines
the scope in which you want to perform deprecation replacements. For both extension is valid, only the rules that
exist can find the respective deprecation. Here is an overview about the
`existing rector rules <https://github.com/sabbelasichon/typo3-rector/blob/main/docs/all_rectors_overview.md>`__.
When a rule is missing you can't find the deprecation. Check `here <https://getrector.com/find-rule>`__ if your desired
rector rule exists already. When you feel able to create your own rector or fractor rule and want to publish it to the
TYPO3 community, everyone using these tools would be happy to profit from your effort.

..  _getting-started-logfile-rotations:

Log file rotations
==================


..  _getting-started-sys-log:

Sys log
=======

We have to take care of sys_log errors.

..  _getting-started-language-updates:

Language updates
================

After a TYPO3 update you have to update your translations. We refer to the article
:ref:`Update backend translations <t3coreapi:update_backend_translation>`. You have to update the language packs that
you are using.
