// 09: Given an array of strings, use reduce() to create a new array that contains only the unique strings from the original array.

const strings = ['apple', 'banana', 'orange', 'banana', 'kiwi', 'orange'];

const getUniqueStrings = strings => strings.reduce((uniqueStrings, currString) => {
    if(!uniqueStrings.includes(currString)){
        uniqueStrings.push(currString)
    }
    return uniqueStrings
}, [])

console.log(getUniqueStrings(strings))
// [ 'apple', 'banana', 'orange', 'kiwi' ]