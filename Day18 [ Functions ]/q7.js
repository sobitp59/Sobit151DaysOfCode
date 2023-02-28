// Given an array of objects with name, age, and hobby properties, use map to return an array of objects with only the name and hobby properties.

const people = [
    { name: 'Alice', age: 28, hobby: 'reading' },
    { name: 'Bob', age: 32, hobby: 'writing' },
    { name: 'Charlie', age: 24, hobby: 'drawing' },
    { name: 'David', age: 37, hobby: 'painting' },
    { name: 'Eve', age: 22, hobby: 'singing' }
];


const getNameAndHobby = people.map(({name, hobby}) => ({name, hobby}));
console.log(getNameAndHobby);

// [
//     { name: 'Alice', hobby: 'reading' },  
//     { name: 'Bob', hobby: 'writing' },    
//     { name: 'Charlie', hobby: 'drawing' },
//     { name: 'David', hobby: 'painting' }, 
//     { name: 'Eve', hobby: 'singing' }     
//  ]