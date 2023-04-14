import React, { useContext } from 'react';
import Product from '../components/Product';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const {cart, wishlist} = useContext(CartContext)
  // const {widhlists} = useContext(CartContext)

  return (
    <div>
        <h3>your awesome cart | items in cart : {cart.length}</h3>
        {cart?.map((item) => <Product {...item}/>)}
        <p><b>total price in cart :</b>${cart.reduce((total, {price}) => total + price, 0)}</p>
        <hr />
        <h3>items in wishlists : {wishlist.length}</h3>
        {wishlist?.map((item) => <Product {...item}/>)}
        <hr />
    </div>
  )
}

export default Cart