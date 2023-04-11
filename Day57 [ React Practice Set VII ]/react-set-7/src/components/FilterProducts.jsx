import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../DB/filterproducts';

const FilterProducts = () => {
    const [originalProducts, setOriginalProducts] = useState([])
    const [productLists, setProductLists] = useState([])

    const loadProducts = async () => {
        const response = await fetchProducts('https://example.com/api/products');
        console.log(response.data.products);
        setProductLists(response.data.products);
        setOriginalProducts(response.data.products);
    }

    const sortByLowToHigh = () => {
        const sortedProducts = [...productLists].sort((a, b) => a.price - b.price)
        console.log(sortedProducts); 
        setProductLists(sortedProducts)
    }
    
    const sortByHighToLow = () => {
        const sortedProducts = [...productLists].sort((a, b) => b.price - a.price)
        console.log(sortedProducts); 
        setProductLists(sortedProducts)
    }
    
    const resetProducts = () => {
        setProductLists(originalProducts)
    }

    useEffect(() => {
        loadProducts();
    }, [])

    return (
    <div className='box'>
        <h1>filter products</h1>
        <button onClick={sortByLowToHigh}>sort by low to high</button>
        <button onClick={sortByHighToLow}>sort by high to low</button>
        <button onClick={resetProducts}>reset</button>
        <div>
            {
                productLists.map(({name, description, price, quantity}) => {
                    return(
                        <div key={name}>
                            <h2>{name}</h2>
                            <h3>${price} : Q{quantity}</h3>
                            <p>{description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FilterProducts