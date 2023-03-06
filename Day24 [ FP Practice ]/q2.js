let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    },
    {
        "id": 3014,
        "name":"Abhi",
        "salary":48000
    }]

// 1. Find the total salary of employees?
const getTotalSalary = employees => employees.reduce((totalSalary, {salary}) =>{
    return totalSalary + salary
},0);
console.log(getTotalSalary(employees)); // 217000




// 2. Find all the employee who earn more than the average salary?
const getAverageSalary = employees => employees.reduce((totalSalary, {salary}, index, array) => {
    totalSalary = totalSalary + salary
    if(index >= array.length - 1 ){
        return totalSalary / array.length
    }
    return totalSalary
}, 0)
console.log(getAverageSalary(employees)) // 54250
const averageSalary = getAverageSalary(employees)

const findEmployeesEarnsMoreThanAverage = employees => employees.filter(({salary}) => salary > averageSalary)
console.log(findEmployeesEarnsMoreThanAverage(employees));
// [
//     { id: 11, name: 'Abhinav', salary: 75000 },
//     { id: 2131, name: 'Gaurav', salary: 62000 }
// ]
