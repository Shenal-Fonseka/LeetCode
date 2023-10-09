select a.name as Employee from
(select id, name, salary, managerid from employee) a
Left join 
(select id as manager_id,salary as manager_salary from employee) b
on a.managerid=b.manager_id
where a.salary>b.manager_salary