
// function y(){
//     console.log('YYYYY')
// }

// function x(){
//     console.log('XXXXXXX');
//     y();
// }

// console.log(x());

// const second = async () => {
//     setTimeout(() => {
//         console.log('f')
//     }, 0)
//     console.log('g');
//     return 'h';
// }

const first = () => new Promise(async (resolve, reject) => {
    // const value = await second();
    console.log('a', value);
    setTimeout(() => {
        console.log('c');
    }, 0);
    resolve('b');
})

console.log('d');
console.log(first().then((data) => console.log(data)));
console.log('e');


// async function y(){
//     console.log('i am y')
//     return 'dataY'
// }

// function x(){
//     return new Promise(async (res, rej) => {
//         const data = await y();
//         console.log(data);
//         console.log('i am inside promise');
//         res('awsed');        
//         console.log('i am inside promise too');
//     })
// }

// x()
// .then(data => console.log(data));