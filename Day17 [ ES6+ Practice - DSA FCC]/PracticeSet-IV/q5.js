// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

// Your ES6 code here
const makeCapital = (word) => {
    let capitalizeWord = ''
    for(let i = 0; i  < word.length; i++ ){
       capitalizeWord += String.fromCharCode(word.charCodeAt(i) - 32);
    }
    return capitalizeWord;
}

const capitalizeWords = (words) => {
    for(let i = 0; i < words.length; i++){
        words[i] = makeCapital(words[i]) 
    }
    return words;
}


console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// // ["EAT", "SLEEP", "CODE", "REPEAT"]