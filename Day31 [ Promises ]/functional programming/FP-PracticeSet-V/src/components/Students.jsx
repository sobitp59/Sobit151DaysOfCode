import React from 'react'

const students = [
    {
      id: 1,
      name: "John Doe",
      grade: 9,
      attendance: 85
    },
    {
      id: 2,
      name: "Jane Smith",
      grade: 10,
      attendance: 90
    },
    {
      id: 3,
      name: "Bob Johnson",
      grade: 11,
      attendance: 95
    },
    {
      id: 4,
      name: "Alice Lee",
      grade: 12,
      attendance: 80
    },
    {
      id: 5,
      name: "Tom Wilson",
      grade: 9,
      attendance: 92
    }
  ];
  

const Students = () => {
  return (
    <div>
        <h2>students</h2>
        <ul>
            {students.map(({id, name, grade, attendance}) => {
                return <li key={id}>{name} - {grade} - {attendance}</li>
            })}
        </ul>
    </div>
  )
}

export default Students;

// 7. Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component that takes the array of students as input and generates an ordered list of students, where each list item displays the student's name, grade, and attendance.