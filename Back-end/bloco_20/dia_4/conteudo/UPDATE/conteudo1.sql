-- SET SQL_SAFE_UPDATES = 0; Comando para desabilitar proteção de update sem WHERE

UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';