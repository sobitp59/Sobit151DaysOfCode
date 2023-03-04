// 4. 
// Write a program using destructing to find a number in this object which is divisible both by 3 and 5

const obj = {
                a: 10,
                b: 12,
                arr: [10, 8, 15, 14]
        }

const {a, b, arr} = obj;

const findNumber = [a,b, ...arr].find(num => !(num % 3) && !(num % 5))

console.log(findNumber);