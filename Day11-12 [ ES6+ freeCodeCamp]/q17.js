// Write Concise Declarative Functions with ES6

// ex1
// const person = {
//     name: "Taylor",
//     sayHello: function() {
//       return `Hello! My name is ${this.name}.`;
//     }
//   };

const person = {
    name : 'Taylor',
    sayHello(){
        return `hello! my name is ${this.name}`
    }
}
console.log(person.sayHello())


// ex2
// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear){
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);