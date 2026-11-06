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

We tested these steps with TYPO3 v14.3 in Claude Code, and in cursor-agent,
the command-line tool of Cursor, with Grok 4.7.

..  contents:: Table of contents
    :local:

..  _ai-support-install-typo3:

Install TYPO3
=============

If you already have a local TYPO3 project, continue with
`Connect the TYPO3 Dev Companion
<https://docs.typo3.org/permalink/t3start:ai-support-connect>`_.

#.  Create an empty directory, and start your AI client in it.
#.  Enter one of these prompts. Without a theme, you start with an empty site
    for your own site package:

    ..  code-block:: text

        Install and set up TYPO3 v14 without a theme in this directory with
        DDEV and Composer.

    With the example theme, you get a demo site with pages and content:

    ..  code-block:: text

        Install and set up TYPO3 v14 with the example theme in this directory
        with DDEV and Composer.

#.  Read each command before you approve it. This takes a few minutes.
#.  Run :bash:`ddev launch /typo3`, and log in with the admin password that
    your AI client shows you.
#.  Change this password: click your user name at the top right, and select
    :guilabel:`User Settings`. Your AI client chose the password, so your
    provider received it.

    ..  warning::

        TYPO3 also uses this password for the install tool. Run this command
        in a terminal, not in your AI client, and enter a new password:

        ..  code-block:: bash

            ddev typo3 install:password:set

        Do not leave the password empty. The command then prints a generated
        password on the screen.

        Change both passwords before you commit or deploy
        :file:`config/system/settings.php`. The file contains the hash of the
        install tool password. If you deploy it unchanged, your live site
        accepts the password that your provider received.

#.  Create a Git repository, so that you can see and undo each change of your
    AI client:

    ..  code-block:: bash

        git init
        git add -A
        git commit -m "Install TYPO3"

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

The setup works if your AI client answers `actions-delete`. Then ask it:

..  code-block:: text

    Which tools did you call?

The answer must name `typo3_icon_lookup`. If it names no tool, the answer comes
from the language model, and the server is not connected. See
`If your AI client does not connect
<https://docs.typo3.org/permalink/t3start:ai-support-troubleshooting>`_.

To do these steps yourself, run the following commands, and then close your AI
client. Replace `<client>` with the name of your AI client, for example
`claude` or `cursor`:

..  code-block:: bash

    ddev composer require --dev "typo3/dev-companion:@dev"
    ddev exec vendor/bin/typo3-dev-companion install --agent=<client>

To list the names, run
:bash:`ddev exec vendor/bin/typo3-dev-companion install --help`.

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

Different AI clients can recommend different solutions. In our tests, one
recommended :composer:`tpwd/ke_search`, and the other
:composer:`typo3/cms-indexed-search`. Compare the reasons, and decide yourself.

When you have decided, describe the result that you want. You do not have to
name a tool. For example:

..  code-block:: text

    Create a site package with the extension key my_sitepackage in this
    project. Add a Fluid page template with a header and a footer. Activate it
    for the site, and check that the frontend still works.

Your AI client may ask about the design first, such as colors, fonts, and a
logo. Answer the questions, or reply "use the defaults". If your site uses the
example theme, the site package replaces it. The content elements of the theme
then no longer show.

..  code-block:: text

    Add a custom content element with a headline, a text, and an image to my
    site package.

..  code-block:: text

    The page /faqs shows an error. Find the cause and explain it to me before
    you change anything.

We tested the site package prompt and the question about the search engine.
For the best results, follow these rules:

*   **Use exact names.** Write `sys_file_reference`, not "the table with the
    image relations". The server finds a name, not a description.
*   **Check the result in the browser.** In our tests, the templates of a
    theme hid the new site package, or the new site package hid the content of
    the theme.
*   **Use DDEV for every command.** If your AI client runs `composer` or `php`
    directly, refuse, and tell it to use :bash:`ddev composer` or
    :bash:`ddev exec`.
*   **Ask which tools it called.** An answer without a tool call comes from the
    language model.
*   **Commit to Git before each task.** You can then see and undo each change:
    :bash:`git add -A && git commit -m "Before the task"`.

..  _ai-support-data:

Protect your data
=================

Your AI client can run commands. Refuse commands that delete the database or
its tables, such as `DROP DATABASE`, unless you asked for exactly this result.
In our tests, two AI clients deleted the database to repeat a setup.

Your AI client may read your name and email address from your Git
configuration. In our tests, AI clients wrote them into a :file:`composer.json`
file, and sent a company name to an outside service. Tell your AI client which
names to use, or refuse the command.

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

You use another AI client
    See the list of AI clients in the
    `manual of the TYPO3 Dev Companion
    <https://typo3.github.io/dev-companion/>`__.
    We tested these steps only in Claude Code and in cursor-agent.

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
