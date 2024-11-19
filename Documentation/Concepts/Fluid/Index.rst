..  include:: /Includes.rst.txt
..  highlight:: html

..  _fluid-templates:

===============
Fluid templates
===============

..  _quick-introduction-to-fluid:

Quick Introduction to Fluid
===========================

TYPO3 uses a template engine to generate the necessary HTML
markup for a website. The template engine provides data from
the backend, such as content or menu structures, which can
then be formatted with HTML.

TYPO3's template engine of choice is called Fluid. Fluid's
syntax is inspired by the syntax of HTML or XML documents,
so it should already be familiar for users that already know
HTML.

While Fluid is extendable by PHP developers, knowing any
PHP is not necessary to write templates for TYPO3. However,
Fluid comes with its own syntax rules, which need to be
obeyed when writing templates.

..  _fluid-basics:

Fluid Basics
============

Accessing Variables
-------------------

An integral part of Fluid are variables. This is the data
that is provided by the backend to be used inside your
template. You can access variables like this:

..  code-block:: xml

    <h1>{myHeadline}</h1>


If a variable contains subitems, these can be accessed
with the dot syntax:

..  code-block:: xml

    <p>{myVariable.mySubItem}</p>

Modifying Variables
-------------------

You can also do some basic math operations:

..  code-block:: xml

    {myNumber + 5}


If you need to modify the provided data even more, you
can use so-called ViewHelpers. These are functions that
take some input values, perform operations on those
values and then output the result. The following example
converts a variable to uppercase:

..  code-block:: xml

    <f:format.case mode="upper">{myText}</f:format.case>

If you want to perform multiple operations on one variable
or if your templates become more complex, you might also
want to use :ref:`Fluid's inline notation <t3coreapi:fluid-inline-notation>`.

Using Control Structures
------------------------

ViewHelpers are also used for so-called control structures.
If you want to add a condition to your template, you can
use the :ref:`If ViewHelper <f:if> <t3viewhelper:typo3fluid-fluid-if>`:

..  code-block:: xml

    <f:if condition="{myVariable} == 'hello'">
        The variable is "hello".
    </f:if>

You can also use the :ref:`For ViewHelper <f:for> <t3viewhelper:typo3fluid-fluid-for>` to loop over an
array:

..  code-block:: xml

    <ul>
        <f:for each="{myList}" as="myItem">
            <li>This item is {myItem}.</li>
        </f:for>
    </ul>


..  _ft-directory-structure:

Directory structure
===================

Nowadays, Fluid templates in TYPO3 are always part of an
extension. As they are neither PHP code nor configuration files
and don't need to be accessed by end users, they are placed in the
`Resources/Private/` subfolder.

..  directory-tree::
    :level: 6
    :show-file-icons: true

    *   my_sitepackage

        *   Resources

            *   Private

                *   Templates

                    *   Layouts

                        * DefaultLayout.html

                    *   Pages

                        * MyPage.html

                    *   Partials

                        * MyPartial.html


The displayed folder structure is the convention for the location
of template files in a sitepackage extension.
However, be aware that these paths might vary slightly between
projects or extensions as they can be configured individually.

..  _fluid-templates-folders-under-private:

Templates, Layouts and Partials
-------------------------------

..  uml::
    :caption: Fluid template structure

    frame layout as "Templates/Layouts/DefaultLayout.html" {
        frame page as "Templates/Pages/MyPage.html" {
            rectangle partial [
                <b>Templates/Partials/MyPartial.html</b>
                (reusable code snippet)
            ]
        }
    }


Fluid knows three different types of template files: **Templates**,
**Layouts** and **Partials**. Templates are always the starting point
and thus are always required, while both Partials and Layouts are optional.
However, these can be very helpful to improve the structure of
your templates and can avoid duplicate code, which makes
maintenance much easier.

**Layouts** are a flexible method to reuse HTML markup that should wrap
around multiple template files. You could for example extract your
header and footer markup to a layout file and only keep the content
in-between in your template. Layouts automatically have access to all
variables defined within the template.

**Partials** are an easy way to abstract and reuse code snippets in
your templates. They don't have access to all template variables, instead
the required variables need to be provided to the partial when it is used.

..  _fluid-in-depth:

Fluid in depth
==============

..  card-grid::
    :columns: 1
    :columns-md: 2
    :gap: 4
    :class: pb-4
    :card-height: 100

    ..  card:: :doc:`ViewHelper reference <t3viewhelper:Index>`

        *   Official reference
        *   Complete list of available ViewHelpers
        *   In depth information on ViewHelper

    ..  card:: :ref:`Introduction to Fluid <t3coreapi:fluid-introduction>`

        *   Official reference
        *   Complete list of available ViewHelpers
        *   In depth information on ViewHelper
