SELECT 
    FIRST_NAME,
    LAST_NAME,
    DATEDIFF(NOW(), HIRE_DATE) AS DIAS_TRABALHADOS
FROM
    hr.employees;