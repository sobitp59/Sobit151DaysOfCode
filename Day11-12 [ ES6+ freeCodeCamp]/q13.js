// Destructuring via rest elements

// ex1
const [a,b , ...rest] = [1,2,3,4,4,5,6,6,77,];
console.log(a,b); // 1 2
console.log(rest); // [3, 4,  4, 5, 6, 6, 77]

// ex2
function removeFirstTwo(list) {
    // Only change code below this line

    const [,, ...shorterList] =list; // Change this line
    // Only change code above this line
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  console.log(sourceWithoutFirstTwo)