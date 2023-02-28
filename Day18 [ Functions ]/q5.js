// Given an array of objects with name and age properties, use filter to return only the objects where the age is greater than 25.

const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 24 },
    { name: 'David', age: 37 },
    { name: 'Eve', age: 22 }
  ];

const ageGreaterThan25 = people.filter(({age}) => age > 25);
console.log(ageGreaterThan25);

// [
//    { name: 'Alice', age: 28 },
//    { name: 'Bob', age: 32 },  
//    { name: 'David', age: 37 } 
//  ]
  