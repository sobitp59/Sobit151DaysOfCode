import React from 'react';


const Sum = ({numberOne, numberTwo}) => {
  return (
    <div className='box'>
        <h1 style={{color : 'green'}}>sum of numbers</h1>
        <p><span style={{fontSize : '20px'}}>number 1</span>: {numberOne}</p>
        <p><span style={{fontSize : '20px'}}>number 2</span>: {numberTwo}</p>
        <p><span style={{fontSize : '20px'}}>total</span>: {numberOne + numberTwo}</p>
    </div>
  )
}

export default Sum