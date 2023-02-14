# **Var, Let and Const : var, let, and const are keywords used to declare variables**

## **01: VAR**
- `var` is the oldest way of declaring a variable in JavaScript, and it has `function scope`.
- This means that a `var` variable is accessible inside the function in which it is defined, as well as any nested functions.
- If a `var` variable is declared outside of a function, it becomes a global variable that is accessible anywhere in the code.
- `var` can be `re-declared` and `re-assigned` within the same scope, which can lead to unintended consequences if you're not careful.
- `var` declarations are hoisted to the top of their scope, which means that you can use a `var` variable before it has been declared without causing an error. However, the value of the variable will be `undefined`.

**Example 1: Var**
```js
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
```
**Example 2: Var**
```js
function varTwo(){
    console.log(a);
    var a = 1000;
}
varTwo(); // undefined
```

----
<br>
<br>


## **02: LET**
- `let` was introduced in ES6 and has `block scope`.
- This means that a `let` variable is only accessible within the block `{}` in which it is defined, including any nested blocks.
- `let` can be `re-assigned` within the `same scope`, but it `cannot be re-declared`.
- `let` declarations are too hoisted in JavaScript, but unlike `var` variables, they are not initialized to `undefined` at the top of their scope. Instead, they are in a `"temporal dead zone"` (TDZ) until they are assigned a value. This means that you cannot access a `let` variable before it has been declared and assigned a value, or you will get a `ReferenceError`

**Example 1: Let**
```js
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
```
**Example 2: Let**
```js
function letTwo(){
    console.log(greet)
    const greet = 'Heyya! What\'s up'
}
letTwo() // ReferenceError: Cannot access 'greet' before initialization
```
----
<br>
<br>

## **03: CONST**
- `const` is also introduced in ES6 and has block scope.
- A const variable cannot be `re-assigned` or `re-declared` even within the same scope.
- This means that the value of a `const` variable cannot be changed after it has been initialized.
- However, it's important to note that the value of a `const object or array` can still be modified.

**Example 1: Const**
```js
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
```
**Example 2: Const with Objects**
```js
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
```
**Example 3: Const with Objects**
```js
const employee1 = {name : 'John', age : 32, gmail : 'empone@gmail.com'}
const employee2 = {name : 'Jone', age : 28, gmail : 'emptwo@gmail.com'}

employee1 = employee2 // Not allowed
console.log(employee1) // TypeError: Assignment to constant variable.
```
**Example 4: Const with Arrays**
```js
const names = ['Kakashi','Sasuke', 'Muzan', 'Obito', 'Naruto']
names.push('Sakura')
names[2] = 'Itachi'

console.log(names)
// OUTPUT : [ 'Kakashi', 'Sasuke', 'Itachi', 'Obito', 'Naruto', 'Sakura' ]
```
**Example 5: Const with Arrays**
```js
const numbers = [1,2,3,4,5]
numbers = [100,200,300,400,500] // Not allowed

console.log(numbers) // TypeError: Assignment to constant variable.
```
**Example 6: Const with Arrays**
```js
// Re-difining with let or var
const num = [1, 2, 3];
let num = [4, 5, 6]; // not allowed
var num = [4, 5, 6]; // not allowed
```
**Example 7: Const with Arrays**
```js
// Declaring a new array with the same variable name
const n = [1, 2, 3];
const n = [4, 5, 6]; // not allowed
```
----
<br>
<br>

## Key Takeaways
- always use `const` unless required otherwise
- use `let` when you want to change the value
- define all the variables at the top level of the scope
- name your variables with different names
- stop using `var`

