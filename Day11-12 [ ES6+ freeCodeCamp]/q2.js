// Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    return s
  // Only change code above this line
}
console.log(editInPlace());