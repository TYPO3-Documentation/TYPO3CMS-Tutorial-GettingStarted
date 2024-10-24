:navigation-title: Backend
..  include:: /Includes.rst.txt

..  _backend:

=======
Backend
=======

TYPO3 has two parts: the backend and the frontend.

.. figure:: /Images/Illustrations/backend_frontend.png

The backend is the administrative side of the CMS. It is only accessible to
users who have been granted the correct access. The frontend is what the visitor
sees when browsing the site.

Backend
=======

.. figure:: /Images/Illustrations/backend.png

The backend is where users create and publish content for their site. It is also
where TYPO3 installations are configured. This includes setting domains and
languages, adding backend users and managing third-party extensions.


Accessing The Backend
---------------------

The backend is accessed via the url (insert your domain) :samp:`example.org/typo3`.

.. figure:: /Images/Illustrations/backend_login.png

When a user logs into the backend they see the dashboard (by default).


Backend Modules
---------------

.. container:: row

   .. container:: col-md-4

        .. figure:: /Images/Illustrations/backend_module.png

   .. container:: col-md-8

      The backend contains modules that are grouped by task. Which modules a
      user sees depends on the access rights that have been given to them.

      -  The :guilabel:`Web` group contains a set of modules for the creation and
         management of pages and content.

      -  :guilabel:`Site Management` is for the setup of a site. Here it is possible to
         specify the site name, assign domains and select languages.

      -  :guilabel:`Filelist` is for viewing and managing files including
         documents, images and videos.

      -  :guilabel:`Admin Tools` are administrative modules for maintenance and performing
         upgrades. One module is the Extension manager for enabling/disabling
         third-party extensions.

      -  :guilabel:`System` is where administrators control access to the backend, view
         error logs and provide information specific to the installation.
