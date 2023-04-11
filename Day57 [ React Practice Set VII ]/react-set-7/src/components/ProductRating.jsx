import React, { useEffect, useState } from 'react';
import { fetchProductRating } from '../DB/productrating';

const ProductRating = () => {
    const [products, setProducs] = useState([]);
    const [sortedProduct, setSortedProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const loadProducts = async() => {
        const response = await fetchProductRating('https://example.com/api/products');
        setProducs(response.data.products);

        const sortProducts = products.sort((a, b) => b.rating - a.rating)
        setSortedProduct(sortProducts)
    }

    const handleSearch = (e) => {

        setSearchTerm(e.target.value);
        const findProduct = products.filter(({name}) => name.toLowerCase().includes(searchTerm.toLowerCase()));

        setSortedProduct(findProduct)
    }

    useEffect(() => {
        loadProducts()
    }, [])
  
    return (
    <div className='box'>
        <h1>project rating</h1>
        <input onChange={handleSearch} type="search" placeholder='search..'/>
        <div>
            { 
                sortedProduct.map(({name, price, quantity, rating}) => {
                    return(
                        <>
                            <h2>{name}</h2>
                            <h3>Rating:{rating}</h3>
                            <h3>Price : ${price}</h3>
                            <h3>Quanity :{quantity}</h3>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductRating