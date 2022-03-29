BEGIN;
INSERT INTO
  "name"("label")
VALUES
  ('un cheval'),
  ('la mairie de Neuilly-sur-Seine'),
  ('une huître'),
  ('Julie Andrieu'),
  ('Jacky et sa Subaru Impreza'),
  ('la gendarmerie hollandaise'),
  ('un chauve'),
  ('Simon'),
  ('2 chatons');
INSERT INTO
  "adjective"("label")
VALUES
  ('bien cuit'),
  ('blond'),
  ('guilleret'),
  ('ankylosé'),
  ('blafard'),
  ('rasé de près'),
  ('amputé d''un doigt');
INSERT INTO
  "verb"("label")
VALUES
  ('consulte'),
  ('franchit'),
  ('cuisine'),
  ('remet en question'),
  ('s''immole pour protester contre'),
  ('enduit de confiture'),
  ('instaure'),
  ('déguste');
INSERT INTO
  "complement"("label")
VALUES
  ('un seau en plastique'),
  ('la consommation de café'),
  ('Yann'),
  ('3 roues de voiture'),
  ('2 mains gauches'),
  ('un skieur débutant'),
  ('la Mer Noire');

-- je viens générer les phrases grâce aux tables précédentes
INSERT INTO
  public.sentence(
    sentence,
    name_id,
    verb_id,
    complement_id,
    adjective_id
  )
SELECT (name.label || ' ' || adjective.label || ' ' || verb.label || ' ' || complement.label) AS sentence,name.id,verb.id,complement.id,adjective.id
FROM "name",adjective,verb,complement;

COMMIT;