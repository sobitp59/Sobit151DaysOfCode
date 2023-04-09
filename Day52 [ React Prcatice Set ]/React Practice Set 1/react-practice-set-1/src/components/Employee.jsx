import React from 'react'

const employees = [
    {
      name: 'Jack Smith',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 24000,
    },
    {
      name: 'Mary Robbins',
      level: 3,
      dept: 'Fin',
      designation: 'Manager',
      salary: 28000,
    },
    {
      name: 'Steve Williams',
      level: 4,
      dept: 'Ops',
      designation: 'President',
      salary: 35000,
    },
    {
      name: 'Bob Andrews',
      level: 1,
      dept: 'Fin',
      designation: 'Trainee',
      salary: 16500,
    },
    {
      name: 'Dave Martin',
      level: 2,
      dept: 'Fin',
      designation: 'Manager',
      salary: 21700,
    },
    {
      name: 'Julia Clarke',
      level: 3,
      dept: 'Ops',
      designation: 'Manager',
      salary: 26900,
    },
    {
      name: 'Kathy Jones',
      level: 4,
      dept: 'Tech',
      designation: 'President',
      salary: 42500,
    },
    {
      name: 'Tom Bresnan',
      level: 2,
      dept: 'Tech',
      designation: 'Manager',
      salary: 22200,
    },
  ]

const Employee = () => {
  return (
    <div className='box'>
        <ul>
            {employees.map(({name, level, dept, designation, salary}) => {
                return <li style={{background : level === 2 && 'orange', border : designation === 'President' && '2px solid green'}}>name : {name}, level : {level}, dept: {dept} designation : {designation}, salary : {salary}</li>
            })}
            <h3>total salary expense : {employees.reduce((total, {salary}) => total + salary, 0)}</h3>
        </ul>
    </div>
  )
}

export default Employee