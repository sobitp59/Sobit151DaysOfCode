import React, { useContext, useEffect, useState } from 'react'
import { CartItems } from '../Context'
import Product from './Product'

const Cart = () => {
    const [total, setTotal] = useState(0)
    const {cart, setCart} = useContext(CartItems)


    useEffect(() => {
        setTotal(cart.reduce((tottalCost, curr) => tottalCost + Number(curr.price) ,0));
    }, [cart])


  return (
    <div>
        <h1>cart page</h1>
        <hr />
        <p><b>total </b> : {total}</p>
        <ul className='products'>
        {cart.map((product) => <Product product={product}/>)}
        </ul>
    </div>
  )
}

export default Cart