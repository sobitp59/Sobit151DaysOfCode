// Given an array of strings, use filter to return only the strings that have more than 5 characters.
const strings = ['apple', 'banana', 'cherry', 'orange', 'pear'];

const stringGreaterThan5 = strings.filter(string => string.length > 5);
console.log(stringGreaterThan5);