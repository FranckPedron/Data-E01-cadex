# Cadex

Notre solution "cadex" va être organisée de telle manière :

- index.js : fichier de lancement
- app/router.js : routeur de notre application
- app/controller.js : fichier qui répond aux routes
- app/cadexService.js : service qui permet de générer des cadex

Quand un utilisateur arrive sur la page index.html, le contrôleur est appelé.

Le contrôleur va contacter le service pour générer un cadex et le retourner à l'utilisateur.
