// Use the Spread Operator to Evaluate Arrays In-Place

// ex1
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus); // arr

// ex2
const spreded = [...arr]
console.log(spreded)

//ex3
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);