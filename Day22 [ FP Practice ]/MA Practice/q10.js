// 2. write a function to calculate factorial of number using 
//  loop


const getFactorial = number => {
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact *= i;
    }
    return fact;
}

console.log(getFactorial(5))