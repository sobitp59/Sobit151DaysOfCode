
// Write a arrow function which takes an object and prints the particular sentence
// My name is Sudipta Chakraborty. I scored 99 in Math and 96 in Computer from ISC board.

// const getSentence = (({name, school : {board : [boardname], marks}}) => {
    
//     return `My name is ${name}. I scored ${
//             marks.map((mark, index) => {
//                 const {subject, percent} = mark;
//                 index = index + 1;

//                 if(marks.length > 1){
//                     return `${percent} in ${subject} ${index < marks.length ? ' and ' : ' '}`  
//                 }else{
//                     return `${percent} in ${subject}`  
//                 }
//             })}from ${boardname} board.`
// }) 


const getSentence = (({name, school : {board, marks}}) => {
    
    `My name is ${name}. I scored ${
            marks.map((mark) => {
                const {subject, percent} = mark;
                return `${percent} in ${subject}`  
                
            }).join(' and ')} from ${board} board.`
}) 

const student = {
    name: 'Sudipta Chakraborty',
    school: {
        board:['ISC'],
        marks: [
                { subject: 'Math', percent: 99 },
                { subject: 'Computer', percent: 96},
                { subject: 'Computer', percent: 96},
               ]
    }
}

console.log(getSentence(student))

// const getSentence = studentsObj => {
//     const {name, school : {board, marks: [{subject : sub1, percent: per1}, {subject : sub2, percent: per2}] }} = studentsObj;
//     return `My name is ${name}. I scored ${per1} in ${sub1} and ${per2} in ${sub2} from ${board} board.`
// } 


// const getSentence = (({name, school : {board, marks}}) => {
//     return `My name is ${name}. I scored ${marks.map(({subject, percent}, index) => {
//         if(marks.length > 1){
//           return `${percent} in ${subject} ${index < marks.length ? 'and ' : ''}`  
//         }else{
//           return `${percent} in ${subject}`  
//         }
//     })}from ${board} board.`
//   });

// const student = {
//     name: 'Sudipta Chakraborty',
//     school: {
//         board:['ISC'],
//         marks: [
//                 { subject: 'Math', percent: 99 },
//                 { subject: 'Computer', percent: 96},
//                ]
//     }
// }

// console.log(getSentence(student))

const obj = [
    {1: 'hello'},
    {2: 'killo'},
    {1: 'jillo'},
  ]
  
  let data = obj.map(obj => obj)
  console.log(data)









// Functional Programming questions given by MA’s in VC

// 1. Write a function that takes an array and returns all the numbers in a new array increased by 10.



// 2. Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.


// 3. Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.


// 4. const obj = {
//             a: 10,
//             b: 12,
//             arr: [10, 8, 15, 14]
//     }
// Write a program using destructing to find a number in this object which is divisible both by 3 and 5


// 5. const obj = {
//     details: [{name: 'Ankit', company: 'Chalo'},
//           {name: 'Rohan', company: 'Razorpay'},
//              {name: 'Shivam', company: 'No Broker'}
//                                  ]}
// Write a function that takes the above object and returns a new array containing the company names.
// Output: ['Chalo', 'Razorpay', 'No Broker']

// 6. const obj = {
//     details: [{name: 'Ankit', company: 'Chalo'},
//           {name: 'Rohan', company: 'Razorpay'},
//           {name: 'Shivam', company: 'No Broker'}
//                                  ]
//     }
// Write a function that takes the above object and returns a new array containing the company names for people having names starting with A.

// 7. Given an array of objects, write a code for "getOutput" function to return the first object that contains a specific given key-value pair.
// eg: 

// const arr = [{name: "John", age: 25}, {name: "Sarah", age: 30}, {name: "Bob", age: 20}]
// const key="age"
// const value=25

// console.log(getOutput(arr,key,value)); // Output: {name: "John", age: 25}

// 8.  Write a function that takes a string of words separated by space and 
// returns an array with the string of word separated by its length.

// input = 'apple ban'
// output = ["apple 5", "ban 3"]

// input = 'you will win'
// output = ["you 3", "will 4", "win 3"]
// [11:04 PM]
// SET 1 and SET 2 questions given by MA's in VC

// 1. write a function getArea which will accept either one or two arguments and return the area of geometrical figure.

//   if function is called with one arguments then consider it as side of square 
//   and 
//     if it is called with two arguments then consider it as length and breadth of rectangle

// sample eg.
//   console.log(getArea(4)) // output : 16
//   console.log(getArea(4,8)) // output : 32

// 2. write a function to calculate factorial of number using 
//  loop

// 3. write a function which will take n (provided n>=2) numbers as an argument and will return the the sum of factorial of all the numbers 

// eg.

// console.log(getSumOfFacts(1,2,3)) // output: 9
// console.log(getSumOfFacts(1,2,3,4)) // output: 33

// 4. write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.

//  sample e.g. -
//  console.log(getOutput([1,2,3,4,5])) // output : {max: 5, min: 1, avg: 3}

// note: do it without using any inbuilt function

// 5. Write a function to calculate sum of n elements where n >=2

// console.log(sumOfN(1,2,3)) // output: 6
// console.log(sumOfN(1,2,3,4)) // output: 10
// [11:04 PM]
// ..............................................................................