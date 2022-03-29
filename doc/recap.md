# Organisation SQL

Quand on va parler d'organisation au niveau de notre système de bases de données, cela va signifier plusieurs choses :

- MCD (schéma de notre BDD)
- Droits (autorisations/utilisateurs de notre BDD)
- Optimisation de notre BDD (préparer en amont des requêtes qui vont permettre de soulager le système)
- Industrialisation (processus d'automatisation d'une mise en ligne)

## MCD

Le MCD est la première pierre de notre SGBD. Il est important de prendre le temps nécessaire à sa réalisation pour éviter des problématiques complexes dans le futur.

## Droits

Définir un utilisateur spécifique pour gérer une base de données est la granularité la plus minimale qu'il faille mettre en place.

Dans les prochains jours, nous verrons comment rendre les droits plus granulaires afin de s'adresser à une population ciblée.

## Optimisation

Il y a une différente entre remonter des données brutes et remonter ce qu'on va appeler un aggrégat de données.
Dans le cas d'un aggrégat, il s'agit d'une liste d'enregistrements qui ont été prégénérés et donc nous permettre de gagner en performance.

## Industrialisation

L'industrialisation est l'automatisation via des scripts de procédure.
Dans l'exemple de la BDD cadex, nous avons industrialisé la création et le remplissage initial de la BDD.

[createuser](https://docs.postgresql.fr/10/app-createuser.html#:~:text=createuser%20est%20un%20enrobage%20de,m%C3%A9thodes%20d'acc%C3%A8s%20au%20serveur.)

[createdb](https://docs.postgresql.fr/10/app-createdb.html)

Création d'un script : 

```
Open the terminal. Go to the directory where you want to create your script.
Create a file with .sh extension.
Write the script in the file using an editor.
Make the script executable with command chmod +x <fileName>.
Run the script using ./<fileName>.
```