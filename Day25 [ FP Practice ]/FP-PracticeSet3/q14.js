// Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.

const strings = ['Hello', ' ', 'world', '!'];
// Your code here

const concatenateStrings = strings => strings.reduce((concatedString, word) => concatedString + word )

console.log(concatenateStrings(strings)); 
// Output: "Hello world!"

