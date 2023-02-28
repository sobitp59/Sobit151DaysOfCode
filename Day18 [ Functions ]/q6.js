// Given an array of objects with name and score properties, use map and filter to return an array of names of the objects where the score is greater than 90.

const students = [
    { name: 'Alice', score: 92 },
    { name: 'Bob', score: 88 },
    { name: 'Charlie', score: 95 },
    { name: 'David', score: 87 },
    { name: 'Eve', score: 90 }
];

const scoreGreaterThan90 = students.filter(({score}) => score > 80).map(({name}) => name);

console.log(scoreGreaterThan90);
// [ 'Alice', 'Bob', 'Charlie', 'David', 'Eve' ]