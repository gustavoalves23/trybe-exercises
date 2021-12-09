SELECT 
    rating, AVG(rental_duration)
FROM
    sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;