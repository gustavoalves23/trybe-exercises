SELECT 
    rating, SUM(replacement_cost) AS preco
FROM
    sakila.film
GROUP BY rating
HAVING preco > 3950.50 ORDER BY preco;