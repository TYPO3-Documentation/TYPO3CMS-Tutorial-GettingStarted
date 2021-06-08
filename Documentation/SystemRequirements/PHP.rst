.. include:: ../Includes.txt


.. _php:

PHP
===

Configure
---------

The following settings need to be set in the installations :file:`php.ini`

* `memory_limit` set to a minimum of 256MB

* `max_execution_time` set to a minimum 240 seconds

* `max_input_vars` set to a minimum 1500

The following settings control the maximum upload filesize:

* `post_max_size` set to 10M to allow uploads of 10MB

* `upload_max_filesize` set to 10M to allow uploads of 10MB


Required Extensions
-------------------

* **pdo**
* **json**
* **pcre >= 8.38**
* **session**
* **xml**
* **filter**
* **hash**
* **SPL**
* **standard**
* **mbstring**

Depending on the use case, the following extensions may also be required:

* **fileinfo** (used to detect file extensions of uploaded files)
* **gd** (GDlib/Freetype is required for building images with text (GIFBUILDER) and is also be used to scale images)
* **zip** (TYPO3 uses zip to extract language archives as well as extracting and archiving extensions)
* **zlib** (TYPO3 uses zlib for output compression)
* **openssl** (OpenSSL is required for sending SMTP mails over an encrypted channel endpoint)
* **intl** (when using unicode-based filesystems)

Required Database Extensions
----------------------------

.. tabs::

   .. tab:: MySQL

      * pdo_mysql (recommended)
      * OR mysqli
      The InnoDB engine is required for MySQL and Maria DB instances.

   .. tab:: Postgres

      * pdo_pgsql
      * postgresql

   .. tab:: SQLServer

     * pdo_sqlsrv
     * sqlsrv

   .. tab:: SQLite

     * sqlite
