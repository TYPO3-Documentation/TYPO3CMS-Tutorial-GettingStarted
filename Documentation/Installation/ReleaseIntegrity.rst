.. include:: /Includes.rst.txt

.. _release_integrity:

=======================
TYPO3 Release Integrity
=======================

TYPO3 Release Packages (the downloadable tarballs and zip files) as well as
Git tags are signed using PGP signatures during the automated release process.
SHA2-256, SHA1 and MD5 hashes are also generated for these files.

Release contents
----------------

Every release of TYPO3 is made available with the following files:

.. code-block:: bash
   :caption: `TYPO3 CMS 11.5.1 <https://get.typo3.org/version/11#accordion-heading-zip>`_ release as an example

   typo3_src-11.5.1.tar.gz
   typo3_src-11.5.1.tar.gz.sig
   typo3_src-11.5.1.zip
   typo3_src-11.5.1.zip.sig

* ``*.tar.gz`` and ``*.zip`` files are the actual release packages, containing
  the source code of TYPO3 CMS
* ``*.sig`` files contain the corresponding signatures for each release package file

Checking file hashes
--------------------

File hashes are used to check that a downloaded file was transferred and stored
correctly on the local system. TYPO3 uses cryptographic hash methods including `MD5`_
and `SHA2-256`_.

The file hashes for each version are published on get.typo3.org and can be found
on the corresponding release page, for example https://get.typo3.org/version/11#package-checksums contains:

.. code-block:: bash
   :caption: TYPO3 11.5.1 Checksums
   :name: Checksums

   SHA256:
   205d1879e05c75093a2c427f7f7cacb297ca841e491450b3577987e259ff6c5b typo3_src-11.5.1.tar.gz
   e07b303405d182f4450fda4a7a7acdbe5080c22123d52f74ef5f2fbf78233a49 typo3_src-11.5.1.zip

   SHA1:
   aa88171cfb5aa9935b2a989f51e68b6d8eb6e5f0 typo3_src-11.5.1.tar.gz
   3dbe9322015e1d5266d78c6c3ff40846f8a6492f typo3_src-11.5.1.zip

   MD5:
   cda2a4494f6673e9251c265c9ef1c345 typo3_src-11.5.1.tar.gz
   252583501d30bb5679305b58ed6e6f94 typo3_src-11.5.1.zip


To verify file hashes, the hashes need to be generated locally for the packages
downloaded and then compared to the published hashes on get.typo3.org.
To generate the hashes locally, one of the following command-line tools ``md5sum``, ``sha1sum`` or ``shasum`` needs to be used.

The following commands generate hashes for the `.tar.gz` and `.zip` packages:

.. code-block:: bash
   :caption: ~$

   shasum -a 256 typo3_src-*.tar.gz typo3_src-*.zip
   205d1879e05c75093a2c427f7f7cacb297ca841e491450b3577987e259ff6c5b typo3_src-11.5.1.tar.gz
   e07b303405d182f4450fda4a7a7acdbe5080c22123d52f74ef5f2fbf78233a49 typo3_src-11.5.1.zip

.. code-block:: bash
   :caption: ~$

   sha1sum -c typo3_src-*.tar.gz typo3_src-*.zip
   aa88171cfb5aa9935b2a989f51e68b6d8eb6e5f0 typo3_src-11.5.1.tar.gz
   3dbe9322015e1d5266d78c6c3ff40846f8a6492f typo3_src-11.5.1.zip

.. code-block:: bash
   :caption: ~$

   md5sum typo3_src-*.tar.gz typo3_src-*.zip
   cda2a4494f6673e9251c265c9ef1c345 typo3_src-11.5.1.tar.gz
   252583501d30bb5679305b58ed6e6f94 typo3_src-11.5.1.zip

These hashes must match the hashes published on get.typo3.org to ensure package integrity.

.. _MD5: https://en.wikipedia.org/wiki/MD5
.. _SHA2-256: https://en.wikipedia.org/wiki/SHA-2


Checking file signatures
------------------------

TYPO3 uses `Pretty Good Privacy`_ to sign release packages and Git release tags.
To validate these signatures `The GNU Privacy Guard`_ is recommend, however
any `OpenPGP`_ compliant tool can also be used.

The release packages are using a detached binary signature. This means that
the file ``typo3_src-11.5.1.tar.gz`` has an additional signature file
``typo3_src-11.5.1.tar.gz.sig`` which is the detached signature.

.. code-block:: bash
   :caption: ~$

   gpg --verify typo3_src-11.5.1.tar.gz.sig typo3_src-11.5.1.tar.gz

.. code-block:: none

   gpg: Signature made Tue Oct 12 12:20:19 2021 UTC
   gpg:                using RSA key E7ED29A70309A0D1AE34DA733304BBDBFA9613D1
   gpg: Can't check signature: No public key

The warning means that the public key ``E7ED29A70309A0D1AE34DA733304BBDBFA9613D1`` is not yet available on the
local system and cannot be used to validate the signature. The public key can be
obtained by any key server - a popular one is `pgpkeys.mit.edu`_.

.. code-block:: bash
   :caption: ~$

   wget -qO- https://get.typo3.org/KEYS | gpg --import

.. code-block:: none

   gpg: requesting key 59BC94C4 from hkp server pgpkeys.mit.edu
   gpg: key 59BC94C4: public key "TYPO3 Release Team (RELEASE) <typo3cms@typo3.org>" imported
   gpg: key FA9613D1: public key "Benjamin Mack <benni@typo3.org>" imported
   gpg: key 16490937: public key "Oliver Hader <oliver@typo3.org>" imported
   gpg: no ultimately trusted keys found
   gpg: Total number processed: 3
   gpg:               imported: 3  (RSA: 3)

Once the public key has been imported, the previous command on verifying the
signature of the ``typo3_src-11.5.1.tar.gz`` file can be repeated.

.. code-block:: bash
   :caption: ~$

   gpg --verify typo3_src-11.5.1.tar.gz.sig typo3_src-11.5.1.tar.gz

.. code-block:: none

   gpg: Signature made Tue Oct 12 12:20:19 2021 UTC
   gpg:                using RSA key E7ED29A70309A0D1AE34DA733304BBDBFA9613D1
   gpg: Good signature from "Benjamin Mack <benni@typo3.org>" [unknown]
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: E7ED 29A7 0309 A0D1 AE34  DA73 3304 BBDB FA96 13D1

The new warning is expected since everybody could have created the public key
and uploaded it to the key server. The important point here is to validate the key
fingerprint ``E7ED 29A7 0309 A0D1 AE34  DA73 3304 BBDB FA96 13D1`` which is in
this case the correct one for TYPO3 CMS release packages (see below for a list
of currently used keys or access the https://get.typo3.org/KEYS file directly).

.. code-block:: bash
   :caption: ~$

   gpg --fingerprint E7ED29A70309A0D1AE34DA733304BBDBFA9613D1

.. code-block:: none

   pub   rsa4096 2010-06-22 [SC]
         E7ED 29A7 0309 A0D1 AE34  DA73 3304 BBDB FA96 13D1
   uid                  [ unknown] Benjamin Mack <benni@typo3.org>
   sub   rsa4096 2010-06-22 [E]

.. _Pretty Good Privacy: https://en.wikipedia.org/wiki/Pretty_Good_Privacy
.. _The GNU Privacy Guard: http://www.gnupg.org/
.. _OpenPGP: http://www.openpgp.org/
.. _pgpkeys.mit.edu: https://pgpkeys.mit.edu/


Checking tag signature
----------------------

Checking signatures on Git tags works similar to verifying the results using the
``gpg`` tool, but with using the ``git tag --verify`` command directly.

.. code-block:: bash
   :caption: ~$

   git tag --verify v11.5.1


.. code-block:: none

   object dcba2a7ce93eaef0ad025dc21fdeb85636d7b4f4
   type commit
   tag v11.5.1
   tagger Benni Mack <benni@typo3.org> 1634041135 +0200

   Release of TYPO3 11.5.1
   gpg: Signature made Tue Oct 12 14:18:55 2021 CEST
   gpg: using RSA key E7ED29A70309A0D1AE34DA733304BBDBFA9613D1
   gpg: Good signature from "Benjamin Mack <benni@typo3.org>"

The ``git show`` command on the name of the tag reveals more details.

.. code-block:: bash
   :caption: ~$

   git show v11.5.1

.. code-block:: none

   tag v11.5.1
   Tagger: Benni Mack <benni@typo3.org>
   Date:   Tue Oct 12 14:17:52 2021 +0200

   Release of TYPO3 11.5.1
   -----BEGIN PGP SIGNATURE-----
   ...
   -----END PGP SIGNATURE-----



Public Keys
-----------

.. note::

   Starting in June 2017, TYPO3 releases have been cryptographically signed by the
   ``TYPO3 Release Team <typo3cms@typo3.org>`` with a dedicated public key.
   Since July 2017 releases are signed by individual members of the TYPO3
   Release Team directly, namely ``Benni Mack <benni@typo3.org>`` and
   ``Oliver Hader <oliver@typo3.org>``.

You can download the used public keys from `get.typo3.org.keys`_

* TYPO3 Release Team <typo3cms@typo3.org>

   + 4096 bit RSA key
   + Key ID `0x9B9CB92E59BC94C4`_
   + Fingerprint ``7AF5 1AAA DED9 D002 4F89  B06B 9B9C B92E 59BC 94C4``

* Benni Mack <benni@typo3.org>

   + 4096 bit RSA key
   + Key ID `0x3304BBDBFA9613D1`_
   + Fingerprint ``E7ED 29A7 0309 A0D1 AE34  DA73 3304 BBDB FA96 13D1``

* Oliver Hader <oliver@typo3.org>

   + 4096 bit RSA key
   + Key ID `0xC19FAFD699012A5A`_, subkey of `0xA36E4D1F16490937`_
   + Fingerprint ``0C4E 4936 2CFA CA0B BFCE  5D16 A36E 4D1F 1649 0937``

...............................

.. _0x9B9CB92E59BC94C4: https://pgpkeys.mit.edu/pks/lookup?search=0x9B9CB92E59BC94C4
.. _0x3304BBDBFA9613D1: https://pgpkeys.mit.edu/pks/lookup?search=0x3304BBDBFA9613D1
.. _0xC19FAFD699012A5A: https://pgpkeys.mit.edu/pks/lookup?search=0xC19FAFD699012A5A
.. _0xA36E4D1F16490937: https://pgpkeys.mit.edu/pks/lookup?search=0xA36E4D1F16490937
.. _get.typo3.org.keys: https://get.typo3.org/KEYS
