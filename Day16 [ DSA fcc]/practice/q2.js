function sum(a, ...b, c){
    return a + c;
}

console.log(sum(1,2,3,4,5))
// SyntaxError: 
// Reason : A rest parameter must be last in the parameter list
 