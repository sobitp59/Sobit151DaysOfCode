import React from 'react'

const EmployeeCard = ({designation, name, workexperience }) => {
  return (
    <div className='box'>
      <p><span style={{color : "blue"}}>designation</span>  : {designation}</p>
      <p>name : {name}</p>
      <p><span style={{color : "green"}}>work experience</span> : {workexperience}</p>
    </div>
  )
}

export default EmployeeCard