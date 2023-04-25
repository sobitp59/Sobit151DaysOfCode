import React, { useContext, useState } from 'react';
import FoodItem from '../components/FoodItem';
import { FoodContext } from '../contexts/FoodContext';

const Cart = () => {
  const [isApplyCoupon, setIsApplyCoupon] = useState(false)
  const {cartItems, increaseCount, decreaseCount, handleDeleteCart} = useContext(FoodContext);
  const totalQuantity = cartItems.reduce((total, {quantity}) => total + quantity , 0);
  const totalPrice = cartItems.reduce((total, {price, quantity}) => total + (price * quantity)  , 0).toFixed(2)
  
  const handleApplyCoupon = () => {
    setIsApplyCoupon(prev => !prev)
    // return totalPrice - 5;
  }

  return (
    <div>
      <h1>cart items</h1>
      <h2>Total quantity : {totalQuantity}</h2>
      <h2>Total price : ${isApplyCoupon ? totalPrice - 5 : totalPrice }</h2>
      <button onClick={totalPrice > 5 && handleApplyCoupon}>{isApplyCoupon ? "remove coupon" : "apply coupon"}</button>
      <div className='menu'>
        {cartItems.map((item) => {
          return(
            <div className="food__card" key={item.id}>
              <img className="food__image" src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>price : ${item.price}</p>
              <p>delivery time : {item.delivery_time}min</p>
             
              <p>
                <button onClick={() => increaseCount(item.id)}>+</button> {item.quantity} <button onClick={() => decreaseCount(item.id)}>-</button>
              </p>
             <button onClick={() => handleDeleteCart(item.id)}><span className="material-symbols-outlined">delete</span></button>
        </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart