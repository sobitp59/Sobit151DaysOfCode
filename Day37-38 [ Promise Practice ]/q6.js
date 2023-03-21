const second = () => setTimeout(()=>{
    console.log('f')
  },2000)
  
const first = () => new Promise((resolve,reject)=> {
    second();
    resolve('a');
    reject('b');
    console.log('c');
})

console.log('d');
  
first()
.then((data) => {console.log(data);})
.catch(err=>console.log(err));

console.log('e');

// d
// c
// e
// a
// f