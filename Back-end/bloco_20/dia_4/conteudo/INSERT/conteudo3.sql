INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer LIMIT 5;