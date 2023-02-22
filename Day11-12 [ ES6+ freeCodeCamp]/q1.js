// Var And Let

// Exampple 1 :  Var
var printIndexVar;
for(var i = 0; i < 5; i++){
    if(i === 2){
        console.log('Var 1: ' + i)
        printIndexVar = function(){
            console.log('Var 2: ' + i)
            return i
        };
    }
}
console.log('Var',printIndexVar())
console.log('Var 3: ' + i)


// Exampple 2 :  Let
let printIndexLet;
for(let index = 0; index < 5; index++){
    if(index === 2){
        console.log('Let 1: ' + index)
        printIndexLet = function(){
            console.log('Let 2: ' + index)
            return index;
        };
    }
}
console.log('Let', printIndexLet())
// console.log('Let 3: ' + index)


// Example 3 
function checkbox(){
    let i = "function scope";
    if(true){
        let i = "block scope";
        console.log("Block Scope i is : " + i)
    }
    console.log("Function Scope i is : " + i)
}
checkbox()