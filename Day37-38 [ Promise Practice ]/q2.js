const second = () => setTimeout(()=>{
    console.log('f')
  },2000)
  
  const first = () => new Promise((resolve,reject)=> {
    second()
    console.log('a');
    reject('b');
    console.log('c');
  })

  console.log('d');
  
  first()
  .then((data) => { console.log(data);})
  .catch(err=>console.log(err));
  console.log('e');

// d
// a
// c
// e
// b
// f
