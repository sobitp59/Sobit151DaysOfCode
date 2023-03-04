// 2. Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

const numbers = [1,2,3,4,5,6,7,8,9];

const getNumbers = numbers => numbers.map(num => !(num % 2) ? num * 20 : (num % 2) && num * 30 )

console.log(getNumbers(numbers))
// [ 30,  40,  90,  80, 150, 120, 210, 160, 270 ]
  