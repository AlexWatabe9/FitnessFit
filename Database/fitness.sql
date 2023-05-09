DROP DATABASE IF EXISTS fitness_db;

CREATE DATABASE fitness_db;

USE fitness_db;

CREATE TABLE fitness_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    workout VARCHAR(30) NOT NULL,
    duration INT NOT NULL,
);