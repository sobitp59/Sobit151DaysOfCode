// Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here

const totalLength = strings => strings.reduce((totalLength, string) => {
    return totalLength + string.length;
}, 0)


console.log(totalLength(strings));
// Output: 30