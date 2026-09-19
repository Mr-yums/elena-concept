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

## Harmonisation du pied de page — 19 septembre 2026

Identité avec monogramme, fond bordeaux discret, grille de lecture et mentions plus lisibles. Liens regroupés, cibles tactiles de 44 px minimum et retour en haut. Vérifications Chromium à 320, 390, 620, 768, 1000, 1024, 1440, 1920 et 3440 px : aucun débordement horizontal ; cibles de liens vérifiées et retour en haut fonctionnel. Captures du footer inspectées sur ordinateur et mobile. Kit actualisé.

## Carte du livre — 19 septembre 2026

Suppression du nom répété au-dessus du titre, titre et accroche agrandis, bloc élargi et repositionné. Contrôles Chromium à 320, 390, 620, 768, 1000, 1024, 1440, 1920 et 3440 px : pas de débordement horizontal, espace préservé entre texte et CTA. Captures de la carte inspectées à 320 et 1440 px. Captures et kit actualisés.

## Harmonisation globale — 19 septembre 2026

Hero plus compact sur ordinateur, proportions titre/portrait rééquilibrées, fonds continus, titres et espacements cohérents, séparateurs alignés sur le contenu, boutons et rayons harmonisés. Cartes verticales aussi sur tablette. Contrôles Chromium à 320, 390, 620, 768, 1000, 1024, 1101, 1440, 1920 et 3440 px : aucun débordement horizontal, pas de chevauchement texte/CTA dans le livre ni actions/repères dans le hero. Captures complètes inspectées à 390 et 1440 px ; aucune erreur JavaScript durant les nouvelles captures. Quatre captures et kit actualisés.

## Deux ambiances — 19 septembre 2026

Palette sombre conservée et variante beige (ivoire, sable, caramel, brun). Sélecteur avec état accessible, choix mémorisé localement, URL partageable `?theme=dark` ou `?theme=beige` prioritaire sur la préférence. Chargement initial du thème avant la feuille CSS. Contrôles Chromium des deux palettes à 320, 390, 620, 768, 1000, 1024, 1440, 1920 et 3440 px : aucun débordement ni chevauchement des éléments contrôlés (texte/CTA du livre, actions/repères du hero et bandeau/en-tête). Activation clavier, état aria-pressed, mémorisation et priorité du lien vérifiés ; aucune erreur JavaScript. Captures beige ordinateur/mobile ajoutées au kit.

## Orientation du portrait — 19 septembre 2026

Portrait du hero retourné horizontalement via CSS ; prénom de fond décalé vers la gauche avec ajustement par largeur d’écran. Deux palettes contrôlées à 320, 390, 768, 1024, 1440, 1920 et 3440 px : transformation miroir effective et aucun débordement horizontal. Cadrages beige ordinateur et sombre mobile inspectés ; captures des deux ambiances et kit actualisés.

## Livraison Docker 1.1.0 et captures — 19 septembre 2026

Image Docker 1.1.0 reconstruite avec le site actuel (deux thèmes, portrait retourné), conteneur local sain sur 8796. HTML/CSS/JS servis identiques aux sources publiées. Captures complètes depuis Docker : mobile tactile 390×844, tablette tactile 820×1180, ordinateur 1440×1000, dans les deux ambiances ; aucune erreur JavaScript ni débordement horizontal. Archive Linux amd64 exportée avec empreintes SHA256 vérifiées et Compose de téléchargement.

## Cartes sociales beiges — 19 septembre 2026

Palette uniforme ivoire/caramel, icônes contrastées et CTA séparé par un filet. Modification limitée au thème beige. Rendu inspecté à 390 et 1440 px ; contrôle sans débordement à 320, 390, 820, 1440 et 3440 px. Captures beige mobile/tablette/PC actualisées.
