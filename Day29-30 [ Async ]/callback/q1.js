//write your own function which takes a callback

const printName = name => console.log(name);
['ajay','mohan','ram','shyam'].map(printName); 
// printName is a callback function


const printOneandCalltheCBF = callback => {
    console.log('one');
    callback();
}
printOneandCalltheCBF(() => console.log('i am callback function!'))