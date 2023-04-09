const async = () => new Promise((resolve,reject) => {
    console.log('a');
    resolve('b');
});

const myFunc = res => {
    console.log('g',res);
}

console.log(async().then(myFunc).catch((err) => console.log(err))); 
console.log('e');

// a
// <promise>
// e
// g b 