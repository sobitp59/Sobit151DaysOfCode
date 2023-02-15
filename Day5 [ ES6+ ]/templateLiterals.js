// TEMPLATE LITERALS
// Template literals are a feature in JavaScript that allow
// you to embed expressions inside of string literals using
//  backticks (` `) instead of single quotes (' ') or double quotes (" ").


// 01
const name = 'Sobit Prasad'
const degree = 'BCA'

console.log(`hey! my name is ${name} and i am in ${degree} final year.`)
// hey! my name is Sobit Prasad and i am in BCA final year.


// 02 : Multiple line string
const poem = `Roses are red,
Violets are blue,
      Sugar is sweet,
And so are you.`;

console.log(poem);
// OUTPUT : 
// Roses are red,
// Violets are blue,
//       Sugar is sweet,
// And so are you.


// 03
const evenOrOdd = (num) => {
      if(!(num % 2)){
            return `${num} is Even`
      }
      return `${num} is Odd`
}
console.log(evenOrOdd(151)) // 151 is Odd
console.log(evenOrOdd(1))   // 1 is Odd
console.log(evenOrOdd(22))  // 22 is Even
console.log(evenOrOdd(77))  // 77 is Odd