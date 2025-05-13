# Chess Trainer

Application d'entraînement aux échecs développée avec Angular.

## Fonctionnalités

- Pratique des mouvements et des ouvertures
- Visualisation de positions d'échecs
- Interface interactive basée sur chessground

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (inclus avec Node.js)

## Installation

Clonez ce dépôt et installez les dépendances :

```bash
git clone [URL_DU_REPO]
cd chesstrainerLandingPage
npm install
```

## Démarrage

Pour lancer l'application en mode développement :

```bash
npm start
```

L'application sera accessible à l'adresse [http://localhost:4200](http://localhost:4200).

## Construction

Pour construire l'application pour la production :

```bash
npm run build
```

Les fichiers générés seront placés dans le répertoire `dist/`.

## Publication

Pour publier le site sur GitHub Pages :

```bash
ng build --base-href="./"; npx gh-pages -d dist/frontend-app
```

Cette commande construit l'application et la déploie automatiquement sur GitHub Pages. 
Le site sera accessible à l'adresse : https://lucasBertola.github.io/chessTrainingLandingPage/

## Tests

Pour exécuter les tests unitaires :

```bash
npm test
```

## Technologies utilisées

- Angular 16
- Angular Material
- Chessground (bibliothèque d'interface d'échecs)
- TailwindCSS

## Licence

Ce projet est sous licence Apache 2.0 - voir le fichier [LICENSE](LICENSE) pour plus de détails. 