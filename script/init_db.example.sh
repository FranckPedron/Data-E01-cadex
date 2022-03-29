export PGUSER=***** # ajoute une variable d'environnement
echo $PGUSER # affiche une variable d'environnement
export PGPASSWORD=*****

# je lance mon script DDL (création des tables)
psql -d cadex -f create_tables.sql

# je lance mon script DML (ajout des données)
psql -d cadex -f import_data.sql
