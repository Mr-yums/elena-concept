# Elena — une proposition de refonte

Une direction visuelle cinéma pour l’univers d’Elena Nagapetyan : une entrée immersive, trois cartes pour le spectacle, le livre et YouTube, et un parcours vertical sur mobile.

**[Ouvrir la démo](https://mr-yums.github.io/elena-concept/)** · [Sources des contenus](https://mr-yums.github.io/elena-concept/dossier.html)

![Aperçu ordinateur](docs/screenshots/desktop.png)

## Une proposition indépendante

Ce projet réalisé par Yums n’est ni commandé ni approuvé par Elena Nagapetyan. Il présente une piste de refonte, à discuter avec elle. Toute demande d’ajustement ou de retrait sera respectée.

Les portraits et scènes sont des interprétations générées par IA, pas des photographies de représentations réelles. La couverture du livre et les miniatures YouTube proviennent des sources originales. Les textes et médias restent la propriété de leurs ayants droit ; ce dépôt ne leur attribue pas de licence de redistribution.

## Ce que contient la démo

- Page statique en français, sans framework ni service applicatif.
- Liens vers la billetterie, le livre et les réseaux d’origine.
- Cartes empilées sur mobile, navigation clavier, réduction des animations respectée.
- Impulsion tactile facultative de 8 ms si le navigateur et l’appareil le permettent ; aucune vibration au scroll.
- Aucun formulaire de collecte ni outil de suivi intégré.
- Demande de non-indexation ; elle ne rend pas les fichiers privés.

## Lancer avec Docker

```sh
docker compose up -d --build
```

Ouvrir http://localhost:8088. Le port est limité à la machine par défaut. Pour une machine de démonstration accessible sur son réseau :

```sh
BIND_ADDRESS=0.0.0.0 PORT=8088 docker compose up -d --build
```

Pour un accès Internet, placer le conteneur derrière un proxy HTTPS ou utiliser la démo GitHub Pages. Arrêt : `docker compose down`. Relance : `docker compose up -d`.

Le conteneur utilise Nginx sans privilèges, un système de fichiers en lecture seule, un répertoire temporaire limité et un contrôle de santé HTTP. Il sert uniquement `site/`.

## Modifier ou publier

Les fichiers de la démo sont dans `site/`. Modifier le HTML, le CSS ou les images puis reconstruire Docker. Le workflow GitHub Pages publie uniquement ce répertoire lors d’un push sur `main`.

Les archives de collecte, données locales et secrets ne font pas partie du dépôt.

## Captures et sources

- [Vue ordinateur](docs/screenshots/desktop.png)
- [Vue mobile](docs/screenshots/mobile.png)
- [Les trois cartes](docs/screenshots/cartes.png)
- [Prompt du portrait](docs/portrait-prompt.txt)
- [Prompt de la scène](docs/scene-prompt.txt)
- [Site d’origine](https://www.elenanagapetyan.com/)

Création et proposition : **Yums**. Développement assisté par **Sol**.
