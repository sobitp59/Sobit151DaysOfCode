import React from 'react';

const Certification = ({studentData}) => {
    const mean = studentData.reduce((meanValue, {marks}) => meanValue + marks / studentData.length, 0)
    
  return (
    <div className='box'>
        <h1>certification</h1>
        {
            studentData.map(({name, marks}) => {
                if(marks >= mean){
                    return <h2>{name} : certification approved!</h2>
                }
                return <h2>{name} : certification not approved!</h2>

            })
        }   
    </div>
  )
}

export default Certification