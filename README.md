# Base de code du projet P6 - Parcours Front-end

## Installer Webpack

en ligne de commande, à la racine du projet taper:
`npm install`

## Copier les assets

dans le répertoire `src/assets/`
- ajouter le repertoire `medias` qui contiendra que les videos et images des medias
- ajouter le repertoire `photographers` qui contiendra que les images des photographes

## Lancer le projet

en ligne de commande, à la racine du projet taper:
`npm run start`
une fenêtre de votre navigateur par défaut devrait s'ouvrir, à chaque modification de votre code l'affichage se mettra à jour

## Tester l'accessibilité

### Installer pa11y

en ligne de commande, installer globalement avec npm:
`npm install -g pa11y`

### Tester les pages

Au préalable le projet doit être en cours d'éxécution, puis en ligne de commande lancer les commandes suivantes:
- test de la page d'accueil: `pa11y http://localhost:8087/index.html` 
- test de la page du premier photographe: `pa11y http://localhost:8087/photographer.html?id=243`
