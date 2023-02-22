// Write Concise Object Literal Declarations Using Object Property Shorthand

// ex1 : write in object property shorthand
// const getMousePosition = (x, y) => ({
//     x: x,
//     y: y
// });

const getMousePosition = (x,y) => ({x, y});
console.log(getMousePosition(10,100));



// ex2: Use object property shorthand with object literals to create and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson('Timmy', 5, 'male'))