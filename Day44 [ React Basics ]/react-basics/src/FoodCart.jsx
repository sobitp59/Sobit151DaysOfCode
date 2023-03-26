import React from 'react'

const FoodCart = ({food}) => {
  return (
    <div className='box'>
        <h1>sobit's food truck</h1>
        <ol style={{listStyle : "none"}}>
            {
                food.map(({id, name, price}) => (
                    <li key={id}> {name} price : {price}</li>
                ))
            }
        </ol>
        <h3>total price : {food.reduce((total, {price}) => total + price, 0)}</h3>
    </div>
  )
}

export default FoodCart
