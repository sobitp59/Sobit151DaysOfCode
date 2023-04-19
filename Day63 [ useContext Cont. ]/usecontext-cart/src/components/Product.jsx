import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../contexts/WishlistContext';

const Product = ({product}) => {
  const {wishlists, handleWishlistAdd, handleWishlistRemove} = useContext(WishlistContext);
  

  return (
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
                  <Link className='btn-details' to={`/product/${product.id}`}>view details</Link>
                </div>
                { !wishlists.includes(product) ? (
                <button 
                    className='wishlist__btn' 
                    onClick={() => handleWishlistAdd(product)}>
                    <i class="fa-regular fa-heart"></i>
                </button>

                ) : (
                <button 
                    className='wishlist__btn' 
                    onClick={() => handleWishlistRemove(product)}
                >
                    <i class="fa-solid fa-heart"></i>
                </button>

                )}
    </li>
  )
}

export default Product