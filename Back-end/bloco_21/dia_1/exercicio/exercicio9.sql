SELECT 
    JOB_ID, AVG(salary)
FROM
    hr.employees
WHERE
    JOB_ID != 'IT_PROG'
GROUP BY JOB_ID
ORDER BY AVG(salary) DESC
;