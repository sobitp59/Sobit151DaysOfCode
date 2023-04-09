import React from 'react';


// If the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is C, otherwise the grade is D.

const student = {
    name: 'John Doe',
    english: 90,
    maths: 80,
    computers: 70,
  }

const Student = ({student : {name, english, maths, computers}}) => {
    const totalMarks = english + maths + computers;
    const grade = totalMarks >= 225 ? "A" : totalMarks >= 180 ? "B" : totalMarks >= 150 ? "C" : "D";
    return (
    <div className='box'>
        <h1>student details</h1>
        <p>name : {name}</p>
        <p>english : {english}</p>
        <p>maths : {maths}</p>
        <p>computers : {computers}</p>
        <p>total marks : {totalMarks}</p>
        <p>grade : {grade}</p>
    </div>
  )
}

export default Student