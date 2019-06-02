CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers  (
  id int AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(225),
  devoured BOOLEAN
  PRIMARY KEY (id)
)
