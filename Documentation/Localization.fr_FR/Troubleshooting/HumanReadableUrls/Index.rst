.. include:: ../../Includes.txt


.. _human-readable-urls:
.. _human-readable-url-s:

=========================
URLs humainement lisibles
=========================

Par défaut TYPO3 CMS identifie la page qui doit être délivrée par le paramètre "id?".
Il suffit d'entrer *http://www.votre-site.exemple.org/index.php?id=33* pour obtenir
la page "Vue d'ensemble" du paquet d'introduction.

Ceci est pratique mais pas bon pour les visiteurs, ni pour un référencement optimal.
Les URLs humainement lisibles sont fournies par l'extension "realurl" (d'autres existent).
Ainsi, l'URL mentionnée ci-dessus devient
*http://www.votre-site.exemple.org/exemples-de-contenus/vue-d-ensemble/*.

Cela devrait fonctionner dès l'installation du paquet d'introduction.
Si cela ne ne fonctionne vous devrez peut-être désactiver les URL humainement lisibles.
La façon la plus simple d'y parvenir est d'aller dans le module
**OUTILS D'ADMINISTRATIOIN > Extensions** et de désactiver l'extension "realurl".
