// Write an ES6 function that takes an array of objects representing products with properties name, price and category. Return all the products object that are in the category "electronics".

const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
  // Your code here
  const getAllElectronicProducts = products => products.filter(({category}) => category === 'electronics')
  
  
  const electronicProducts = getAllElectronicProducts(products);
  console.log(electronicProducts); 
  // Output: [{ name: "iPad", price: 799, category: "electronics" }, { name: "Smartwatch", price: 199, category: "electronics" }]

