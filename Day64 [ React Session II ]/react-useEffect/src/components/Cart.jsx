import React, { useEffect, useState } from 'react'
import { fetchCart } from '../api/fetchCart'

const Cart = () => {
    const [cartItems, setCartItems] = useState([])

    const getCartItems = async () => {
        const response = await fetchCart('https://example.com/api/wishlist')
        const data = response.data.wishlist
        setCartItems(data);
    }

    useEffect(() => {
        getCartItems();
    }, [])

    const getFilteredItems = () => {
        const filteredItems = cartItems.filter(({price}) => price > 100 )
        setCartItems(filteredItems)
    }

  return (
    <div className='box'>
        <h1>shopping cart</h1>
        <button onClick={getFilteredItems}>fetch items greater than 100</button>
        <div>
            {
                cartItems.map(({name, price, quantity}) => {
                    return <p>{name} - {price} - {quantity}</p>
                })
            }
        </div>
    </div>
  )
}

export default Cart