import React from 'react';

const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 499.99,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Laptop",
      price: 899.99,
      category: "Electronics"
    },
    {
      id: 3,
      name: "T-Shirt",
      price: 19.99,
      category: "Clothing"
    },
    {
      id: 4,
      name: "Sneakers",
      price: 79.99,
      category: "Footwear"
    },
    {
      id: 5,
      name: "Headphones",
      price: 149.99,
      category: "Electronics"
    }
  ];
  

const ProductList = () => {
  return (
    <div>
        <h2>product list</h2>
        <ul>
            {products.map(({id, name, price, category}) => {
                return <li key={id}>{name} - {price} - {category}</li>
            })}
        </ul>
    </div>
  )
}

export default ProductList;


// 2 Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and returns an unordered list of products, where each list item displays the product's name, price, and category.