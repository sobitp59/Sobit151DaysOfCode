// write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

// Your ES6 code here
const filterWords = (words) => {
    let arrayGreaterThanFive = [];
    for(const word of words){
        if(word.length > 5){
            arrayGreaterThanFive[arrayGreaterThanFive.length] = word;
        }
    }
    return arrayGreaterThanFive;
}


var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) // ["repeat", "community"]