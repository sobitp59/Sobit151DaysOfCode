// Given an array of objects with name and salary properties, use filter to return only the objects where the salary is greater than $50,000.

const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 45000 },
    { name: 'David', salary: 70000 },
    { name: 'Eve', salary: 55000 }
];

const salaryGreaterThan50K = employees.filter(employee => employee.salary > 50_000);
console.log(salaryGreaterThan50K);

// [
//     { name: 'Bob', salary: 60000 },  
//     { name: 'David', salary: 70000 },
//     { name: 'Eve', salary: 55000 }   
//   ]