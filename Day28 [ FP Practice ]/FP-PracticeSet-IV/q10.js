// Given an array of strings of products, write a function that returns an array of objects representing
// each unique string of products and its frequency in the original array.
const strings = ['apple watch',' i Phone 12',' apple watch',' mac book pro',' i Phone 12',' i Phone 12',' mac book pro','mac book pro',' mac book pro'];
// Output: [{ string: 'apple watch', frequency: 2 }, { string: ' i IPhone 12', frequency: 13}, { string: ' mac book pro', frequency: 4}]

const getArray = strings => strings.reduce((obj, string, index) => {
    if(obj[index]['string'] === string){
        obj.push({['string'] : string, frequnecy : (obj[index]['frequency'] || 0) + 1})
    }
    return obj
}, [])

console.log(getArray(strings))


// const arr = [
//     { string: 'apple watch', frequency: 1 },  
//     { string: ' i Phone 12', frequency: 1 },  
//     { string: ' apple watch', frequency: 1 }, 
//     { string: ' mac book pro', frequency: 1 },
//     { string: ' i Phone 12', frequency: 1 },  
//     { string: ' i Phone 12', frequency: 1 },  
//     { string: ' mac book pro', frequency: 1 },
//     { string: 'mac book pro', frequency: 1 }, 
//     { string: ' mac book pro', frequency: 1 } 
// ]

// console.log([...arr].frequency)