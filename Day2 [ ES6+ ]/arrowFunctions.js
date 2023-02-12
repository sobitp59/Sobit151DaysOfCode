// 🟡 ARROW FUNCTIONS

// ✅ CHALLENGE : convert the below arrow function into function declaration (normal function) format

//01
// with no parameter
// const getNum = () => 2;
function getNum(){
    return 2
}
console.log(getNum())

//02
// with one parameter
// const isOne = num => num == 1;
function isOne(num){
    return num == 1
}
console.log(isOne(1))



// 🟡 ARROW FUNCTION WITH MORE THAN ONE PARAMETER
// ✅ CHALLENGE : convert the below arrow function into function declaration (normal function) format

// 01
// const isBigger = (a,b) => a > b;
function isBigger(a, b){
    return a > b
}
console.log("Is 2 bigger than 3?", isBigger(2,3))

// 02
function product(a, b){
    console.log('product of ...')
    return a * b
}
console.log(product(2,5))

//03
function printSomethingAndReturn(a){
    console.log('squaring...')
    return a * a
}
console.log(printSomethingAndReturn(2))



// ✅ CHALLENGE : convert the below function into arrow function

// 01
function someFunc(argOne, argTwo){
    return argOne;
} 
console.log(someFunc(100, 200))

const someFuncArrow = (argOne, argTwo) => argOne
console.log(someFuncArrow(200, 300))

// 02
function someObj(val){
    return {value : val}
}
console.log(someObj(56))

const someObjArrow = val => ({value : val})
console.log(someObjArrow(88))



// 🟡 SHORT ARROW FUNCTION WHILE RETURNING AN OBJECT / OBJECT LITERAL SYNTAX
// ✅ CHALLENGE : convert the below function into arrow function

//01
// const giveMeAnObject = a => ({ value: a }) ✅
// const giveMeAnObject = a => { value: a } ❌
function giveMeAnObject(a){
    return {value : a}
}
console.log(giveMeAnObject(5))



