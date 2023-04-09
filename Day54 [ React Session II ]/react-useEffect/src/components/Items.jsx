import React, { useState } from 'react'
import { fetchItems } from '../api/fetchItems'

const Items = () => {
    const [items, setItems] = useState([])
    
    const getItems = async () => {
        const response = await fetchItems('https://example.com/api/cart')
        console.log(response.data.cart)
        setItems(response.data.cart)
    }
    
    const getItemsGT50 = () => {
        const filteredItems = items.filter(({price}) => price > 50)
        setItems(filteredItems)
    }
    
    return (
    <div className='box'>
        <h1>items</h1>
        <button onClick={getItems}>fetch items</button>
        <button onClick={getItemsGT50}>fetch items greater than 50</button>
        <div>
            {
                items.map(({name, price, quantity}) => {
                    return <p>{name} ${price} Q-{quantity}</p>
                })
            }
        </div>
    </div>
  )
}

export default Items