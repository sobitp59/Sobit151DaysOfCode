//13: Given an array of numbers, use reduce() to calculate the average of all the numbers in the array.

const numbers = [1, 2, 3, 4, 5];

const getAverage = numbers => numbers.reduce((sum, num, index, array) => {
    sum += num;
    if(index === array.length - 1){
        return sum / array.length;
    }
    return sum
})

console.log(getAverage(numbers)); // 3