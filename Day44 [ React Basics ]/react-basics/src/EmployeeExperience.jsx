import React, { useState } from 'react'

const EmployeeExperience = ({employeeList}) => {
  const [highlightEmployees, setHighlightEmployees] = useState(false)

  const highlightEmployee = () => setHighlightEmployees(prevState => !prevState)

  return (
    <div className='box'>
        <h1>experienced emp.</h1>
        <ol style={{listStyle : 'none'}}>
            {
                employeeList.map(({id, name, workExperience}) => (
                    <li style={{outline : workExperience > 5 && highlightEmployees && "1px solid green", padding : '4px', borderRadius : '6px'}} key={id}>name: {name}  experience : {workExperience}</li>
                ))
            }
        </ol>
        <button onClick={highlightEmployee}>highlight employee</button>
    </div>
  )
}

export default EmployeeExperience