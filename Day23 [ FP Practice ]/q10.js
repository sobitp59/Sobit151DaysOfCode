//10: Given an array of objects representing employees, use reduce() to calculate the total salary expense for the company.

const employees = [
    { name: 'John', salary: 50000 },
    { name: 'Jane', salary: 60000 },
    { name: 'Bob', salary: 70000 },
    { name: 'Alice', salary: 80000 }
];

const getEmployeeSalary = employees => employees.reduce((totalSalary, {salary}) => {
    return totalSalary + salary;
}, 0)

console.log(getEmployeeSalary(employees)) // 260000