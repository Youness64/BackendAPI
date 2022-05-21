PRojet API.

Initialisation du projet : 

Istallation de NODE :

Installation de Linting : npm install -g eslint pour l'installer. Suivis de eslint --init pour initialiser l'outil. Rajouter la ligne ""lint": "eslint . --ext .js"" dans le package.json.
A lancer avec la commande npm run lint

Installation de Mocha : npm install -g mocha. Création d'un dossier test avec un fichier test.js avec un script puis insetion de la ligne dans package.json.


Mise en place de la base de donnée avec MySQL : Lancement de Uwamp et création de la base de donnée 'API'. Création de la connexion dans le fichier db-connection avec check des erreurs.
Test de la base de donnée avec ArcType (première utilisation).