// 01: Given an array of numbers, use filter to return only the even numbers.

const getEven = numbers => numbers.filter(num => !(num%2));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getEven(numbers)); // [ 2, 4, 6, 8, 10 ]
