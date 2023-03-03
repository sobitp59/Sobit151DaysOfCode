// 03: Given an array of strings, use filter to return only the strings that are longer than 5 characters.

const getStrings = strings => strings.filter(string => string.length > 5)

const strings = ['apple', 'banana', 'cherry', 'orange', 'pear'];
console.log(getStrings(strings));
// [ 'banana', 'cherry', 'orange' ]