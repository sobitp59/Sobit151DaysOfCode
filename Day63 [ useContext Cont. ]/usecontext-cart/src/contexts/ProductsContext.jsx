import { createContext, useEffect, useState } from 'react';

const ProductContext = createContext()

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
  
    const loadProducts = async () => {  
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
      loadProducts()
    }, [])


    return(
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductsProvider };

