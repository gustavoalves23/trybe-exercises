-- Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT 
    ROUND(MAX(salary), 2) AS maior_salary,
    ROUND(MIN(salary), 2) AS menor_salary,
    ROUND(SUM(salary), 2) AS soma_salarys,
    ROUND(AVG(salary), 2) AS media_salarys
FROM
    hr.employees;