// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

// Your ES6 code here
const makeCapital = (word) => {
    let capitalizeWord = ''
    for(let letter of word){
        capitalizeWord = String.fromCharCode((letter.charCodeAt() - 32))
    }
    console.log(capitalizeWord)
}
makeCapital('SobiT')

const capitalizeWords = (words) => {

}


console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]