// Use class Syntax to Define a Constructor Function

// ex1
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }

    takeOff(){
        console.log('To ' + this.targetPlanet + '!');
    }
}

const jup = new SpaceShuttle("Jupiter");
jup.takeOff();

class SpaceStation {
    launch(){
        console.log('To ISS!');
    }
}

const ISS = new SpaceStation();
ISS.launch()


// ex2
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(name, age){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);
    }
}

const sobit = new Person('Sobit', 22);
sobit.sayHello('Mohan', 22)


// ex3
// Only change code below this line
class Vegetable{
    constructor(name){
        this.name = name;
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'