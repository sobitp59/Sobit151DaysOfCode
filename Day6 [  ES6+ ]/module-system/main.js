import User, { addition, areaOfCircle as CircleArea, division, PI, substraction } from "./user.js";

const user = User('Bob', 11)
console.log(user)

const add = addition(10,10)
console.log(`ADDITION : ${add}`)

const sub = substraction(10,10)
console.log(`SUBSTARCTION : ${sub}`)

const div = division(10,10)
console.log(`DIVISION : ${div}`)

const area = CircleArea(20, PI)
console.log(`CIRCLE AREA : ${area}`)