// VAR
// Example 1:
function varOne() {
    var x = 5;
    var y = 10;

    if (true) {
      var x = 10; // re declaring
      y = 200; // re assigning
    }

    var y = 500; // re declaring
    console.log(x, y); 
  }
varOne() // 10 500


// Example 2:
function varTwo(){
    console.log(a);
    var a = 1000;
}
varTwo(); // undefined




// LET
// Example 1:
function letOne(){
    let a = 200;
    function sum(arg){
        a = 400; // re declaring a
        let b = arg; // new variable b
        b = 1000; // redeclaring b
        console.log(a + b)
    }
    // console.log(b) // ReferenceError: b is not defined
    sum(a)
}

letOne() // 1400

// Example 2
// function letTwo(){
//     console.log(greet)
//     const greet = 'Heyya! What\'s up'
// }
// letTwo() // ReferenceError: Cannot access 'greet' before initialization



// CONST
// Example 1
function constOne(){
    const price = 1000;

    if(true){
        const price = 2000; // new variable
        console.log(price) 
    }
    console.log(price)
}
constOne() // 2000
           // 1000


// Example 2
const product = {
    name : 'Iphone 20 Pro',
    price : '$20000',
    features : {
        camera : '50 mega pixels',
        theftDetect : true
    }
}

product.name = 'Iphone 15 Pro' // allowed
product.features.theftDetect = false // allowed

console.log(product)

// OUTPUT:
// {
//     name: 'Iphone 15 Pro',
//     price: '$20000',
//     features: { camera: '50 mega pixels', theftDetect: false }
// }

// Example 3
const employee1 = {name : 'John', age : 32, gmail : 'empone@gmail.com'}
const employee2 = {name : 'Jone', age : 28, gmail : 'emptwo@gmail.com'}

// employee1 = employee2 // Not allowed
console.log(employee1) // TypeError: Assignment to constant variable.

// Example 4
const names = ['Kakashi','Sasuke', 'Muzan', 'Obito', 'Naruto']
names.push('Sakura')
names[2] = 'Itachi'

console.log(names)
// OUTPUT : [ 'Kakashi', 'Sasuke', 'Itachi', 'Obito', 'Naruto', 'Sakura' ]


// Example 5
const numbers = [1,2,3,4,5]
// numbers = [100,200,300,400,500] // Not allowed

console.log(numbers) // TypeError: Assignment to constant variable.


// Example 6
// const num = [1, 2, 3];
// let num = [4, 5, 6]; // not allowed
// var num = [4, 5, 6]; // not allowed


// Example 7
const n = [1, 2, 3];
const n = [4, 5, 6]; // not allowed