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


// 02 Lexical this: Arrow functions have a lexically-scoped this
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


// if a function(method) is inside object, 'this' references that object
// if it is a regular function, 'this' refernces to global object

// const video = {
//     title : 'Video Title',
//     play : function(){
//         console.log(this)
//     }
// }
// video.play()

// function playVideo(){
//     console.log(this)
// }
// playVideo()


const video = {
    title : 'Title',
    tags : ['v1', 'v2', 'v3'],
    showTags : function(){
        this.tags.forEach(function(tag){
            console.log(tag, this.title)
        })
    }
}

video.showTags()
// v1 undefined
// v2 undefined
// v3 undefined

const video2 = {
    title : 'Title 2',
    tags : ['V1', 'V2', 'V3'],
    showTags : function(){
        this.tags.map(tag => {
            console.log(tag, this.title)
        })
    }
}

video2.showTags()
// V1 Title 2   
// V2 Title 2   
// V3 Title 2 


//03 No arguments object: Arrow functions do not have an arguments object,
// which can simplify your code and reduce the possibility of bugs.
// If you need to access the arguments passed to a function, you can 
// use the ... operator to spread the arguments into an array.

// TRADITIONAL WAY
function sum(){
    let sum = 0
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i] // arguments : OBJECT
    }
    return sum
}

console.log('Total Sum : ' + sum(1,2,3))

// ARROW FUNCTION WAY
const add = (...args) => {
    let total = 0
    console.log(args)
    for ( i = 0; i < args.length; i++) {
        total += args[i]  // args : ARRAY
    }
    return total
}

console.log('Total : ' + add(1,2,3,4,5))



// 04 Use as Callbacks: Arrow functions are often used as 
// callbacks in event handlers, promise handlers, and other 
// asynchronous code. Because of their concise syntax and 
// lexically-scoped this keyword, they are a convenient way
// to write callbacks that are clean, readable, and easy to understand.

// TRADITIONAL WAY
function Person(name){
    this.name = name
}

Person.prototype.sayHello = function(){
    console.log(`Hello! my name is ${this.name}`)
}

const person = new Person('Mohan')
person.sayHello()

// ARROW FUNCTION WAY

// const Employee = (name) => { ❌ : ERROR
//     this.name = name
// }

// Employee.prototype.sayHi = function(){
//     console.log(`Hi, my name is ${this.name}`)
// }

// const e1 = new Employee('Rajesh')
// e1.sayHi()


// MISC //
const Employee = {
    name : '',
    sayHi : function(){
        console.log(`hi, my name is ${this.name}`)
    }
}


const e1 = Object.create(Employee)
e1.name = 'Tanay Pratap'
e1.sayHi()