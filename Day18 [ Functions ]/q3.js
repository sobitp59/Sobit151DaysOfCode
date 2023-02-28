// Given an array of numbers, use filter to return only the even numbers.
const numbers = [1, 2, 3, 4, 5];

const getEvenNumbers = numbers.filter(number => !(number%2));
console.log(getEvenNumbers);