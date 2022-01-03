CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista (
    artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
)  ENGINE=INNODB;

CREATE TABLE estilo_musical (
    estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20)
)  ENGINE=INNODB;

CREATE TABLE album (
    album_id INT PRIMARY KEY AUTO_INCREMENT,
    artista_id INT,
    titulo VARCHAR(30),
    preco DOUBLE,
    estilo_id INT,
    FOREIGN KEY (artista_id)
        REFERENCES artista (artista_id),
    FOREIGN KEY (estilo_id)
        REFERENCES estilo_musical (estilo_id)
)  ENGINE=INNODB;

CREATE TABLE cancao (
	cancao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    album_id INT,
    FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE=INNODB;