:navigation-title: Error pages

..  include:: /Includes.rst.txt

..  _troubleshooting-error-page:

======================================
Reading and sharing a TYPO3 error page
======================================

When TYPO3 runs into an error it cannot handle, it replaces the page or the
backend module with an error page. Which error page you get depends on
the configuration:

*   On your :ref:`local development installation <development-settings>`, you
    see the detailed error page described below.
*   On a production server, visitors see a short page titled
    **Oops, an error occurred!** without any details, so that they learn
    nothing about the inner workings of the site. The details are written to
    the log, which you can read in the backend module
    :guilabel:`Administration > Log`.

The option
:confval:`displayErrors <t3coreapi:globals-typo3-conf-vars-sys-displayerrors>`
decides between the two pages. With its default value, only requests from an
IP address listed in
:confval:`devIPmask <t3coreapi:globals-typo3-conf-vars-sys-devipmask>` get
the detailed one.

..  _troubleshooting-error-page-details:

The detailed error page
=======================

..  versionadded:: 14.2
    :changelog: feature-106153-1770150965

The detailed error page shows the error message and its stack trace: the
chain of PHP files and lines that led to the error. It is what you need when
you ask for help, in a bug report or in a support channel. Send it as text
rather than as a screenshot, which usually cuts the trace off.

..  figure:: /Images/ManualScreenshots/ErrorHandling/exception-header-copy-path.png
    :alt: Error page with the heading "Whoops, looks like something went
        wrong.", the buttons Toggle details and Copy plaintext stack trace in
        its header, and a Copy path button beside the first file of the trace
    :zoom: lightbox

    The header and the first trace entry of the detailed error page

The page offers three buttons:

:guilabel:`Toggle details`
    Hides the file contents of every trace entry and brings them back, which
    turns the trace into a short overview.

:guilabel:`Copy plaintext stack trace`
    Copies the whole trace as text, without the file contents. This is the
    text to paste into a bug report or a request for help.

:guilabel:`Copy path`
    Sits beside every file in the trace and copies that file and its line as
    `path/to/File.php:42`, without the path of your project in front, so that
    you can paste it into your editor or IDE to open the file.

Before you pass the copied trace on, read through it and remove anything
sensitive, such as passwords, keys or personal data. The page reminds you of
this at the end of the trace.

..  note::
    Copying to the clipboard needs a secure connection. If your site runs on
    `http://` instead of `https://`, a browser such as Firefox refuses to
    copy, and the buttons report that they could not copy.
    :guilabel:`Copy plaintext stack trace` then writes the text into a box on
    the page, already selected, so that you can copy it by hand.

If the exception has a code, the box **Get help in the TYPO3 Documentation**
links to the page about that code in the
:ref:`TYPO3 exceptions reference <t3exceptions:start>`, where the community
collects solutions.
