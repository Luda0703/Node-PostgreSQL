CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE gamer(
  id SERIAL PRIMARY KEY,
  player_name VARCHAR(255) NOT NULL,
  score INT NOT NULL
);