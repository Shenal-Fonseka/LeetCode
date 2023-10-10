Select email From Person
group by email
having count(email) > 1;
