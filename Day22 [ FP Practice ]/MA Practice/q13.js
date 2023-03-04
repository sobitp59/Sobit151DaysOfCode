// 5. Write a function to calculate sum of n elements where n >=2

const sumOfN = (...args) => {
    let sum = 0;
    for(num of args){
        sum += num;
    }
    return sum;
}


console.log(sumOfN(1,2,3)) // output: 6
console.log(sumOfN(1,2,3,4)) // output: 10