// 3. Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.


const numbers = [1,2,3,4,5,6,7,8,9];

const getNumbers = numbers => numbers.map((number, index) => !(index%2) ? number - 2 : (number%2) && number + 3 );

console.log(getNumbers(numbers));
// [ -1, 0, 1, 0, 3, 0, 5, 0, 7 ]