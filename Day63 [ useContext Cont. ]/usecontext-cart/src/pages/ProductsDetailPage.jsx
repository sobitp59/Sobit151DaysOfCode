import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { useContext } from 'react';
import Product from '../components/Product';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductsContext';
import { WishlistContext } from '../contexts/WishlistContext';

const ProductsDetailPage = () => {
  const products = useContext(ProductContext)
  const {productID} = useParams();
  const {cartProducts, onAddToCartClick} = useContext(CartContext)
  
  const product = products.find(({id}) => id === Number(productID));


  return (
    <>
      <div key={product.id} className='product__detail '>
                <div className='product-info'>
                  <img className='product__image' src={product?.image} alt={product.title} />
                  <h3 className='product__title'>{product.title}</h3>
                </div>
                <div className='products__basicinfo'>
                  <p>⭐{product?.rating?.rate}</p>
                  <p className='product__category'>{product.category}</p>
                </div>
                        <p className='product__description'>{product.description}</p>
                <div className='products__basicinfo'>
                  <h2 className='product__price-detail'><sup>&#8377;</sup>{product.price.toFixed(0)}</h2>
                  <div className='product__btns'>

                        {
                          cartProducts.includes(product) ? 
                          <div>
                            <Link className='cart_go_to_btn' to={'/cart'}>go to cart</Link>
                          <button className='product__added_cart__btn' disabled>added to cart</button>  </div>: 
                          
                          <button className='product__add_cart__btn' onClick={() => onAddToCartClick(product)}>add to cart</button>
                        }
                         
                 
                  </div>
                </div>
    </div>
    </>
  )
}

export default ProductsDetailPage;