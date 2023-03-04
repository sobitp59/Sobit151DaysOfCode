// 8.  Write a function that takes a string of words separated by space and 
// returns an array with the string of word separated by its length.



const getStringsLength = string => string.split(' ').map(word => `${word} ${word.length}`)


let input = 'apple ban'
input = 'you will win'
// output = ["apple 5", "ban 3"]
console.log(getStringsLength(input))

// output = ["you 3", "will 4", "win 3"]