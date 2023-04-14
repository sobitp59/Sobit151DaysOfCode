import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContexProvidrer = ({children}) => {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    console.log(cart)
    console.log(wishlist)

    const handleCartUpdate = (cart) => {
        setCart((prevCartItens) => [...prevCartItens, cart])
    }

    const handleWishlistUpdate = (wishlist) => {
        setWishlist((prevLits) => [...prevLits, wishlist])
    }


    return(
    <CartContext.Provider value={{cart, handleCartUpdate, wishlist, handleWishlistUpdate}} >
        {children}
   </CartContext.Provider>)
} 
