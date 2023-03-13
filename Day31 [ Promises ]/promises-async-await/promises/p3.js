// microtask and macrotask

console.log('start');

Promise.resolve('data fetching!!')
.then(data => console.log(data));

console.log('end');

// OUTPUT
// start
// end
// data fetching!!