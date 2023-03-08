DROP SCHEMA public CASCADE;

CREATE SCHEMA public;

CREATE TABLE time (
  id serial NOT NULL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL
);

CREATE TABLE jogador (
  id serial NOT NULL PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  idade int NOT NULL,
  time_id int NOT NULL,
  FOREIGN KEY(time_id) REFERENCES time(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);

INSERT INTO time (nome)
VALUES ('CLOUD9'),
        ('IMPERIAL'),
        ('BIG'),
        ('FURIA'),
        ('FNATIC'),
        ('MIBR'),
        ('LIQUID');

INSERT INTO jogador (nome, idade, time_id)
VALUES ('Gael', 23, 1),
        ('Bernardo', 21, 1),
        ('chelo', 21, 2),
        ('VINI', 22, 2),
        ('FalleN', 32, 2),
        ('bolts', 23, 2),
        ('JOTA', 19, 2),
        ('Heitor', 23, 3),
        ('Ravi', 24, 3),
        ('João', 24, 4),
        ('Pedro', 21, 4),
        ('Théo', 22, 5),
        ('Davi', 25, 5),
        ('Juca', 25, 6),
        ('Flavio', 25, 7);