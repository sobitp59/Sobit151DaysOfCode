// setTimeOut
const cb = () => console.log(`i printed after 3000ms`)
setTimeout(cb, 3000);

const printName = (name, work, correct) => console.log(`${name} is awesome ${work}!! ${correct}`); 
setTimeout(printName, 2000, 'sobit', 'developer', 'yes')


