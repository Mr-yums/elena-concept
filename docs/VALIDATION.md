# Validation — 19 septembre 2026

Intervention : Sol (GPT-6). Préparation d’une distribution publique statique, Docker et GitHub Pages.

- Les sources initiales et variantes sont conservées hors distribution.
- Copie publique explicite dans `site/` ; archives, outils locaux et messages de prise de contact exclus.
- Construction Docker effectuée, Nginx sans privilèges et système de fichiers en lecture seule ; contrôle de santé positif.
- Chaque fichier servi comparé octet par octet au répertoire `site/`.
- Accès aux archives, fichiers Git, configuration et variante inutilisée refusé (403/404).
- Vérification navigateur Chromium ordinateur et mobile : images chargées, aucune erreur JavaScript, aucun débordement horizontal sur mobile.
- Captures ordinateur, mobile et cartes réalisées depuis le conteneur.
- Contrôles précédents des interactions : appel de vibration unique de 8 ms au toucher simulé ; aucun appel à la souris, en réduction des animations ou sans API disponible. Sensation matérielle non testée.

Aucun message envoyé à Elena et aucune modification de son site d’origine.

## Lisibilité des cartes — 19 septembre 2026

Titres dimensionnés selon la largeur de chaque carte, titre spectacle recentré verticalement dans sa moitié gauche, accroches et CTA agrandis et plus contrastés. Contrôles Chromium à 320, 390, 620, 768, 1024, 1440, 1920 et 3440 px : aucun débordement horizontal, accroche du livre séparée du lien d’achat. Captures et kit de contact régénérés. L’archive Docker v1.0.0 reste le snapshot initial ; les sources Docker du dépôt suivent la nouvelle démo.

## Bas de page et réseaux — 19 septembre 2026

Sections spectacle/contact harmonisées : grille, titres, espacements et couleurs. Réseaux présentés en trois grands liens avec icônes SVG, identifiants et invitations explicites ; pile verticale sur mobile. Contrôles Chromium à 320, 390, 760, 768, 1024, 1440 et 3440 px : aucun débordement horizontal, aucune erreur JavaScript. Destinations des trois liens relues et identiques aux liens originaux. Nouvelle capture `reseaux.png`, capture mobile et kit actualisés.

## En-tête et navigation — 19 septembre 2026

Trois icônes de réseaux ajoutées à côté de la billetterie, avec les mêmes destinations que le contact et des noms accessibles. Menu agrandi de 13 px à 18 px sur ordinateur et 20 px dès 1800 px ; disposition sur deux lignes pour tablette et mobile. Contrôles Chromium à 320, 390, 620, 621, 768, 1000, 1001, 1024, 1101, 1200, 1440, 1920 et 3440 px : aucun débordement horizontal, aucun chevauchement entre menu et actions, trois icônes présentes et aucune erreur JavaScript. Captures ordinateur et mobile actualisées.

## Favicon et crédits — 19 septembre 2026

Monogramme E original en SVG, déclinaisons PNG 32 px et icône Apple 180 px ; références relatives compatibles GitHub Pages, accueil et dossier. Ajout des mentions « © Elena Nagapetyan. Tous droits réservés. » et « Conception par Mr.yums ». Contrôles Chromium à 320, 390, 768, 1440 et 3440 px sans débordement horizontal ; les trois icônes répondent HTTP 200. Icône et pied de page inspectés visuellement. Captures et kit actualisés.
