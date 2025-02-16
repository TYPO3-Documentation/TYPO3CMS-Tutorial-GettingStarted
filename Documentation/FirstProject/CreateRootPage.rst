:navigation-title: Root page
..  include:: /Includes.rst.txt

.. index:: site, domain configuration, languages

.. _create-root-page:

=========================
How to create a root page
=========================

In TYPO3, the root page is the starting point for any website.
It serves as the top-level page in the page tree and is essential for
configuring the site and making it available to users. In this tutorial,
you will learn how to create a root page in TYPO3 v13.

..  note::
    *   You have TYPO3 :ref:`installed <t3start:installation-ddev-tutorial>`
        and can log into the backend.
    *   You have access to the Page module and permission to create pages.
    *   You are familiar with the basic layout of the TYPO3 backend.

..  rst-class:: bignums-xxl
#.  Access the Page module

    Once you log into the TYPO3 backend, locate the :guilabel:`Web > Page` module on the left-hand
    side of the screen. Click on the Page module to open the page tree.

    .. figure:: /Images/ManualScreenshots/CreateRootPage/PageModule.png

#.  Create a new root page

    *   In the page tree, right-click on the "root level" or the top node of the page
        tree (if no pages exist yet, this will likely be labeled as "site" or similar).
        A context menu will appear.

    *   From the context menu, select "New". This will open a form for creating a new
        page.

    .. figure:: /Images/ManualScreenshots/CreateRootPage/CreateNewPage.png

    *   Alternatively, you can select a new page from the menu above the
        page tree using drag & drop and place it in the page tree.

    .. figure:: /Images/ManualScreenshots/CreateRootPage/PageMenu.png


#.  Set the page type to root

    Now, you need to configure the new page:

    *   In the form that appears, give your new page a name.
        This will be the label of your root page in the page tree.

    *   Under the :guilabel:`Behaviour` tab, look for the checkbox called
        "Use as Root Page". Ensure this is checked.

    .. figure:: /Images/ManualScreenshots/CreateRootPage/SetRootPage.png

#.  Save the page

    Once you have filled in the necessary information and selected the
    "Use as Root Page" option, click the Save button at the top of the form.
    Your new root page will now appear in the page tree on the left.

    ..  note::
    By default, a newly created page is disabled. You need to enable it to
    make the page publicly visible.
