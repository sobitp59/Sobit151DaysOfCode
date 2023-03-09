const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
  ];

const getStudents80 = students => students.map((student) => {
    return {...student, average : student.scores.reduce((total, curr) => total + curr, 0) / student.scores.length}
}).filter(({average}) => average > 80)
console.log(getStudents80(students))