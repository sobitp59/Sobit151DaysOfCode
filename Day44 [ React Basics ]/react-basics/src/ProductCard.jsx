import React, { useState } from 'react';

const ProductCard = ({product, productName, maxPrice}) => {
  const [highlightProduct, setHighlightProduct] = useState(false)

  const highlighBudget = () => setHighlightProduct(true)
  const toggleHighlighBudget = () => setHighlightProduct(prev => !prev)

  return (
    <div className='box'>
      <h1>{productName}</h1>
      <h3>my budget is : {maxPrice}</h3>
      <ol style={{listStyle : 'none'}}>
        {
          product.map(({id, name, price}) => {
            return <li style={{color : price > maxPrice && highlightProduct && 'red'}} key={id}>{name} : INR {price}</li>
          })
        }
      </ol>
      <button onClick={highlighBudget}>highlight budget products</button>
      <button onClick={toggleHighlighBudget}>toggle</button>
    </div>
  )
}

export default ProductCard

