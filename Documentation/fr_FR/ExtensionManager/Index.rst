
.. include:: ../Includes.txt


.. _extension-manager:
.. _a-short-glimpse-into-the-extension-manager:

Le gestionnaire d'extension
---------------------------

TYPO3 CMS possède de nombreuses fonctionnalités intégrées
mais encore plus de fonctionnalités sont disponibles via des extensions.
En fait, TYPO3 CMS lui-même est fait d'extensions.
Avec les extensions publiques, vous pouvez améliorer les fonctionnalités
existantes ou en ajouter de totalement nouvelles.

Le *gestionnaire d'extension* est l'endroit où vous pouvez gérer
les extensions disponibles ou obtenir de nouvelles du répertoire d'extension TYPO3
(TER : TYPO3 Extension Repository).
C'est un outil très riche et ce chapitre n'en fournit qu'un bref aperçu.

.. note::

   Il est possible de configurer votre installation TYPO3 CMS
   pour utiliser Composer à la place, mais ceci n'est pas couverts par ce tutoriel.

En allant au module **OUTILS D'ADMINISTRATION > Extensions**, nous obtenons la vue suivante:

Moving to **ADMIN TOOLS > Extensions**, we get the following view:

.. figure:: ../Images/BackendExtensionManager.png
   :alt: Gestionnaire d'extensions TYPO3 CMS

Il montre les "Extensions installées".
La première icône d'action (1) peut être utilisée pour installer une extension désinstallée
ou vice-versa (les extensions désinstallés apparaissent en grisé).

Vient ensuite des informations sur l'extension : le titre, la clé, la version et l'état.
Enfin il y a une ou plusieurs icônes d'action, en fonction de ce que l'extension offre.
Toutes les extensions ont une action de téléchargement,
beaucoup auront une action de configuration,
qui peut être utilisée pour accéder aux options de l'extension.
Encore une fois il suffit de survoler les icônes d'action pour obtenir un texte d'aide.


.. _install-extension:

Installation d'une nouvelle extension
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Regardons brièvement le processus d'installation d'extension.
Utilisez le menu dans l'entête de page pour passer à la vue "Ajouter des extensions"

.. figure:: ../Images/BackendExtensionManagerInstall.png
   :alt: Obtenir des extensions à partir du gestionnaire d'extensions

La liste qui apparaît dans ce point de vue est la liste complète
des extensions du TER (limité à celles qui sont compatibles avec
la version TYPO3 CMS que vous utilisez).
Vous pouvez mettre à jour cette liste en utilisant le bouton en haut à droite (1).
Un champ de recherche est disponible (2).

Cliquer sur l'action "Importer et installer" (3) va déclencher l'installation.
Les extensions peuvent dépendre d'autres extensions,
auquel cas tout sera installé de façon transparente.

Si vous cherchez une version spécifique d'une extension,
vous pouvez cliquer sur son titre (4) et accéder à la liste
de toutes les versions disponibles.

.. figure:: ../Images/BackendExtensionManagerExtensionVersions.png
   :alt: Voir toutes les versions possibles d'une extension donnée

Seules les versions compatibles sont affichées.
Les versions connues comme étant non sécurisées ne seront jamais affichées.

.. warning::

   **Sécurité des extensions**

   Merci de garder à l'esprit qu'il n'y a pas de vérification de sécurité
   disponible pour des extensions publiques !
   Jetez un oeil de près aux extensions que vous installez.
   Si vous trouvez un problème de sécurité entrer en contact
   avec l'équipe de sécurité: security@typo3.org.
