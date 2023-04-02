import React from 'react'

const Product = ({products}) => {
  return (
    <div className='box'>
        <h1>products</h1>
        <ul>
            {
                products.map(({name}) => {
                    return <li>{name}</li>
                })
            }
        </ul>

        <h1>number of sales greater than quantity</h1>
        <ul>
            {
                products.filter(({quantity, sales}) => sales > quantity)
                .map(({name, quantity, sales}) => <li>name: {name}, sales:{sales}, quantity:{quantity}</li>)
            }
        </ul>
    </div>
  )
}

export default Product