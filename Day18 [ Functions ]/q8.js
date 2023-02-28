// Given an array of objects with name and age properties, use map and filter to return an array of names of the objects where the age is greater than 30.

const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 24 },
    { name: 'David', age: 37 },
    { name: 'Eve', age: 22 }
];

const ageGreaterThan30 = people.filter(({age}) => age > 30).map(({name}) => name)
console.log(ageGreaterThan30); // [ 'Bob', 'David' ]