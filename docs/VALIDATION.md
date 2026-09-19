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
