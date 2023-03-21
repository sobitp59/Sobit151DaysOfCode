const second = async () => {
    setTimeout(()=>{
      console.log('f')
    },0)
      console.log('g');
    return 'h';
}
    
const first = () => new Promise(async (resolve,reject)=> {
    const value=second()
    console.log('a',value);

    setTimeout(()=> {
      console.log('c');
      resolve('b');
    },0);

    setTimeout(()=> {
      console.log('i');
      reject('j');
    },0);
      
    const latestValue = await value;
    console.log(latestValue)
})



    console.log('d');
    console.log(first().then((data)=>console.log(data)));
    console.log('e');


// d
// g
// a Promise { 'h' }    
// Promise { <pending> }
// e
// h
// f
// c
// b
// i