DELETE FROM film_actor 
WHERE
    actor_id IN (SELECT 
        actor_id
    FROM
        actor
    
    WHERE
        first_name = 'MATTHEW');
DELETE FROM actor 
WHERE
    first_name = 'MATTHEW';