// 05: Given an array of objects with name, price, and quantity properties, use map to return a new array with each object's total property calculated as price * quantity.

const getTotal = items => items.map(item => ({...item, total : item.price * item.quantity}));

const items = [
    { name: 'apple', price: 0.5, quantity: 10 },
    { name: 'banana', price: 0.25, quantity: 20 },
    { name: 'cherry', price: 0.1, quantity: 50 },
    { name: 'orange', price: 0.3, quantity: 15 },
    { name: 'pear', price: 0.2, quantity: 25 }
];

console.log(getTotal(items));

// [
//     { name: 'apple', price: 0.5, quantity: 10, total: 5 },
//     { name: 'banana', price: 0.25, quantity: 20, total: 5 },
//     { name: 'cherry', price: 0.1, quantity: 50, total: 5 },
//     { name: 'orange', price: 0.3, quantity: 15, total: 4.5 },
//     { name: 'pear', price: 0.2, quantity: 25, total: 5 }
//   ]