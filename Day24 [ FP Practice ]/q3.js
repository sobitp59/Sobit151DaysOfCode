const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
];

// return all the students who’s average score is more than

// 1. 80
// 2. 90

const studentWithAverage = students => students.map((student) => {
    let average = 0;
    average =  student.scores.reduce((total, score, index, array) => {
        total = total + score;
        if(index >= array.length - 1){
            return total / array.length;
        }
        return total
    })
    return {...student, average: average}
})

let studentAvg = studentWithAverage(students);

const averageGT80 = studentAvg => studentAvg.filter(({average, name}) => average > 80);
console.log('Greater Than 80');
console.log(averageGT80(studentAvg));


const averageGT90 = studentAvg => studentAvg.filter(({average}) => average > 90);
console.log('Greater Than 90');
console.log(averageGT90(studentAvg));


// console.log(getAverage(students))