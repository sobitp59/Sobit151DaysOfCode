// async-await is the another way of writing promises

// 01 : using promises
// const one = () => Promise.resolve('one 1');

// const two = () => {
//     console.log('inside function! 2');
//     Promise.resolve(one()).then(data => console.log(data));
// }

// console.log('before function!! 3');
// two();
// console.log('after function!! 4');


// 02: using async/await
// const one = () => Promise.resolve('one 1');
const one = async () => await 'one 1';

const two = async () => {
    console.log('inside function!! 2');
    const data = await one();
    console.log(data);
}

console.log('before function!! 3');
two();
console.log('after function!! 4');

