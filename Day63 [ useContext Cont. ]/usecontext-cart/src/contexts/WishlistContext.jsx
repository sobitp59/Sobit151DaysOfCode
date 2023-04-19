import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { ProductContext } from "./ProductsContext";

const WishlistContext= createContext();

const WishlistContextProvider = ({children}) => {
    const [wishlists, setWishlists] = useState([]);

    const {onAddToCartClick} = useContext(CartContext);

    const handleWishlistAdd = (product) => {
        setWishlists(prev => [...prev, product])
    }

    const handleWishlistRemove = (product) => {
        const getProducts = wishlists.filter(item => item !== product)
        setWishlists([...getProducts])
    }

    const onMoveToCartClick = (product) => {
        onAddToCartClick(product)
        handleWishlistRemove(product)
    } 

    console.log(wishlists)

    return (
        <WishlistContext.Provider value={{wishlists, handleWishlistAdd, handleWishlistRemove, onMoveToCartClick}}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistContextProvider, WishlistContext };

