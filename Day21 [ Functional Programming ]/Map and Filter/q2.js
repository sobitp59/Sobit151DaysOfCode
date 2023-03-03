// 02:Given an array of objects with name and age properties, use map to return a new array with each object's name property capitalized.

const getPeople = people => people.map(({name}) => name.toUpperCase());

const people = [
    { name: 'alice', age: 28 },
    { name: 'bob', age: 32 },
    { name: 'charlie', age: 24 },
    { name: 'david', age: 37 },
    { name: 'eve', age: 22 }
];

console.log(getPeople(people))
// [ 'ALICE', 'BOB', 'CHARLIE', 'DAVID', 'EVE' ]