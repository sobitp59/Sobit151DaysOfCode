import React from 'react'
import Product from '../components/Product'
import { products } from '../data/productsDB'

const ProductsListingPage = () => {
  return (
    <div>
        <ul>
            {
                products.map((product) => <Product {...product} />)
            }
        </ul>
    </div>
  )
}

export default ProductsListingPage