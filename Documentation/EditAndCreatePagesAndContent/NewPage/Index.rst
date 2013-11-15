.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt


.. _new-page:

New page
^^^^^^^^

.. figure:: ../../Images/manual_html_m529c065.png
   :alt: Edit a page in QuickEdit mode.

We already saw one way to create a new page when we created the
"External URL" page earlier. However, in TYPO3 there are multiple ways
to get things done. Here is another way to create a page:

.. figure:: ../../Images/manual_html_m789dfb94.png
   :alt: Several ways to create a new page.

If you click on the button in the docheader you will get the position
selector for your new page in the next step:

.. figure:: ../../Images/manual_html_bab1116.png
   :alt: Placing a new page after an existing.

Now create a new page "My Content Test" **after** (NOT **inside** )
the "Text And images" page and have a look at your website afterwards.
You will find the page in the menu next to the "Text and images" page.

.. figure:: ../../Images/manual_html_m325a3c24.png
   :alt: The page tree with the new page.

.. figure:: ../../Images/manual_html_m12e5e065.png
   :alt: Opening the new page in the frontend.

The page is still blank - we need to create some page content elements
on the page!

.. _creating-page-content-elements:

Creating page content elements
""""""""""""""""""""""""""""""

In the Page module, click the page title of "My Content Test" in the
page tree and then the icon with the content element and the little
green plus in the docheader "Create new content element":

.. figure:: ../../Images/manual_html_m30009599.png
   :alt: Create a new content element in the new page.

Immediately you will see a nice form like this (below). This allows
you to select a page content element type (1) - as said earlier,
different content element types create different kinds of content on
the web page - and the position (2) of the element. Let's create "Text
& Images":

.. figure:: ../../Images/manual_html_7465331a.png
   :alt: Choosing "Text & Images" for the new content element.

In the form which appears enter a headline (1) and some dummy content
(2) under the tab "General".

.. figure:: ../../Images/manual_html_43e335e4.png
   :alt: Adding headline and text inside the new content element.

After that select the tab "Media". Choose a dummy image from your hard
drive (1). Additionally you can enter a link for your image (2).

.. figure:: ../../Images/manual_html_m4ce92aed.png
   :alt: Choosing an image for the new content element.

Then select the tab "Appearance". If you chose a big image you can
change it's size with (1) [If this does not work for you, have a look
at the "troubleshooting" chapter]. Below you can set a position
relative to the text for your image (2).

.. figure:: ../../Images/manual_html_598e484.png
   :alt: Positioning the image.

Press the "Save document" button. Now the image is uploaded to the web
server and attached to the new page content element.

If everything went fine it now looks like this on the web page:

.. figure:: ../../Images/manual_html_3a20137b.png
   :alt: Take a look at the new page in the frontend.

.. _inserting-another-content-element:

Inserting another content element
"""""""""""""""""""""""""""""""""

Back in the Page module the new content element is clearly shown.
Let's create another content element. The little content element icons
with the plus in the header bar of the content columns let you create
content in that column. Use the icon at (3) the right column to add
content there.

.. figure:: ../../Images/manual_html_3cb30a87.png
   :alt: Several columns for the page content.

This time we choose to create a special element called "Sitemap".

.. figure:: ../../Images/manual_html_m18b54ff2.png
   :alt: Choosing a special element called "Sitemap"

The site map element allows you to insert all sorts of page link lists
(like a real site map, a menu of sub-pages...). We want to insert a
link list to some pages we select manually, so we chose "Menu of these
pages":

.. figure:: ../../Images/manual_html_m261ac5de.png
   :alt: Choosing menu type for the sitemap.

Select the pages you want to link to. There a two possible ways to do
this. Either press the little folder icon (1) and choose the pages
from the pop-up that appears then or use the auto-suggest search (2)
by typing the title of the page into the text field:

.. figure:: ../../Images/manual_html_2883abf4.png
   :alt: Searching pages for the sitemap.

Here we added some sub-pages of "About TYPO3":

.. figure:: ../../Images/manual_html_6e5d590c.png
   :alt: Determining pages for the sitemap.

Now the page has two content elements, a "Text & Images" type in the
normal column and a "Sitemap" type in the right column:

.. figure:: ../../Images/manual_html_298bfa04.png
   :alt: Checking sitemap in the frontend.

In the Page module this looks like this:

.. figure:: ../../Images/manual_html_b8cb356.png
   :alt: The Page modul after adding the sitemap.

.. _move-copy-pages:

Move / Copy pages
^^^^^^^^^^^^^^^^^

Moving pages is really easy. Just drag the page in the page tree to
its new position. A small line will be show to indicate the new
position.

.. figure:: ../../Images/manual_html_m61b4a69c.png
   :alt: Moving a page via drag'n'drop.

Move a page on a title to insert it into that page.

.. figure:: ../../Images/manual_html_ee1a7e5.png
   :alt: Turning page into a sub page via drag'n'drop.

You can copy pages in the same way by toggling your CTRL key just like
you can do on you desktop.

.. figure:: ../../Images/manual_html_m62460d4d.png
   :alt: Copying a page via drag'n'drop.

To switch back to move mode, just toggle CTRL again.

.. _cut-n-paste-copy-n-paste:

Cut'n'Paste & Copy'n'Paste
""""""""""""""""""""""""""

.. figure:: ../../Images/manual_html_mf6331f3.png
   :alt: Moving and copying pages via page actions.

You can also use Cut'n'Paste or Copy'n'Paste for moving or copying.
Select "Page Actions: Copy" from the context menu of the page you want
to copy:

And choose "Page Actions: Paste after" (or "Page Actions: Paste into"
depending on what you want) from the context menu of the destination
page:

.. figure:: ../../Images/manual_html_m6e76354f.png
   :alt: Pasting pages via page actions.

.. figure:: ../../Images/manual_html_6e95cd67.png
   :alt:

**Watch out - consistent concepts on board!**

Notice that the same principles of copy/cut'n'paste can be used with
not only pages but page content elements as well - well, in fact any
database element or file that TYPO3 manages is subject to this
functionality! This is a great example of how TYPO3 uses the same
concepts consistently and throughout the system - so once you have
learned a feature, a lot of other features make sense to you as well!
If you open your eyes to it you will have many of those "Aha!"
experiences when you see how things are designed to fit together.