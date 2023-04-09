import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../database/products'

const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const products = await fetchProducts('https://example.com/api/products')
        setProducts(products.data.products)
    }

    useEffect(() => {
        getProducts();
    }, [])
    
    const filterProduct = () => {
        const filteredProducts = products.filter(({quantity}) => quantity > 20);
        setProducts(filteredProducts)
    }
    
    const filterPrice = () => {
        const filteredProducts = products.filter(({price}) => price < 100);
        setProducts(filteredProducts)
    }


    return (
    <div className='box'>
        <h1>awesome products</h1>
        <button onClick={filterProduct}>show products with quantity more than 20</button>
        <button onClick={filterPrice}>filter by price</button>
        <div>
            {
                products.map(({name, price, quantity}) => {
                    return <p>{name} - ${price} - {quantity}</p>
                })
            }
        </div>
    </div>
  )
}

export default Products