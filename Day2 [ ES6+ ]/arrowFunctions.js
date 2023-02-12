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



// 🟡 WHY WE NEED ARROW FUNCTIONS?
// Arrow functions were introduced in ECMAScript 6 (also known as ES6) 
// as a shorthand syntax for writing anonymous functions in JavaScript.
// There are several reasons why we might want to use arrow functions in your code:


// 01 Concise Syntax: Arrow functions have a more concise syntax 
// compared to traditional functions. For example, if you want to
// write a simple function that takes an input x and returns its
// square, you can write the following with an arrow function: 
// const square = x => x * x;.


// TRADITIONAL WAY
function Add22andReturn(num) {
    let sum = 0;
    sum = num + 22;
    return sum;
}
console.log(Add22andReturn(10))

// USING ARROW FUNCTIONS
const Add33andReturn = num => num + 33;
console.log(Add33andReturn(40))


// 01 Lexical this: Arrow functions have a lexically-scoped this
// keyword, which means that the value of this inside an arrow
// function is the same as the value of this in the outer scope.
// This can be useful in situations where you need to access the this

// This means that the value of this inside an arrow function is determined by the surrounding code, rather than 
// being dynamically assigned based on how the function is called. 

// TRADITIONAL WAY
const data = {
    firstName : 'Sobit',
    lastName : 'Prasad',
    fullName : function(){
        setTimeout(function(){
            console.log('data st ' + this)
            console.log('2 ' + this.firstName + " " +this.lastName);
        }, 1000)
        }
    }
data.fullName(); // undefined undefined
    
const data2 = {
    firstName : 'Sobit',
    lastName : 'Prasad',
    fullName2 : function(){
        setTimeout(() =>{
            console.log('4 ' + this.firstName + ' ' + this.lastName)
        }, 1000)
    }
}
data2.fullName2()