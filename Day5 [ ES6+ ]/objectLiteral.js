// OBJECT LITERALS / SHORTHAND PROPERTY VALUE 

// Object Literal
// An object literal is a way to define an object using curly
// braces {} without the need for a constructor function.

const employee = {
    name : 'John Sharma',
    age : 32,
    contact : 1234567890
}

console.log(employee)
// { name: 'John Sharma', age: 32, contact: 1234567890 }


// Shorthand Property
// Shorthand properties are a way to define object literals 
// that simplify the syntax of defining properties.

const firstName = 'Sobit'
const lastName = 'Prasad'
const degreeYear = 'Final Year'

// Without Shorthand Property
const stuentData = {
    firstName : firstName,
    lastName : lastName,
    degreeYear : degreeYear
}
console.log(stuentData)
// OUTPUT :
// { firstName: 'Sobit', lastName: 'Prasad', degreeYear: 'Final Year' } 


// Without Shorthand Property
const studentInfo = {firstName, lastName, degreeYear}
console.log(studentInfo)
// OUTPUT :
// { firstName: 'Sobit', lastName: 'Prasad', degreeYear: 'Final Year' } 


// combination of shorthand and explicit properties
const studentDetails = {
    firstName,
    lastName,
    year : degreeYear,
    ['fees'] : '10 crore'
}
console.log(studentDetails)


