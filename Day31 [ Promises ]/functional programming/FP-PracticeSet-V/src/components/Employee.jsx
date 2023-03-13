import React from 'react';

const employees = [
    {
      id: 1,
      name: "John Doe",
      department: "Marketing",
      salary: 50000
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Sales",
      salary: 60000
    },
    {
      id: 3,
      name: "Bob Johnson",
      department: "Human Resources",
      salary: 45000
    },
    {
      id: 4,
      name: "Alice Lee",
      department: "Engineering",
      salary: 75000
    },
    {
      id: 5,
      name: "Tom Wilson",
      department: "Finance",
      salary: 80000
    }
  ];
  

const Employee = () => {
  return (
    <div>
        <h2>employee list</h2>
        <ul>
            {employees.map(({id, name, department, salary}) => {
                return <li key={id}>{name} - {department} - {salary}</li>
            })}
        </ul>
    </div>
  )
}

export default Employee;


// 4. Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component that takes the array of employees as input and returns an unordered list of employees, where each list item displays the employee's name, department, and salary.