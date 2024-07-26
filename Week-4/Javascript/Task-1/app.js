
class Employee {
   constructor(name, age, department, salary) {
     this.name = name;
     this.age = age;
     this.department = department;
     this.salary = salary;
   }
 }
 

 function calculateAverageSalary(employees) {
   if (employees.length === 0) {
     return 0; 
   }
 
   let totalSalary = 0;
 
   for (const employee of employees) {
     totalSalary += employee.salary;
   }
 
   return totalSalary / employees.length;
 }
 

 function findEmployeesInDepartment(employees, department) {
   return employees.filter(employee => employee.department === department);
 }
 
 function increaseSalary(employees, percentage) {
   for (const employee of employees) {
     employee.salary += (employee.salary * percentage) / 100;
   }
   return employees;
 }
 

 function sortEmployeesByAge(employees) {
   return employees.sort((a, b) => a.age - b.age);
 }
 

 const employees = [
   new Employee('Alice', 30, 'Engineering', 70000),
   new Employee('Bob', 25, 'Marketing', 50000),
   new Employee('Charlie', 35, 'HR', 60000),
   new Employee('David', 40, 'Finance', 80000),
   new Employee('Eva', 28, 'Engineering', 65000)
 ];
 
 
 const averageSalary = calculateAverageSalary(employees);
 console.log(`Average Salary: ${averageSalary}`); 
 

 const hrEmployees = findEmployeesInDepartment(employees, 'Hr');
 console.log('HR Employees:', hrEmployees);
 
 
 const updatedSalaries = increaseSalary(employees, 10);
 console.log('Updated Salaries:', updatedSalaries);
 

 const sortedEmployees = sortEmployeesByAge(employees);
 console.log('Sorted Employees by Age:', sortedEmployees);
 