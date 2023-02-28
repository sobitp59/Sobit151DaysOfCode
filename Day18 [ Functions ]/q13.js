// Given an array of objects with name, age, and gender properties, use filter to return only the objects where the gender is 'female'.

const people = [
    { name: 'Alice', age: 28, gender: 'female' },
    { name: 'Bob', age: 32, gender: 'male' },
    { name: 'Charlie', age: 24, gender: 'male' },
    { name: 'David', age: 37, gender: 'male' },
    { name: 'Eve', age: 22, gender: 'female' }
];

const getGenerFemale = people.filter(({gender}) => gender === 'female');
console.log(getGenerFemale);

// [
//     { name: 'Alice', age: 28, gender: 'female' },
//     { name: 'Eve', age: 22, gender: 'female' }
//   ]