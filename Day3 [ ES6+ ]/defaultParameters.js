// DEFAULT PARAMETERS

//01
const exampleOne = (a, b) => a + b
console.log(exampleOne(2))  // NaN
// When you try to add an undefined value to a number, JavaScript returns NaN (Not a Number).


//02
const exampleTwo = (a, b) => {
    if(b === undefined){
        b = 0
    }
    return a + b
}
//03
console.log(exampleTwo(5)) // 5


//04
const exampleThree = (a, b = 10) => {
    return a + b
}
console.log(exampleThree(10,20)) // 30
console.log(exampleThree(10)) // 20


//05
const exampleFive = (a, b, c) => {
    return a + b + c
}
console.log(exampleFive(1,2,3)) // 6
console.log(exampleFive(1, ,3)) // SyntaxError: Unexpected token ','
                                // default parameter only starts working from the right side.

// To avoid the syntax error, you should either provide a value for b or remove the comma and pass the arguments as separate values:
console.log(exampleFive(1,undefined,)) // NaN