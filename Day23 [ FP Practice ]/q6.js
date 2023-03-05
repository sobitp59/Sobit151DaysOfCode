//06: Given an array of strings, use reduce() to calculate the total number of characters in all the strings combined.

const strings = ['Hello', 'world', 'how', 'are', 'you', 'doing?']


// USING REDUCE METHOD
const getStringsLength = strings => strings.reduce((stringLength, currString) => {
    return stringLength + currString.length;
}, 0)

console.log(getStringsLength(strings)); //25

// USING MANUAL WAY 
const getStringLength = (currStringLength, currString) => {
    return currStringLength + currString.length;
}

let totalStringLength = 0;
for(let word of strings){
    totalStringLength = getStringLength(totalStringLength, word)
}
console.log(totalStringLength);//25