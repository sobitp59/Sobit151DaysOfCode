// Given an array of strings, use filter to return only the strings that contain the letter 'a'

const strings = ['apple', 'banana', 'cherry', 'orange', 'pear'];

const containeLetterA = strings.filter( string => string.includes('a'));
console.log(containeLetterA);
// [ 'apple', 'banana', 'orange', 'pear' ]