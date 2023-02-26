// 02: Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.
// Your ES6 code here

const calculateAverage = (arr) => {
    let sumAverage = 0;
    let countElement = 0;
    for(let val of arr){
        sumAverage += val;
        countElement += 1;
    }

    return sumAverage / countElement;
}


console.log(calculateAverage([1, 2, 3, 4, 5])); // 3