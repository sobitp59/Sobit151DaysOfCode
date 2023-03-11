// Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
    {name: 'Jeena', age: 25}, 
    {name: 'Priya', age: 30}, 
    {name: 'Mohan', age: 100},
    {name: 'Naina', age: 45},
]

// Your code here
const oldestPersonName = people => people.reduce((oldestPerson, currPerson) => {
    return currPerson.age > oldestPerson.age ? currPerson : oldestPerson;
}).name;


console.log(oldestPersonName(people)); 
// Output: 'Naina'