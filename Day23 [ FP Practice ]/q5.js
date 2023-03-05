// 05: Given an array of numbers, use reduce() to calculate the sum of all the even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// USING REDUCE METHOD
const getSum = (currSum, currValue) => {
    return !(currValue%2) ? currSum + currValue : currSum;
}
const getSumOfEvenNumbers = numbers => numbers.reduce(getSum, 0);
console.log(getSumOfEvenNumbers(numbers)); // 30


// USING MANUAL WAY
const getSumOfEven = (currSum, currValue) => {
    return !(currValue%2) ? currSum + currValue : currSum;
}

let totalEvenSum = 0;
totalEvenSum = getSumOfEven(totalEvenSum, numbers[0])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[1])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[2])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[3])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[4])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[5])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[6])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[7])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[8])
totalEvenSum = getSumOfEven(totalEvenSum, numbers[9])
console.log(totalEvenSum);