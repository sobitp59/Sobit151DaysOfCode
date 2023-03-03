// 04:Given an array of objects with name, age, and gender properties, use filter to return only the objects where the age is between 25 and 35 (inclusive).

const getAge = people => people.filter(({age}) => age >= 25 && age <= 35);

const people = [
    { name: 'Alice', age: 28, gender: 'female' },
    { name: 'Bob', age: 32, gender: 'male' },
    { name: 'Charlie', age: 24, gender: 'male' },
    { name: 'David', age: 37, gender: 'male' },
    { name: 'Eve', age: 22, gender: 'female' }
  ];

console.log(getAge(people));
// [
//     { name: 'Alice', age: 28, gender: 'female' },
//     { name: 'Bob', age: 32, gender: 'male' }  
// ]