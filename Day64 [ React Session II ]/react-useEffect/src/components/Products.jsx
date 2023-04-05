import React, { useState } from 'react'
import { fetchProducts } from '../api/fetchProducts'

const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const data = await fetchProducts('https://example.com/api/products')
            if(data.status === 200){
                setProducts(data.data.products)
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='box'>
        <h1>products</h1>
        <button onClick={getProducts}>fetch products</button>
        <ul>
            {
                  products.map(({id, name, price, quantity}) => {
                    return <li key={id}>{name} - ${price} - {quantity}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Products