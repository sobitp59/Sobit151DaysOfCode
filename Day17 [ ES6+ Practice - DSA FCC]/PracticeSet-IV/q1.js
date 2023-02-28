// 01: Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.
// Your ES6 code here

const getMaxElement = (arr) => {
    let maxElement = -Infinity;
    for(let num of arr){
        if(num >= maxElement){
            maxElement = num;
        }
    }
    return maxElement;
}


let array = [4,78, 78, 8,3,6,0,12,34]
console.log(getMaxElement(array)) // 78