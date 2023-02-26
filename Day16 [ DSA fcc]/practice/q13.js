let x = 10;
function foo() {
  console.log(x); 
}
function bar() {
  let x = 20;
  foo(); 
}
bar(); // 10