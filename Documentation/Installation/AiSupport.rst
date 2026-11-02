:navigation-title: AI support

..  include:: /Includes.rst.txt
..  _ai-support:

============================
Set up TYPO3 with AI support
============================

Let your AI client install TYPO3, and connect it to the
`TYPO3 Dev Companion <https://typo3.github.io/dev-companion/>`__. With this
server, your AI client looks up TYPO3 facts for your version and does not rely
on the memory of its language model.

..  warning::

    :composer:`typo3/dev-companion` is experimental and has no tagged release
    yet. Its tools and answers can change.

You need the following:

*   `Docker and DDEV <https://docs.typo3.org/permalink/t3start:ddev>`_. You do
    not need PHP or Composer on your computer.
*   An AI client that can use MCP servers, such as Claude Code, Cursor, or
    GitHub Copilot.

We tested these steps with Claude Code, a small language model, and TYPO3
v14.3.

..  contents:: Table of contents
    :local:

..  _ai-support-install-typo3:

Install TYPO3
=============

If you already have a local TYPO3 project, continue with
`Connect the TYPO3 Dev Companion
<https://docs.typo3.org/permalink/t3start:ai-support-connect>`_.

#.  Create an empty directory, and start your AI client in it.
#.  Enter this prompt:

    ..  code-block:: text

        Install and set up TYPO3 v14 in this directory with DDEV and Composer.

#.  Read each command before you approve it. This takes about three minutes.
#.  Run :bash:`ddev launch /typo3`, and log in with the admin password that
    your AI client shows you.
#.  Change this password in the module :guilabel:`User Settings`. Your AI
    client chose it, so your provider received it.

To do these steps yourself, see
`Installing TYPO3 with DDEV
<https://docs.typo3.org/permalink/t3start:install>`_.

..  _ai-support-connect:

Connect the TYPO3 Dev Companion
===============================

#.  Enter this prompt:

    ..  code-block:: text

        Install https://github.com/TYPO3/dev-companion as a development
        dependency in this DDEV project, and configure it so that my AI client
        can use it.

    Keep the last part of the prompt. Without it, our test installed the
    package and stopped before it configured the AI client.

#.  Close your AI client. It reads the new configuration only when it starts.
#.  Run :bash:`ddev start`.
#.  Start your AI client in the same directory.
#.  Approve the server `typo3-dev-companion` when your AI client asks you.
#.  Enter this question:

    ..  code-block:: text

        Which icon identifier is the right one for a delete button in the
        TYPO3 backend?

The setup works if your AI client shows a call of the tool `typo3_icon_lookup`
and answers `actions-delete`. Without a tool call, the answer comes from the
language model, and the server is not connected. See
`If your AI client does not connect
<https://docs.typo3.org/permalink/t3start:ai-support-troubleshooting>`_.

To do these steps yourself, run the following commands, and then close your AI
client:

..  code-block:: bash

    ddev composer require --dev "typo3/dev-companion:@dev"
    ddev exec vendor/bin/typo3-dev-companion install

..  _ai-support-ask:

Ask first, then give a task
===========================

Ask questions before you give a task. A command gets you the solution that the
AI client chose. A question gets you the options and the reasons, so that you
can decide yourself. For example:

..  code-block:: text

    Which search engine do you suggest for the search on my TYPO3 site, and
    why? Which alternatives did you consider?

..  code-block:: text

    Should I store team members as content elements or as records? What are
    the advantages and disadvantages of each one for my project?

..  code-block:: text

    Which changes do I have to make to upgrade my extension to the next
    TYPO3 version?

When you have decided, describe the result that you want. You do not have to
name a tool. For example:

..  code-block:: text

    Create a site package with the extension key my_sitepackage in this
    project. Add a Fluid page template with a header and a footer. Activate it
    for the site, and check that the frontend still works.

..  code-block:: text

    Add a custom content element with a headline, a text, and an image to my
    site package.

..  code-block:: text

    The page /faqs shows an error. Find the cause and explain it to me before
    you change anything.

We tested only the site package prompt. For the best results, follow these
rules:

*   **Use exact names.** Write `sys_file_reference`, not "the table with the
    image relations". The server finds a name, not a description.
*   **Check the result in the browser.** In our test, the AI client activated
    the site package correctly, but the website looked the same. The templates
    of an installed theme still had priority.
*   **Ask which tools it called.** An answer without a tool call comes from the
    language model.
*   **Commit to Git before each task.** You can then see and undo each change.

..  _ai-support-data:

Protect your data
=================

Your AI client can run commands. Refuse commands that delete database tables,
unless you asked for exactly this result. In our test, an AI client deleted all
tables to repeat a failed setup.

Keep customer data, passwords, and API keys away from your AI client. Most AI
clients send your prompts and the files that they read to a remote language
model. Read the terms of your provider.

The TYPO3 Dev Companion is for development only. It does not write into your
TYPO3 installation. Use :bash:`composer install --no-dev` when you
`deploy your project <https://docs.typo3.org/permalink/t3start:deployment>`_.

..  _ai-support-troubleshooting:

If your AI client does not connect
==================================

Your AI client reports a timeout, or does not list the server
    The DDEV project is probably stopped. The server does not answer while it
    starts. Run :bash:`ddev start`, and then restart your AI client. Do this
    each time, also on the next day.

You refused the server in Claude Code
    Run :bash:`claude mcp reset-project-choices`, and then restart Claude Code.

You use another AI client
    See the list of AI clients in the
    `manual of the TYPO3 Dev Companion
    <https://typo3.github.io/dev-companion/>`__.
    We did not test these AI clients.

Report other problems in the
`issue tracker of the project
<https://github.com/TYPO3/dev-companion/issues>`__.

..  _ai-support-update:

Update the TYPO3 Dev Companion
==============================

The package changes often. To update it, run these commands, and then restart
your AI client:

..  code-block:: bash

    ddev composer update typo3/dev-companion
    ddev exec vendor/bin/typo3-dev-companion update

..  _ai-support-more:

Read more
=========

*   `Announcement of the TYPO3 Dev Companion
    <https://news.typo3.com/article/meet-the-typo3-dev-companion-typo3-knowledge-for-your-coding-agent>`__
*   Other MCP servers with another purpose, which we did not test:
    :composer:`hn/typo3-mcp-server` and :composer:`in2code/in2mcp`. They work
    with the content of a TYPO3 installation.
