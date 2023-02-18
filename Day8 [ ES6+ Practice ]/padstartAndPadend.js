let name = "Sobit";
console.log(name.padStart(12, "W")); //WWWWWWWSobit
console.log(name.padEnd(8, "O")); //SobitOOO


let example = 'FrontendDeveloper.com/LearningDevelopment200';

console.log(example.padStart(100));
console.log(example.padEnd(1));


// Displaying credit card numbers
const cardNumber = '2012 4434 1121 2342';
const last4digit = cardNumber.slice(-4);
const maskedNumber = last4digit.padStart(cardNumber.length, "*")
console.log(maskedNumber) // ***************2342

