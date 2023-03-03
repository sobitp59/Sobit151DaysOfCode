// 08: Given an array of objects with name, age, and hobbies properties, use filter to return only the objects where the age is even and the name starts with the letter 'J'.

const getPeople = people => people.filter(({name, age}) => name.startsWith('J') && !(age%2))

const people = [  
  { name: 'Alice', age: 28, hobbies: ['reading', 'yoga', 'travel'] },
  { name: 'Job', age: 32, hobbies: ['gardening', 'cooking', 'hiking'] },
  { name: 'Charlie', age: 24, hobbies: ['swimming', 'music', 'painting'] },
  { name: 'Javid', age: 37, hobbies: ['photography', 'running', 'writing'] },
  { name: 'John', age: 38, hobbies: ['photography', 'running', 'writing'] },
  { name: 'Eve', age: 22, hobbies: ['skiing', 'dancing', 'movies'] }
];


console.log(getPeople(people));
// [
//     {
//       name: 'Job',
//       age: 32,
//       hobbies: [ 'gardening', 'cooking', 'hiking' ]
//     },
//     {
//       name: 'John',
//       age: 38,
//       hobbies: [ 'photography', 'running', 'writing' ]
//     }
// ]