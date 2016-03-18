
.. include:: ../../Includes.txt


.. _groups:

Groupes
^^^^^^^

Bien qu'il soit possible de modifier les permissions
de l'utilisateur au niveau de l'utilisateur,
il est fortement recommandé d'utiliser des groupes à la place.
Tout comme pour les utilisateurs, il y a des "groupes d'utilisateurs backend"
et des "groupes d'utilisateurs frontend".

Ce chapitre fournit juste un rapide aperçu des groupes d'utilisateurs backend.
Dans le chapitre suivant, nous allons envisager de modifier
les permissions des utilisateurs en utilisant des groupes.

Les groupes Backend peuvent également être consultés en utilisant
le modul **SYSTEM > Utilisateurs backend** :

.. figure:: ../../Images/BackendBackendUserGroups.png
   :alt: Affichage des groupes dans le module Utilisateurs Backend


Nous pouvons voir deux groupes qui correspondent évidemment
à nos utilisateurs ( «simple» et «avancé»).
En plus, il existe un groupe "Tous les utilisateurs" qui est un sous-groupe des deux autres.
Cela signifie que toutes les permissions paramétrées pour le groupe
"Tous les utilisateurs" seront partagées avec les utilisateurs
"éditeurs avancés" et les utilisateurs "éditeurs simples".

Pour voir quel utilisateur fait partie d'un groupe,
le plus simple est de cliquer sur l'icône d'action "information".
Une pop-up va ouvrir des informations détaillées sur le groupe.
Faites défiler la liste jusqu'à ce que vous trouviez la section
"Références à cet élément :".
Cela présente la liste des utilisateurs backend faisant partie de ce groupe.

.. figure:: ../../Images/BackendBackendUserGroupDetail.png
   :alt: Vérification des utilisateurs faisant partie d'un groupe
