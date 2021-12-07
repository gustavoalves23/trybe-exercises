DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id IN (SELECT 
        id
    FROM
        Pixar.Movies
    
    WHERE
        director = 'Andrew Staton');
DELETE FROM Pixar.Movies 
WHERE
    director = 'Andrew Staton';