// 4. write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.




const getOutput = arr => {
    let max = -Infinity;
    let min = +Infinity;
    let total = 0;

    for(let num of arr){
        num > max && (max = num); // find maximum
        num < min && (min = num); // find minimum
        total += num; // sum 
    }

    return `{max : ${max}, min : ${min}, avg : ${total / arr.length}}`
}





//  sample e.g. -
 console.log(getOutput([1,2,3,4,5])) // output : {max: 5, min: 1, avg: 3}

// note: do it without using any inbuilt function