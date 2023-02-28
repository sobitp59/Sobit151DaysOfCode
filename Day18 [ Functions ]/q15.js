// Given an array of objects with name, age, and hobby properties, use map to return a new array with each object's name and hobby properties combined into a single string.

const people = [
    { name: 'Alice', age: 28, hobby: 'reading' },
    { name: 'Bob', age: 32, hobby: 'writing' },
    { name: 'Charlie', age: 24, hobby: 'drawing' },
    { name: 'David', age: 37, hobby: 'painting' },
    { name: 'Eve', age: 22, hobby: 'singing' }
]

const nameAndHobby = people.map(({name, hobby}) => `${name} ${hobby}`);
console.log(nameAndHobby);

// [
//     'Alice reading',  
//     'Bob writing',    
//     'Charlie drawing',
//     'David painting', 
//     'Eve singing'     
//   ]