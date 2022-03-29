-- DDL - https://fr.wikipedia.org/wiki/Langage_de_d%C3%A9finition_de_donn%C3%A9es

-- on effectue ici ce qu'on appelle une transaction
-- en cas de soucis pendant la transaction, tout ce qui a été fait sera annulé
BEGIN;

-- je m'assure que les tables n'existent pas avant de les créer
DROP TABLE IF EXISTS "name","adjective","complement","verb","sentence";

CREATE TABLE "name"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    -- GENERATED signifique l'id est généré avec ALWAYS, on demande à ce qu'il soit généré tout le temps
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE "adjective"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    -- GENERATED signifique l'id est généré avec ALWAYS, on demande à ce qu'il soit généré tout le temps
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE "complement"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    -- GENERATED signifique l'id est généré avec ALWAYS, on demande à ce qu'il soit généré tout le temps
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE "verb"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    -- GENERATED signifique l'id est généré avec ALWAYS, on demande à ce qu'il soit généré tout le temps
    label TEXT NOT NULL UNIQUE
);

CREATE TABLE "sentence"(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    sentence TEXT NOT NULL, -- je ne mets pas unique à cause de la complexité éventuelle de la phrase. Je vais m'assurer en amont que la phrase soit UNIQUE
    name_id INT NOT NULL REFERENCES name(id),
    verb_id INT NOT NULL REFERENCES verb(id),
    complement_id INT NOT NULL REFERENCES complement(id),
    adjective_id INT NOT NULL REFERENCES adjective(id),
    correction TEXT, -- je laiasse null car au départ chaque phrase n'aura pas de correction
    score INT NOT NULL DEFAULT 0
);


COMMIT;