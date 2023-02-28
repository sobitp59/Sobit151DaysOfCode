// Given an array of objects with name and salary properties, use map to return a new array with each salary increased by 10%.

const employees = [
    { name: 'Alice', salary: 50000 },
    { name: 'Bob', salary: 60000 },
    { name: 'Charlie', salary: 45000 },
    { name: 'David', salary: 70000 },
    { name: 'Eve', salary: 55000 }
];

const salary10Percent = employees.map(employee => ({...employee, salary : employee.salary + (employee.salary / 100 * 10) }));
console.log(salary10Percent);
// [
//     { name: 'Alice', salary: 55000 },  
//     { name: 'Bob', salary: 66000 },    
//     { name: 'Charlie', salary: 49500 },
//     { name: 'David', salary: 77000 },  
//     { name: 'Eve', salary: 60500 }     
// ]  