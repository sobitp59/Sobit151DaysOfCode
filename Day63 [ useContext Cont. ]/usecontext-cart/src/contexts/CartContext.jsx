import { createContext, useState } from "react";


const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const onAddToCartClick = (cartProducts) => {
        setCartProducts((prevItems) => [...prevItems, cartProducts])

    }

    const onRemoveButtonClick = (cartProduct) => {
        const getProducts = cartProducts.filter(product => product.id !== cartProduct.id);
        setCartProducts(() => [...getProducts])
        console.log(getProducts)
    }
    

    const increaseProductQunatity = (cartProduct) => {
        setCartProducts((prevItems) => [...prevItems, cartProduct]);
    }

    
    const decreaseProductQunatity = (product) => {
        const index = cartProducts.indexOf(product);
        const updatedCart = [...cartProducts];
        updatedCart.splice(index, 1);
        setCartProducts(updatedCart);
      }
    

    return(
        <CartContext.Provider value={{cartProducts,onAddToCartClick, onRemoveButtonClick,increaseProductQunatity, decreaseProductQunatity}}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartContextProvider };

