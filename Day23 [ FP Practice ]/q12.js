// 12: Given an array of strings, use reduce() to create a new object that contains the frequency of each string in the array.

const strings = ['apple', 'banana', 'orange', 'banana', 'kiwi', 'orange'];

const getFrequency = strings => strings.reduce((obj, curr) => {
    // if(!obj[curr]){
    //     obj[curr] = 0;
    // }
    // obj[curr] += 1
    obj[curr] = (obj[curr] || 0) + 1


    return obj 
}, {})

console.log(getFrequency(strings))
// { apple: 1, banana: 2, orange: 2, kiwi: 1 }