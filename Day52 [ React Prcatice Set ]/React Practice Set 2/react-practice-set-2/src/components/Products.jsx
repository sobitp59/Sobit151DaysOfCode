import React from 'react'

const Products = ({product}) => {
  return (
    <div className='box'>
        <h1>awesome phones</h1>
        <ul>
            {
                product.filter(({name}) => name === 'mobile')
                .map(({id, name, description, price}) => <li key={id}>{name} - {description} - ₹{price}</li>)
            }
        </ul>
        
    </div>
  )
}

export default Products