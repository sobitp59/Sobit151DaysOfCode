import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../apis/ecommerce';

const ECommmerce = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetchProducts('https://example.com/api/products');
    if(response.status === 200){
      setProducts(response.data.products);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])


//   brand
// : 
// "Apple"
// category
// : 
// "Smartphones"
// description
// : 
// "6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield front cover. A15 Bionic chip. 5G capable. Pro camera system. "
// id
// : 
// 1
// name
// : 
// "Apple iPhone 13 Pro Max"
// price
// : 
// 1099
// quantity
// : 
// 10

  console.log(products)
  return (
    <>
      <h2>E-Commmerce - product listing page</h2>
      <hr />
      <ul>
        {
          products.map((product) => {
            return <li key={product.id} style={{border :'2px solid', margin : '10px'}}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>category:</strong>{product.category} || <strong>brand:</strong>{product.brand}</p>
              <p><strong>quantity:</strong>{product.quantity} || <strong>price:</strong>{product.price}</p>
            </li>
          })
        }
      </ul>
    </>
  )
}

export default ECommmerce