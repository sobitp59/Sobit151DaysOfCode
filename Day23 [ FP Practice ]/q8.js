// 08: Given an array of numbers, use reduce() to calculate the product of all the numbers in the array.

const numbers = [1, 2, 3, 4, 5];

const getProduct = numbers => numbers.reduce((total, currVal) => {
    return total * currVal;
})

console.log(getProduct(numbers)); //120