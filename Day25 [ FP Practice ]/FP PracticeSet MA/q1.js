const sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

// compute the totalValue for each object in the array and add the totalValue 
// filed to the object(total = original (1-discount)*stock)

const calculateTotalValue = sales => sales.map((sale) => {
    const {stock, original, discount} = sale;
    const totalValue = JSON.parse((original * (discount ? (1 - discount) : 1) * stock).toFixed(2));
    return {...sale, totalValue : totalValue}
})

console.log(calculateTotalValue(sales))