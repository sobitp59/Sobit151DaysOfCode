import React, { useContext } from 'react';
import { WishlistContext } from '../contexts/WishlistContext';

import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Wishlist = () => {
    const {wishlists} = useContext(WishlistContext);
    const {handleWishlistRemove, onMoveToCartClick} = useContext(WishlistContext);

  return (
    <div className='products-data'>
    { wishlists.length > 0 ? (
      <ul className='products'>
      { 
        wishlists.map((product) =>{
          return(
            <li key={product.id} className='products__product '>
                <div>
                  <img className='products__image' src={product.image} alt={product.title} />
                  <h3 className='product__name'>{product.title}</h3>
                </div>
                <div className='products__basicinfo'>
                  <p>⭐{product?.rating?.rate}</p>
                  <p className='category'>{product.category}</p>
                </div>
                <div className='products__basicinfo'>
                  <h2 className='product__price'><sup>&#8377;</sup>{product.price.toFixed(0)}</h2>
                  <button onClick={() => onMoveToCartClick(product)} className='product__add_cart__btn'>move to cart</button>
                </div>
                <button 
                    className='wishlist__btn' 
                    onClick={() => handleWishlistRemove(product)}
                >
                   <i class="fa-solid fa-trash"></i>
                </button>
          </li>
          ) 
        } )
      }
      </ul>
      ) : (
        <div className='wishlist__page'>
          <div>
            <h1>nothing in the wishlist. add somethingg</h1>
            <Link className='btn-details' to={`/`}>go to home</Link>
          </div>
        </div>
    )}  
    
      </div>
  )
}

export default Wishlist