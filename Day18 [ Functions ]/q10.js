// Given an array of numbers, use map and filter to return the sum of the squares of only the even numbers in the array.
const numbers = [1, 2, 3, 4, 5];

const squareOfEven = numbers.filter(number => !(number % 2)).map(number => number*number);

console.log(squareOfEven);
// [ 4, 16 ]