// Use Destructuring Assignment to Pass an Object as a Function's Parameters


//ex1
// const profileUpdate = (profileData) => {
//     const { name, age, nationality, location } = profileData;
// }

const profileData = ({name, age, nationality, location}) =>{
    console.log(name, age, nationality, location)
}

const obj = {
    name : 'John Nath',
    age : 45,
    nationality : 'Marsian',
    location : 'USM'
}

profileData(obj)



// ex2 : send only max and min inside the function.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
const half = ({max, min}) => (max + min) / 2.0; 
console.log(half(stats)); // 28.015