//Example 01:
let contacts = ["Mary", "Joel", "Danny"];
let personalFriends = [...contacts, "John", "Jane"]
console.log(personalFriends)
// [ 'Mary', 'Joel', 'Danny', 'John', 'Jane' ]


//Example 02:
let person = {
    name : 'John Sharma',
    age : 23,
    city : 'USM'
}

let employee = {
    ...person,
    salary : "$12K",
    position : 'Frontedn Developer'
}

console.log(employee)
// {
//     name: 'John Sharma',
//     age: 23,
//     city: 'USM',
//     salary: '$12K',
//     position: 'Frontedn Developer'
// }


/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const newShoppingList = [...shoppingList, "potato", "tomato"]

console.log(newShoppingList);
[ 'eggs', 'milk', 'butter', 'potato', 'tomato' ]
