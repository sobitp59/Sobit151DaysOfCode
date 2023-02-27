// Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

// Your ES6 code here
const getValues = (arrObj, propName) => {
    const arrObjPropName = [] 
    for(let index = 0; index < arrObj.length; index++){
        arrObjPropName[index] = arrObj[index][propName];
    }
    return arrObjPropName;
}




console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 },
      ],
      "name"
    )
  ); // ["John", "Mary", "Peter"]