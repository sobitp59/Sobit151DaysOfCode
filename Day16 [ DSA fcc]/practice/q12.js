console.log(a) // a is not defined
let b =30;
function sum(){
    var a=10;
    console.log(b) // 30
    function sub(){
        console.log(c); // undefined
        console.log(d); // reference error
        console.log(e); // 40
        var c=10;
      let d=30;
    }
    var e = 40;
    sub();
}
sum();
