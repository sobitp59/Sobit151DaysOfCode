import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const productStyle = {listStyle : 'none', border : '2px solid #000', margin : '10px', borderRadius : '10px', padding : '10px'}

const Product = (item) => {
  const {id, name, price} = item;
  const { handleCartUpdate, handleWishlistUpdate } = useContext(CartContext)

  return (
    <li key={id} style={productStyle}>
        <h3>{name} | ${price}</h3>
        <button onClick={()=>handleCartUpdate(item)}>add to cart</button>
        <button onClick={()=>handleWishlistUpdate(item)}>🧡</button>
    </li>
  )
}

export default Product