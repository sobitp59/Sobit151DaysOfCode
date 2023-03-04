// 7. Given an array of objects, write a code for "getOutput" function to return the first object that contains a specific given key-value pair.
// eg: 

const arr = [{name: "John", age: 25}, {name: "Sarah", age: 30}, {name: "Bob", age: 20}]


const getOutput = (arr, key, value) => arr.find(obj => obj[key] === value);

const key="age"
const value= 25
console.log(getOutput(arr,key,value)); // Output: {name: "John", age: 25}
// const getOutput = (arr, key, value) => arr.find(obj => Object.keys(obj).find(k => k === key) && Object.values(obj).find(v => v === value)  );


// const obj = {
//     name: 'Mohan',
//     age : '22'
// }

// let friend = 'friendName'; 

// obj[friend] = 'Rajesh';
// console.log(obj[friend])
// console.log(obj.friendName)