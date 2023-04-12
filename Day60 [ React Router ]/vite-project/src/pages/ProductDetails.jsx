import React from 'react';

import { Link, useParams } from 'react-router-dom';
import phonesDB from '../DB/phonesDB';
import ProductCard from '../components/ProductCard';



const ProductDetails = () => {
  const {productID} = useParams();
  
  const getProductDetails = (products, productid) => {
        return products.find((product) => product.id === productid)
  }

  const product = getProductDetails(phonesDB.data, productID);

  return (
    <div>
        <h1>product details</h1>
        <ProductCard {...product} />
        <Link to={'/category'}>go back</Link>
    </div>
  )
}

export default ProductDetails