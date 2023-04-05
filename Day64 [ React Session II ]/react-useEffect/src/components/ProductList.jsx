import React, { useEffect, useState } from 'react';
import { fetchProductLists } from '../api/fetchProductLists';


const ProductList = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false);
    const [errorMesage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        try {
            setIsLoading(true)
            const data = await fetchProductLists('https://example.com/api/products');
            if(data.status === 200){
                setProducts(data.data.products);
            }
        } catch (error) {
            setIsError(true)
            setErrorMessage(error.message)
        } finally{
            setIsLoading(false)
            setIsError(true)
        }
    }
    

    useEffect(() => {
        fetchProducts();
    }, [])
    
    
    return (
    <div className='box'>
        <h1>product list</h1>
        <p>{isLoading && 'loading...'}</p>
        <p>{isError && errorMesage} </p>
        <div>
            {
                products.map(({name, price, quantity}) => {
                    return <p>{name} ${price} {quantity}</p>
                })
            }
        </div>
    </div>
  )
}

export default ProductList