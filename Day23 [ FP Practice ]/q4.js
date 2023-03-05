//04: Using reduce() to group objects in an array. For example, grouping products in a shopping cart according to their brand name.


const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const getGroupedProductsByName = shoppingCart => shoppingCart.reduce((currGroupedObj, currProduct) => {
    let productName = currProduct.name;
    if(currGroupedObj[productName] == null){
        currGroupedObj[productName] = []
    }
    currGroupedObj[productName].push(currProduct);
    return currGroupedObj;    
}, {})

console.log(getGroupedProductsByName(shoppingCart))
// {
//     Apple: [
//       { name: 'Apple', price: 1.99, quantity: 3 },
//       { name: 'Apple', price: 1.99, quantity: 3 }
//     ],
//     Xiomi: [ { name: 'Xiomi', price: 2.99, quantity: 2 } ],
//     Samsung: [ { name: 'Samsung', price: 3.99, quantity: 1 } ],
//     Tesla: [
//       { name: 'Tesla', price: 3.99, quantity: 1 },
//       { name: 'Tesla', price: 4.99, quantity: 4 }
//     ],
//     Nokia: [ { name: 'Nokia', price: 4.99, quantity: 4 } ]
//  }




// USING THE MANUAL WAY
const getMergedCart = (currMergedObj, currProduct) => {
    let name = currProduct.name;
    if(currMergedObj[name] == null){
        currMergedObj[name] = []
    }
    currMergedObj[name].push(currProduct);
    return currMergedObj;
}

let mergedCart = {}
mergedCart = getMergedCart(mergedCart, shoppingCart[0])
mergedCart = getMergedCart(mergedCart, shoppingCart[1])
mergedCart = getMergedCart(mergedCart, shoppingCart[2])
mergedCart = getMergedCart(mergedCart, shoppingCart[3])
mergedCart = getMergedCart(mergedCart, shoppingCart[4])
mergedCart = getMergedCart(mergedCart, shoppingCart[5])
mergedCart = getMergedCart(mergedCart, shoppingCart[6])
console.log(mergedCart)