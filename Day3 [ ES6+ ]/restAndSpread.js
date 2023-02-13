// REST AND SPREAD OPERATOR IN JAVASCRIPT

// REST OPERATOR

//01
const restOne = (a, b, ...bakiSab) => {
    console.log(a,b, bakiSab)
}
restOne(1,2,3,4,5,6,7,8,9)

//02
const restSum = (...numbers) => {
    let total = 0
    for(const number of numbers){
        total += number
    }
    return total
}
console.log(restSum(1,2,3,4,5,6,7,8,9))
console.log(restSum(1,2,3,4,5))



// SPREAD OPERATOR

// 01 : spreading elements of an array into a new array
const array = [1, 2, 3, 4]
const newArray = [...array, 5, 6]
console.log(newArray)

// 02 : merging two arrays into a new array
const arrOne = [1,2,3,4,5]
const arrTwo = [6,7,8,9]
const mergedArray = [...arrOne, ...arrTwo]
console.log(mergedArray) 


// 03 : spreading properties of an object into a new object
const objOne = {
    name : 'Sobit Prasad',
    mentoredBy : ['Tanay Bhaiya', 'Akansha Mam', 'Vikram Sir']
}

const objTwo = {
    learning : ['frontend development', 'backened development']
}

const mergedObj = {...objOne, ...objTwo, bootcamp : 'neoG Camp'}
console.log(mergedObj)

// 04
const spreadArray = ([a,b,...rest]) => {
    const newArray = [22,33, 44, ...rest]
    return newArray
}
console.log(spreadArray([1,2,3,4,5,6]))















