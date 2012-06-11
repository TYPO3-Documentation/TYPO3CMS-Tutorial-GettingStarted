.. include:: Images.txt

.. ==================================================
.. FOR YOUR INFORMATION
.. --------------------------------------------------
.. -*- coding: utf-8 -*- with BOM.

.. ==================================================
.. DEFINE SOME TEXTROLES
.. --------------------------------------------------
.. role::   underline
.. role::   typoscript(code)
.. role::   ts(typoscript)
   :class:  typoscript
.. role::   php(code)


The Object Browser
^^^^^^^^^^^^^^^^^^

There is one other tool you should know when working with TypoScript.
It is called the "Object Browser". Change the select box on top of the
template module to "TypoScript Object Browser":

|img-130|

The object browser shows you the TypoScript configuration of your
website as an object tree, for example on the image above you can see
how the command "page.10.includeCSS.10 = fileadmin..." is transformed
into a tree structure. You can click the properties in the template to
change them directly. Any changes are written to the current template
(Which template is the current template? Look at the header of the
Object Browser!)

