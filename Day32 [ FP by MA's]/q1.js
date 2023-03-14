// 1.Write a function that uses reduce to calculate the total amount of money earned by the restaurant from all the orders. Assume that each item costs $10.

const orders = [
  { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
  { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
  { tableNumber: 3, items: ['sandwich', 'soup', 'coffee'] },
];

const getTotalAmount = orders => orders.reduce((totalAmount, {items}) => {
    return totalAmount + (items.length * 10);
}, 0)
console.log(getTotalAmount(orders))

// Output 90