// 01: 1. Write a function that takes an array and returns all the numbers in a new array increased by 10.
const numbers = [1,2,3,4,5];

const increaseBy10 = numbers => numbers.map(num => num + 10);
console.log(increaseBy10(numbers)) // [ 11, 12, 13, 14, 15 ]