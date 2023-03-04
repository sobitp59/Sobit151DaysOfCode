// // 3. write a function which will take n (provided n>=2) numbers as an argument and will return the the sum of factorial of all the numbers 

// eg.

const getSumOfFacts = (...args) => {
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        let fact = 1;
        for(let j = 1; j <= args[i]; j++){
            fact *= j;
        }
        sum += fact;
    }
    return sum;
}

console.log(getSumOfFacts(1,2,3)) // output: 9  1 + 2 + 6
console.log(getSumOfFacts(1,2,3,4)) // output: 33