// 01: Using reduce() to sum up all the elements in an array:


const numbers = [1, 2, 3, 4, 5];

console.log('USING REDUCE METHOD')
const sum = numbers.reduce((currTotal, currentValue) => {
    console.log(currTotal, currentValue)
    let total = currTotal + currentValue;
    return total;
}, 0)

console.log(sum);

// ---------------------------------------------------------- //

console.log('DOING MANUALLY')
const sumOfNumbers = (acc, curr) => {
    console.log(acc, curr);
    return acc + curr;
}

let currTotal = 0;
for(let i = 0; i < numbers.length; i++){
    currTotal = sumOfNumbers(currTotal, numbers[i])
}
// currTotal = sumOfNumbers(currTotal, numbers[1])
// currTotal = sumOfNumbers(currTotal, numbers[2])
// currTotal = sumOfNumbers(currTotal, numbers[3])
// currTotal = sumOfNumbers(currTotal, numbers[4])
console.log(currTotal)
