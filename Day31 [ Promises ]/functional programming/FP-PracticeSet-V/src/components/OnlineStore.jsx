import React from 'react';

const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 50.00,
      category: "Electronics"
    },
    {
      id: 2,
      name: "Leather Jacket",
      price: 150.00,
      category: "Clothing"
    },
    {
      id: 3,
      name: "Fitness Tracker",
      price: 80.00,
      category: "Health & Fitness"
    },
    {
      id: 4,
      name: "Smartphone",
      price: 500.00,
      category: "Electronics"
    },
    {
      id: 5,
      name: "Running Shoes",
      price: 100.00,
      category: "Sports"
    }
];
  

const OnlineStore = () => {
  return (
    <div>
        <h2>online store</h2>
        <ol>
            {products.map(({id, name, price, category}) => {
                return <li key={id}>{name} - {price} - {category}</li>
            })}
        </ol>
    </div>
  )
}

export default OnlineStore;

// 9. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component that takes the array of products as input and generates an ordered list of products, where each list item displays the product's name, price, and category.