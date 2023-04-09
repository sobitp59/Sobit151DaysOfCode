import React, { useEffect, useState } from 'react'
import itemList from '../database/veg'

const Veg = () => {
    const [items, setItems] = useState(itemList)

    const getAll = () => {
        setItems(itemList);
    }



    const getVeggies = () => {
        const veg = itemList.filter(({category}) => category === 'Vegetable')
        console.log(veg)
        setItems(veg);
    }

    const getFruits = () => {
        const fruits = itemList.filter(({category}) => category === 'Fruit')
        setItems(fruits);
    }

    return (
    <div className='box'>
        <h1>veg-e-train</h1>
        <button onClick={getAll}>all</button>
        <button onClick={getVeggies}>vegetables</button>
        <button onClick={getFruits}>fruits</button>
        <div>
            {
                items.map(({id, name, category}) => {
                    return <p style={{color : category === 'Fruit' ? 'orange' : category === 'Vegetable' && 'green'}} key={id}>{name}</p>
                })
            }
        </div>
    </div>
  )
}

export default Veg