// Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers = [1, 2, 3, 4, 5];

// Your code here
const sumSquares = numbers => numbers.reduce((totalSum, number) => {
    return totalSum + (number * number);
}, 0)


console.log(sumSquares(numbers));
 // Output: 55 