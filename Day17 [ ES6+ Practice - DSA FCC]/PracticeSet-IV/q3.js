// write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.
// Your ES6 code here

const convertEvenToOdd = (arr) => {
    let index = 0;
    for(const num of arr) {
        if(!(num % 2)){
            arr[index] += 1;
        }
        index++;
    }
    return arr;
}



var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]