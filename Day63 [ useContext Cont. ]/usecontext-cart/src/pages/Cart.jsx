import React, { useContext } from 'react';
import CartProduct from '../components/CartProduct';

import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/CartContext';


const Cart = () => {
  const {cartProducts} = useContext(CartContext);

  console.log(cartProducts)


  return (
    <div className='cart'>
     
      {cartProducts.length > 0 ? (
        <>
        <ul className='products__cart'>
        {
          cartProducts.reduce((cartProduct, curr) => {
          let isDuplicate = false;
  
          for(let product of cartProduct){
            if(product.id === curr.id) {
              isDuplicate = true;
              break;
          }
        }
  
          if(!isDuplicate){
            cartProduct.push(curr)
          }
  
          return cartProduct
          }, []).map((product) => <CartProduct product={product} key={product.id} />)
        }
        </ul>
        <div className='cart__total'>
          <h3 className='total__price'>total price</h3>
          <h3>&#8377;{cartProducts.reduce((total, {price}) => total + price, 0 ).toFixed(2)}</h3>
          <button className='buy'>proceed to buy {cartProducts.length} items</button>
        </div>
        </>
      ) : (
        <div className='empty__cart'>
          <div>
            <h1>cart is empty.</h1>
            <Link className='btn-details' to={`/`}>buy something!</Link>
          </div>
        </div>
     
      )}
    </div>

  )
}

export default Cart

