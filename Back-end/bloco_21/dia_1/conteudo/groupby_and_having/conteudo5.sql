    SELECT 
    rating, AVG(length) AS comprimento
FROM
    sakila.film
GROUP BY rating
HAVING comprimento BETWEEN 115.0 AND 121.50 ORDER BY comprimento DESC;