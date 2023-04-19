import Product from '../components/Product';

import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductsContext';

const ProductsListings = () => {
    const products = useContext(ProductContext)
    
    
  return (
    <div className='products-data'>
      <ul className='products'>
        {
          products.map((product) =>{
            return(
              <Product  product={product} key={product.id} />
            ) 
          } )
        }
      </ul>
    </div>
  )
}

export default ProductsListings