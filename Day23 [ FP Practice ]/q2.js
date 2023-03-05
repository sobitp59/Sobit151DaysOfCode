// 02: Using reduce() to find the maximum value in an array:


let numbers = [5, 20, 100, 60, 1];

// USING REDUCE METHOD
const getMaxNumber = numbers => numbers.reduce((max, currValue) => {
    return max < currValue ? max = currValue : max;
}, 0)

console.log(getMaxNumber(numbers))



// USING MANUAL WAY TO DO THIS
const getMax = (max, curr) => {
    return max < curr ? max = curr : max;
}

let max = 0;
max = getMax(max, numbers[0])
max = getMax(max, numbers[1])
max = getMax(max, numbers[2])
max = getMax(max, numbers[3])
max = getMax(max, numbers[4])
console.log(max);