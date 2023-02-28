// Given an array of strings, use map to return a new array with each string reversed.

const strings = ['hello', 'world', 'javascript'];

const reversedStringArray = strings.map(string => string.split('').reverse().join(''));
console.log(reversedStringArray);
// [ 'olleh', 'dlrow', 'tpircsavaj' ]