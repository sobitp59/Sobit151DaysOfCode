// Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21] 

// Your code here
const sumOfEvenNumbers = numbers => numbers.reduce((sumOfEven, num) => {
    !(num % 2) ?  sumOfEven + num : sumOfEven;
    return sumOfEven
}, 0)



console.log(sumOfEvenNumbers(numbers))
// Output: 18