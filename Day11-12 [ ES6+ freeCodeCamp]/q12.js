// Use Destructuring Assignment to Assign Variables from Arrays

//ex1
const arr = [1,2,3,4,5];
const [a,b] = arr;
const [x,y,,,z] = arr; 
console.log(a,b); // 1 2
console.log(x,y,z); // 1 2 5


//ex2
let o = 1, p = 2;
[o,p] = [p,o]
console.log(o,p) // 2 1
