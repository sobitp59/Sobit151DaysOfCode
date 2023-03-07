// Write an ES6 function that takes an array of objects representing products with properties name, price, and category. Return the first product object that is in the category "electronics".

const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
// Your code here
const findElectronicsProduct = products => products.find(({category}) => category === 'electronics');  
  
const electronicsProduct = findElectronicsProduct(products);
console.log(electronicsProduct); 
// Output: { name: "iPad", price: 799, category: "electronics" }