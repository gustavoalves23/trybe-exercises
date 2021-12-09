SELECT 
    JOB_ID, SUM(SALARY)
FROM
    hr.employees
WHERE
    JOB_ID = 'IT_PROG';