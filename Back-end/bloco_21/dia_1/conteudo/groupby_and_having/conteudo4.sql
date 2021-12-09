SELECT 
    district, COUNT(*) AS contagem
FROM
    sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;