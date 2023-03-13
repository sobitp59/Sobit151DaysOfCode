import React from 'react'

const cookbook = [
    {
      id: 1,
      recipeName: "Spaghetti Carbonara",
      creatorName: "Jamie Oliver"
    },
    {
      id: 2,
      recipeName: "Chicken Tikka Masala",
      creatorName: "Madhur Jaffrey"
    },
    {
      id: 3,
      recipeName: "Ratatouille",
      creatorName: "Julia Child"
    },
    {
      id: 4,
      recipeName: "Beef Bourguignon",
      creatorName: "Anthony Bourdain"
    },
    {
      id: 5,
      recipeName: "Chocolate Cake",
      creatorName: "Nigella Lawson"
    }
  ];
  

const Recipe = () => {
  return (
    <div>
        <h2>reccipe book</h2>
        <ul>
            {cookbook.map(({id, recipeName, creatorName}) => {
                return <li key={id}>{recipeName} - {creatorName}</li>
            })}
        </ul>
    </div>
  )
}

export default Recipe;

// 5. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component that takes the array of recipes as input and returns an unordered list, where each list item displays the recipe's name and recipe creator name.