import React, { useEffect, useState } from 'react'
import fetchProduct from '../database/product'

const Product = () => {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})
    const [isSelected, setIsSelected] = useState(false)

    const getProductsData = async () => {
        const response = await fetchProduct('https://example.com/api/products')
        setProducts(response.data.products)
    }

    useEffect(() => {
        getProductsData()
    }, [])
  
    const handleSelectedProduct = (e) => {
        setIsSelected(true)
        const product = products.find(({name}) => name === e.target.value)
        setSelectedProduct(product)
    }

    const {name, src, desc, price} = selectedProduct;


    return (
    <div className='box'>
        <h1>products</h1>
        <div>
            {
                products.map(({name}) => <button onClick={handleSelectedProduct} value={name}>Show {name}</button>)
            }
        </div>
        <div>
            {
                isSelected && (
                    <>
                        <img src={src} alt={name} />
                        <h2>name : {name}</h2>
                        <h3>price : ${price}</h3>
                        <p>description : {desc}</p>                    
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Product