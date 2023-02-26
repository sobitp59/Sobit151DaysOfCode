function print(a, b, ...c){
    return a, b * 2, c;
}

console.log(print(1,2,3,4,5)) // [3,4,5]

// Reason : The reason for this is that the comma operator in the return statement evaluates the expressions from left to right, and returns the result of the last expression
