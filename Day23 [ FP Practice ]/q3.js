// 03: Using reduce() to merge different objects in a single object:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };


// USING REDUCE METHOD
const mergedObject = [obj1, obj2, obj3].reduce((currMergeObj, currObj) => {
    return {...currMergeObj, ...currObj}
}, {})
console.log(mergedObject); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }



// USING MANUAL WAY
const mergeMyObjects = (currMergeObj, currObj) => {
    return {...currMergeObj, ...currObj}
}

let mergeObj = {};
mergeObj = mergeMyObjects(mergeObj, obj1); 
mergeObj = mergeMyObjects(mergeObj, obj2); 
mergeObj = mergeMyObjects(mergeObj, obj3);
console.log(mergeObj);  // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
