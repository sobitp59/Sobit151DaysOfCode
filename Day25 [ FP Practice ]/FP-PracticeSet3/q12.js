// Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.

const students = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
  ];
  
// Your code here
const getAverageScore =  students => students.reduce((total, {score}, index, array) => {
    total = total + score;
    if(index >= array.length - 1 ){
        return total / array.length;
    }
    return total
}, 0)  
  
  
  
console.log(getAverageScore(students)); 
// Output: 82.5