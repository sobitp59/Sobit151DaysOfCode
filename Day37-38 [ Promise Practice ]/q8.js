const second = () => setTimeout(() => {
    console.log('f')
  }, 2000)
  
const first = () => new Promise((resolve, reject) => {
      second()
      console.log('a');
      setTimeout(() => {
        console.log('c');
      }, 0);
      resolve('b');
    })


  console.log('d');
  
  first().then(() => console.log('g'))
  .catch(err => console.log(err)); 
  console.log('e');

// d
// a
// e
// g
// c
// f