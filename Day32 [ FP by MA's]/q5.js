
// Write a function that uses reduce to calculate the total amount of money earned by the restaurant from all the orders.

const foodPrices = {
    burger: 50, 
    fries: 30,
    soda: 8, 
    pizza: 60, 
    salad: 10, 
    water: 2,
    sandwich: 30, 
    soup: 10, 
    coffee: 100
}
    
const orders = [
      { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
      { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
      { tableNumber: 3, items: ['sandwich', 'soup', 'coffee', 'sas'] },
];


const totalAmountFromEachTable = items => items.reduce((total, item) => total + (foodPrices[item] ?? 0), 0);

const getTotalRevenue = orders => orders.reduce((totalRevenue, {items}) => {
    return totalRevenue + totalAmountFromEachTable(items);
}, 0);

console.log(getTotalRevenue(orders)); //300