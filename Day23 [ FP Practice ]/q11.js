// 11: Given an array of numbers, use reduce() to find the largest number in the array.

const numbers = [4, 2, 7, 5, 1, 8, 3, 10];

const largest = numbers => numbers.reduce((largest, curr) => {
    curr > largest ? largest = curr : largest;
    return largest
}, 0)

console.log(largest(numbers)) // 10