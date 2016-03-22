
.. include:: ../../Includes.txt


.. _changing-backend-language:

Modification de la langue backend
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Le backend TYPO3 CMS est disponible dans de nombreuses langues.
Ces traductions sont regroupés dans des paquets qui doivent
être récupérés à partir du serveur de traduction communautaire
(https://translation.typo3.org/).
Une fois installées, les utilisateurs backend peuvent choisir
la langue qu'ils souhaitent utiliser.

Le chargement des paquets de traduction se passe dans le module
**Outils d'administration >langues**.

.. figure:: ../../Images/BackendLanguageModule.png
   :alt: Le module backend d'administration des langues


Cliquez sur l'icône "+" pour activer une nouvelle langue.
Un bouton de téléchargement apparaît à droite.
Cliquez dessus pour obtenir les traductions.
Dans le docheader se trouve une icône de téléchargement
qui ira chercher les paquets pour toutes les langues activées.
Il est recommandé de les mettre à jour régulièrement
afin de bénéficier de traductions ajoutées ou améliorées.

Pour changer la langue du backend, allez au module
**Configuration utilisateur personnelle**, qui est accessible
en cliquant sur votre nom d'utilisateur dans la barre supérieure.

.. figure:: ../../Images/BackendSettingsLanguage.png
   :alt: Changer la langue de l'interface pour l'utilisateur actuel


Choisissez "Langue" en bas, puis appuyez sur le bouton "Enregistrer" dans le docheader.
Le backend devrait se mettre à jour automatiquement,
mais vous devrez peut-être recharger la page dans le navigateur.
Votre backend devrait maintenant être en basque.

.. figure:: ../../Images/BackendTranslated.png
   :alt: Le backend traduit en basque


Comme vous pouvez le voir, si une traduction est incomplète,
le backend bascule en anglais (pour les termes non traduits).

Une langue par défaut peut également être définie
lors de la création d'un nouvel utilisateur backend.

.. figure:: ../../Images/BackendBackendDefaultLanguage.png
   :alt: Réglage de la langue par défaut pour un nouvel utilisateur de backend


.. caution::

   La modification de la langue par défaut d'un utilisateur ne changera
   pas la langue backend si cet utilisateur s'est déjà connecté
   au moins une fois, car la langue est maintenue dans les préférences de l'utilisateur.
   Ces utilisateurs devront mettre à jour leur langue eux-mêmes.