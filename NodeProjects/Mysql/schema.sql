CREATE DATABASE userdata;
USE userdata;

CREATE TABLE users(id integer PRIMARY KEY NOT NULL AUTO_INCREMENT,name VARCHAR(255) NOT NULL,age INT NOT NULL);

INSERT INTO users(name, age) VALUES 
("Gurusudhan",21),
('Bharath',21);
