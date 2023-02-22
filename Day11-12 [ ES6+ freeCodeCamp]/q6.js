// Set Default Parameters for Your Functions

// Ex1
const greet = (name = 'Anonymous') => "Hello " + name;
console.log(greet('Krishna')); // Hello Krishna
console.log(greet()); // Hello Anonymous