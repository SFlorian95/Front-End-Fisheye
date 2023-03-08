# Fisheye

Projet de formation Openclassrooms

Créez un site accessible pour une plateforme de photographes

![image](https://user-images.githubusercontent.com/48679043/223749001-c875cfbc-7d94-47bc-886e-8eacc9ce67e3.png)

### Scénario 

Depuis quelques semaines, vous êtes développeur junior chez Techasite, une société de conseil spécialisée dans le développement de sites web et d'applications mobiles.
Avec votre cheffe de projet Amanda et le Designer UI, vous venez de faire une réunion de lancement du projet avec un nouveau client, FishEye. FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Ils ont récemment levé des fonds et aimeraient mettre à jour leur site web. 

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

Pour lancer le test eslint :
npm run lint
