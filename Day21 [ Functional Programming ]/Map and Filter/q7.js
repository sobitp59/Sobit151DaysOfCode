// //07: Given an array of objects with name and grades properties, use map to return a new array with each object's averageGrade property calculated as the average of its grades.


const getAverage = students => students.map(({name, grades}) => {
    let total  = 0;
    grades.map(grade => {
        total += grade;
    })
    return  {name, grades : [...grades] , averageGrade : total / grades.length};
})

const students = [  
    { name: 'Alice', grades: [95, 87, 92, 88] },
    { name: 'Bob', grades: [72, 78, 81, 65] },
    { name: 'Charlie', grades: [90, 91, 89, 94] },
    { name: 'David', grades: [83, 79, 86, 82] },
    { name: 'Eve', grades: [97, 93, 95, 98] }
];

console.log(getAverage(students))

// const students = [
//     { name: 'Alice', grades: [95, 87, 92, 88] },
//     { name: 'Bob', grades: [72, 78, 81, 65] },
//     { name: 'Charlie', grades: [90, 91, 89, 94] },
//     { name: 'David', grades: [83, 79, 86, 82] },
//     { name: 'Eve', grades: [97, 93, 95, 98] }
// ];

// const getAverage = students => {
//   return students.map((students)=> {
//   let sum = 0;
//   for(let i=0; i<students.grades.length; i++) {
//     sum += students.grades[i];
//   }
//   return {...students, averageGrade : sum / students.grades.length}
// })
// }
// console.log(getAverage(students))