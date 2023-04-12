import React from 'react'
import phonesDB from '../DB/phonesDB'
import ProductCard from '../components/ProductCard'

const Category = () => {
  return (
    <div>
        <h1>Category</h1>
        <h3>iphones</h3>
        <ul>
          {
            phonesDB.data.map(product => <ProductCard {...product} noDetail />)
          }
        </ul>
    </div>
  )
}

export default Category