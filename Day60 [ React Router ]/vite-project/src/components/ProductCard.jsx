import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({id, name, price, currency, memory, details, noDetail}) => {
  return (
    <div>
        <li style={{border : '2px solid black', margin: '10px'}}>
            <h2>{name} {memory}GB</h2>
            <p>{price} {currency}</p>
            {noDetail && <Link to={`/category/product/${id}`}>view details</Link> }
            {!noDetail && <p>{details}</p>  }
        </li>
    </div>
  )
}

export default ProductCard