const second = async () => { setTimeout(()=>{
      console.log('f')
    },0)
      console.log('g');
    return 'h';
    }

const first = () => new Promise((resolve,reject)=> {
      second()
      console.log('a');
    setTimeout(()=> {
      console.log('c');
    },0);
      resolve('b');
    })


console.log('d');
console.log(first());
console.log('e');

// d
// g
// a
// Promise { 'b' }
// e
// f
// c
