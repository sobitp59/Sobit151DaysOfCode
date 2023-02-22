// Use Destructuring Assignment to Assign Variables from Nested Objects

//ex1
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
};

const { johnDoe: {age, email}} = user;
console.log(age, email);
// 34 johnDoe@freeCodeCamp.com

//ex2
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    

  const {today: {low : lowToday, high : highToday}} = LOCAL_FORECAST;
  console.log(lowToday, highToday); //64 77
  
  // Only change code above this line