const second = () => setTimeout(()=>{
    console.log('f')
  },2000)
  
  const first = () => new Promise((resolve,reject)=> {
    second()
    console.log('a');
  setTimeout(()=> {
    resolve('b');
    console.log('c');
  },4000)
  })

console.log('d');
  
first()
.then((data) => {console.log(data);})
.catch(err=>console.log(err));
  console.log('e');

// d
// a
// e
// f
// c
// b