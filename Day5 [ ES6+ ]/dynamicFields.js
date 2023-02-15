// ⚡ DYNAMIC FIELD IN JAVASCTIPT

// In JavaScript, dynamic fields are properties of an object that can be created
// or accessed dynamically at runtime. 

// This means that you can add, remove or modify properties of an object during
// the execution of your code, rather than defining them statically in the
// object's initial declaration.

// Dynamic properties can be useful in situations where you need to create
// or modify properties on the fly, such as when working with user input or 
// data that is generated at runtime. 

// 01 :  Example
const person = {
    name : 'Sobit Prasad',
    city : 'Guwahati'
}

// person.gmail = 'sobitprasad@gmail.com'
person[gmail] = 'sobitprasad@gmail.com'
console.log(person)
console.log(person.gmail)
console.log(person['gmail'])

// OUTPUT : 
// {
//     name: 'Sobit Prasad',
//     city: 'Guwahati',
//     gmail: 'sobitprasad@gmail.com'
//  }
// sobitprasad@gmail.com
// sobitprasad@gmail.com


// 02 : Dynamic Property Key
const products = (id, name) => {
    return {
        [id] : '00ed27',
        [name] : 'Men Jeans'
    }
}

console.log(products('productId', 'productName'))
// OUTPUT : 
// { productId: '00ed27', productName: 'Men Jeans' }


// 03 : Static Property Key
const items = (id, name) => {
    return {
        id : '00ed27',
        name : 'Men Jeans'
    }
}

console.log(items('itemId', 'itemName'))
// OUTPUT : 
// { id: '00ed27', name: 'Men Jeans' } 🚧