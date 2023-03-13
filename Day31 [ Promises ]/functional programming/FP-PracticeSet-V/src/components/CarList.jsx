import React from 'react';

const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      price: 25000
    },
    {
      id: 2,
      make: "Honda",
      model: "Accord",
      price: 27000
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      price: 35000
    },
    {
      id: 4,
      make: "Tesla",
      model: "Model S",
      price: 80000
    },
    {
      id: 5,
      make: "Chevrolet",
      model: "Camaro",
      price: 40000
    }
  ];
  

const CarList = () => {
  return (
    <div>
        <h2>carlist</h2>
        <ul>
        {cars.map(({id, make, model, price}) => {
            return <li key={id}>{make} - {model} - {price}</li>
        })}
        </ul>
    </div>
  )
}

export default CarList;

// 6. Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component that takes the array of cars as input and returns an unordered list of cars, where each list item displays the car's make, model, and price.