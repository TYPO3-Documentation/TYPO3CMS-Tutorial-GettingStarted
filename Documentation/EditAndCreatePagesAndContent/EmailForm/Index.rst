.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. include:: ../../Includes.txt
.. include:: Images.txt


Email form
^^^^^^^^^^

We already have an email form on the website. If you go the the page
"Feedback" you will see a basic contact form:

.. figure:: ../../Images/manual_html_m5504d6f5.png
   :alt:

Navigate to the "Feedback" page in the backend and edit the form:

.. figure:: ../../Images/manual_html_m3ba2e149.png
   :alt:

.. figure:: ../../Images/manual_html_24aeb2b3.png
   :alt:

In the field "Form Structure" the form is defined:

.. figure:: ../../Images/manual_html_m1e55417a.png
   :alt:

At the "Target Page" field on tab "Behavior" you can define where the
user gets redirected after he sends the form:

.. figure:: ../../Images/manual_html_773cc609.png
   :alt:

If you leave this blank he won't be redirected. Normally you'd enter
some kind of "Thank you" page.

Let's take a closer look at the form structure. You already know the
pipe (\|) as separator from the tables content element. It is used
here in this mail form to define the form fields. Every line
represents one field of the form. Click on the wizard icon on the
right side of the field:

.. figure:: ../../Images/manual_html_m44c2ac7c.png
   :alt:

As you can see the codes are transformed into this nice form.

.. figure:: ../../Images/manual_html_m51c641e8.png
   :alt:

Here each field in the form is created by visual controls. For a field
you need to enter a label of course (1) and a field type (2). These
are the visible parts. You also have to give the field an internal
name (3) which is the one that will be shown in the email the
recipient gets. In the case of "Input field" types you can also enter
a default value (4).

For all email forms there are three common values to be set: The name
of the send button (5), the subject line of the email being sent (6)
and finally the email address of the person that should receive the
email (7). This person is normally you! Or whoever on your team who is
supposed to respond to feedback.

Media
"""""

The Media element is not yet used in the introduction package. But you
may be interested to show an Video on your website. Upload your video
into the fileadmin. Now create an new content element of type "media".

.. figure:: ../../Images/manual_html_m11c0ef87.png
   :alt:

Select the "Media" tab and select your video, set if needed some
additional parameters and add the alternative content on tab
"Behavior" for those, who are not able to see your video.

.. figure:: ../../Images/manual_html_m179abd63.png
   :alt:

Save your content element and watch your video on your website.

.. figure:: ../../Images/manual_html_m497ca4db.png
   :alt: