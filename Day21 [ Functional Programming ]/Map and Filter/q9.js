// Suppose you have an array of objects representing products in an online
// store, with properties for name, price, and category. You want to create 
// a new array with the names of all products in the "electronics" category, 
// with prices rounded to the nearest dollar.

const getProducts = products => products.filter(({category}) => category === 'electronics').map(({name, price}) => ({name, price : Math.round(price)}));


const products = [
    { name: 'iPhone', price: 799.98, category: 'electronics' },
    { name: 'MacBook Pro', price: 1499.88, category: 'electronics' },
    { name: 'Hoodie', price: 49.85, category: 'apparel' },
    { name: 'Sneakers', price: 99.65, category: 'apparel' },
    { name: 'Frying pan', price: 29.89, category: 'home goods' },
    { name: 'Blender', price: 79.56, category: 'home goods' }
];

console.log(getProducts(products))

// [
//  { name: 'iPhone', price: 800 },
//  { name: 'MacBook Pro', price: 1500 }
// ]