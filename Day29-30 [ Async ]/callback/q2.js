// Write a function strLength() which takes

// Your name
// A function that it will call with the length of your name

const strLength = (name, getLength) => getLength(name.length);
const getNameLength = nameLength => nameLength;
const printNameLength = strLength('mohan', getNameLength)
console.log(`OMG! my name is ${printNameLength} char long!!`)

// console.log(strLength('Mohan', (nameLength) => console.log(`OMG! my name is ${nameLength} char long`)));


const a =(n, b) => b(n.length);
const cb = (n) => console.log(`hello CB!! ${n}`)
a('sobit', cb);


const getSquare = (n, cbSquare) => cbSquare(n*n);
const CB = (square) => console.log('square is : ' + square)
getSquare(8,CB);