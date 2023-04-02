import React from 'react'

const Product = ({name, price}) => {
  return (
    <div className='box'>
        <h1>products</h1>
        <p style={{fontStyle : 'bold', color : 'blue'}}>name : {name}</p>
        <p style={{fontStyle : 'italic', color
    : 'green'}}>price : {price}</p>
    
    </div>
  )
}

export default Product