let x = 10;
let y = 20;
function foo() {
  let x = y = 30;
}
foo();
console.log(x, y); // 10 30