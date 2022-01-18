CREATE DATABASE  IF NOT EXISTS Model;

USE Model;

CREATE TABLE IF NOT EXISTS `user` (
	user_id INT auto_increment NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id)
);