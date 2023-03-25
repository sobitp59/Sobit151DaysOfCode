// const x = async () => {
//     console.log('a');
//     console.log('b');
//     return 'c';
// }

// const y = () => new Promise(async (res, rej) => {
//     const val = await x;
// })

const second = async () => {
    console.log('g');
    return 'h';
};

const first = () => new Promise(async (resolve, reject) => {
        const value = await second();
        resolve('b');
});

console.log(first().then((data) => console.log(data)));

// function second(){
//         console.log('g');
//         return 'h';
// }

// function first(){
//     return new Promise(async function(resolve, reject){
//         const value = await second();
//         resolve('b');
//     })
// }
// console.log(first().then((data) => console.log(data)));