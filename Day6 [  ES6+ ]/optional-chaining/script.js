// 01
const user = {
    name : 'Sobit Prasad',
    age : 112,
    address : {
        street : '123 Main St.',
        city : 'Guwahati',
        state : 'Assam',
        zip : '123456'
    }
}

console.log(user.address)
// {
// street: '123 Main St.',
// city: 'Guwahati',      
// state: 'Assam',        
// zip: '123456'
// }

console.log(user.address.street)
// 123 Main St.

console.log(user.address.street.blockNumber)
// undefined

// console.log(user.address.street.blockNumber.landMark)
// TypeError: Cannot read properties of undefined (reading 'landMark')

console.log(user.address.street?.blockNumber?.landMark)
// undefined


//02
const product = {
    productId : 'sgf2878',
    productName : 'awesome product',
    description : function(){
        return 'The product is super cool!!'
    }
}

console.log(product.description())
// The product is super cool!!

// console.log(product.desc())
// TypeError: product.desc is not a function

console.log(product.desc?.())
// undefined


//03
const printCustomerCity = (customer) => {
    const customerCity = customer?.city ?? 'Unknown City'
    return customerCity
}

const customer1 = {
    name : 'John Cena',
    city : 'USA'
}
console.log(printCustomerCity(customer1)) // USA

const customer2 = {
    name : 'JohN Cena',
    state : 'Andhra Pradesh'
}
console.log(printCustomerCity(customer2)) // Unknown City