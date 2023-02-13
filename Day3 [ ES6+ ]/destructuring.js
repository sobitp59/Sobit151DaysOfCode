// DESTRUCTURING

// Destructuring is a JavaScript feature that allows you to extract 
// values from objects or arrays and assign them to separate variables.
// This makes it easier to extract data from complex objects or arrays and 
// makes your code more readable and maintainable.


// 01 : destructuring with arrays
const names = ['Sobit', 'Gautam', 'Arun', 'Himanshu']
const [first, second, ...rest] = names
console.log(first)
console.log(second)
console.log(rest)


// 02 : destructuring with objects
const student = {
    fullName : 'Sobit Prasad',
    isStudent : true,
    degree : 'Bachelor of Computer Application',
}

const {fullName, isStudent, degree} = student
console.log(fullName, isStudent, degree)


// 03 
const destructExample = ({fullName, isStudent, degree}) => {
    console.log(fullName, isStudent, degree)
}

destructExample(student)