import React from 'react';

const ShoppingCart = () => {

  const total = 45;  
  
  const items = [
      { id: 1, name: 'Book', price: 10 },
      { id: 2, name: 'T-Shirt', price: 15 },
      { id: 3, name: 'Hat', price: 8 },
      { id: 4, name: 'Sunglasses', price: 12 },
  ];
    
  return (
    <div>
        <h2>shopping cart</h2>
        <ul>
            {items.map((item) => {
                return <li key={item.id}>{item.name} : {item.price}</li>;
            })}
        </ul>
        <p>total price : {total}</p>
    </div>
  )
}

export default ShoppingCart