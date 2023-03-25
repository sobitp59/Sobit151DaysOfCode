const second = async () => {
    setTimeout(() => {
        console.log('f')
    }, 0)
    console.log('g');
    return 'h';
}

const first = () => new Promise(async (resolve, reject) => {
        const value = await second()
        console.log('a', value);
        setTimeout(() => {
            console.log('c');
        }, 0);
        resolve('b');
})

console.log('d');
console.log(first().then((data) => console.log(data)));
console.log('e');


// d
// g























// first().then((data) => console.log(data));


// const func = async () => {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("1: hello javascript"), 5000)
//     });

    
//     let result = await promise;

//     console.log(result);
//     console.log('2: hello react');
// }

// func();
