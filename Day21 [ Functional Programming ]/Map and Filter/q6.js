// 06: Given an array of objects with name, age, and gender properties, use filter to return only the objects where the name starts with the letter 'A'.

const getNameA = people => people.filter(({name}) => name.split('')[0] === 'A' );

const people = [
    { name: 'Alice', age: 28, gender: 'female' },
    { name: 'Bob', age: 32, gender: 'male' },
    { name: 'Charlie', age: 24, gender: 'male' },
    { name: 'David', age: 37, gender: 'male' },
    { name: 'Eve', age: 22, gender: 'female' },
    { name: 'Aman', age: 42, gender: 'male' },

];
  

console.log(getNameA(people));
// [
//     { name: 'Alice', age: 28, gender: 'female' },  
//     { name: 'Aman', age: 42, gender: 'male' }    
// ]