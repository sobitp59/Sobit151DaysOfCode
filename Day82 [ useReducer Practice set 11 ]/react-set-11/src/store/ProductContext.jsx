import { createContext, useContext } from "react";

import { productsData } from "../database/ProductsDB";

const ProductCotext = createContext();


export const ProductCotextProvider = ({children}) => {
    return(
        <ProductCotext.Provider value={{data : productsData}}>
            {children}
        </ProductCotext.Provider>
    )
}

export const useProducts = () => {
    return useContext(ProductCotext)
}

