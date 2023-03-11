// Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];
  // Your code here
  
    const getAverageAge = people => people.reduce((average, person) => {
        return {['averageAge'] : (average.averageAge || 0) + person.age / people.length};
    },{})
  
  
  console.log(getAverageAge(people));
  // Output: { averageAge: 32.5 }


const arr = [10, 20, 30, 40, 50];
const av1 = arr[0] / arr.length;
console.log(av1);
const av2 = av1 + arr[1] / arr.length;
console.log(av2);
const av3 = av2 + arr[2] / arr.length;
console.log(av3);
const av4 = av3 + arr[3] / arr.length;
console.log(av3);
const av5 = av4 + arr[4] / arr.length;
console.log(av5);