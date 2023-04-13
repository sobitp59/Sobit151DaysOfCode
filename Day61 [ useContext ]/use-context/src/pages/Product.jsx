import React, { useContext } from 'react'
import { CartItems } from '../Context'

const Product = ({product}) => {
    const {cart, setCart} = useContext(CartItems)
    
    return (
    <li className='product' key={product.id}>
    <h2>{product.name}</h2>
    <img className='img' src={product.image} />
    <h3>${product.price.substring(0,3)}</h3>

    {cart.includes(product) ? (
        <button onClick={() => setCart(cart.filter(item => item.id !== product.id))}>remove from cart</button>
    ) : (
    <button onClick={() => setCart(() => [...cart, product])}>add to cart</button>
    )}
</li>
      
    
  )
}

export default Product