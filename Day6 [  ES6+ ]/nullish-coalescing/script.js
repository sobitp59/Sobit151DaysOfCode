// NULLISH COALESCING OPERATOR ??

//01
const myVariable = null
const myDefault = 100
const myValue = myVariable ?? myDefault
console.log(myValue)

//02
const myObj = {
    prop1 : null,
    prop2 : 100
}
const defaultObj = {name : 'Sobit'} 

const prop1Value = myObj.prop1 ?? defaultObj
const prop2Value = myObj.prop2 ?? defaultObj
console.log(prop1Value)
console.log(prop2Value)


//03
const data = 22;

const valOne = (data ?? 'default') || 'anotherDefault';
const valTwo = data ?? ('default' || 'anotherDefault');

console.log(valOne);
console.log(valTwo);

//04
console.log( null || 'This One') // This One
console.log( null ?? 'This One') // This One

console.log(0 || 'This One') // This One
console.log(0 ?? 'This One') // 0

console.log(1 || 'This One') // 1
console.log(1 ?? 'This One') // 1


//04
const userData = {
    name : 'Sobit Prasad',
    email : 'sobitprasad@gmail.com',
    city : null
}

const getUserData = ({name, email, city}) => {
    return {
        name : name ?? 'unknown',
        email : email ?? 'no email provided',
        city : city ?? 'Mars'
    }
}

console.log(getUserData(userData))