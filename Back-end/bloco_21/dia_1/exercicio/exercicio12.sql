SELECT 
    *
FROM
    hr.employees
WHERE
    CHAR_LENGTH(FIRST_NAME) >= 8;