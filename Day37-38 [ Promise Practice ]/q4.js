const first = () => new Promise((resolve,reject)=> {
  console.log('a');
  console.log('c');
})

console.log('d');

first()
.then((data) => {console.log(data);})
.catch(err=>console.log(err));
console.log('e')

// d
// a
// c
// e