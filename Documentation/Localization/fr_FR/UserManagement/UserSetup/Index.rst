.. include:: ../../Includes.txt

.. _setup-user:
.. _creating-a-new-user-for-the-introduction-site:

Configuration d'un utilisateur
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Pour explorer les derniers détails de la mise en place d'un utilisateur backend
- et en guise d'exercice - ce chapitre vous guidera à travers le processus
de création d'un nouvel utilisateur.
Pour le rendre plus intéressant, nous allons également créer
un nouveau groupe d'utilisateurs.


.. _step-create-a-new-group:

Étape 1: créer un nouveau groupe
""""""""""""""""""""""""""""""""

Nous allons créer un nouveau groupe d'utilisateurs en utilisant le module *Accès*.

.. figure:: ../../Images/BackendAccessCreateNewGroup.png
   :alt: Création d'un nouveau groupe backend à partir du module Accès

Commencez par saisir le nom ( "Éditeurs de ressources"),
éventuellement une description et choisissez "Tous les utilisateurs" comme sous-groupe.

.. figure:: ../../Images/BackendAccessNewGroupGeneralTab.png
   :alt: Saisie des informations générales sur le nouveau groupe

Gardons les choses simples pour les autres autorisations.
Essayez de faire ce qui suit:

- pour les **modules**, il suffit de choisir "Web > Page" et "Web > Voir"
- pour les **Tables (lister)** et **Tables (modifier)**, choisissez "Page" et "Contenu de la page"
- pour les **Types de page**, sélectionnez "Standard"

et sauvegardez.

Allez sur l'onglet "Montages et espaces de travail" et
sélectionnez la page « Ressources » comme montage de base de données.
Pour le faire facilement commencez à taper "Res" dans l'assistant à la droite du champ.
Il permet d'afficher des suggestions, à partir des quelles
vous pourrez sélectionner la page "Ressources".

.. figure:: ../../Images/BackendAccessNewGroupDBMount.png
   :alt: Définition les montages BDD en utilisant les suggestions de l'assistant


Ignorons tout le reste. Utilisez l'action
"Enregistrer et fermer" pour revenir à la liste des groupes.


.. _step-create-the-user:

Étape 2: créer l'utilisateur
""""""""""""""""""""""""""""

Tout comme nous l'avons fait avant, nous allons créer un nouvel
utilisateur en utilisant le module le module *Accès*.

.. figure:: ../../Images/BackendAccessCreateNewUser.png
   :alt: Création d'un nouvel utilisateur backend à partir du module Accès


Définissez le nom d'utilisateur, son mot de passe et l'appartenance à un groupe :

.. figure:: ../../Images/BackendAccessNewUserGeneralTab.png
   :alt: Réglage des informations de base pour le nouvel utilisateur

.. note::

   Si nous étions en train de créer un nouvel administrateur,
   nous aurions juste besoin de cocher la case "Admin (!)".
   L'administrateur n'a pas besoin d'appartenir à un groupe,
   même si cela peut encore être utile pour partager des
   paramètres spéciaux parmi les administrateurs.

Maintenant, passez à l'onglet « Montages et espaces de travail »
pour veiller à ce que les paramètres "Montage à partir des groupes :"
soient cochés :

.. figure:: ../../Images/BackendAccessNewUserMountFromGroups.png
   :alt: Vérifier le réglage "Montage à partir des groupes"


Cela fait en sorte que les montages de base de données
et de fichiers sont hérités du ou des groupes aux quels
l'utilisateur appartient et qu'il ne sont pas définis au niveau de l'utilisateur.

Enregistrer et fermer l'enregistrement. Nous allons vérifier
le résultat de notre travail en utilisant la fonction de simulation
d'utilisateur que nous avons vu plus tôt.

.. figure:: ../../Images/BackendAccessSimulateResourceEditor.png
   :alt: Nous allons simuler notre nouvel utilisateur !

Vous devriez voir ce qui suit :

.. figure:: ../../Images/BackendResourceEditorUser.png
   :alt: Le backend vu par l'utilisateur "McEditor Resource"
