/* 
Suppose you are given an array of objects representing transactions made by customers on an online store. Each object has the following properties:

customerId (string): the unique ID of the customer who made the transaction
purchaseAmount (number): the amount of the purchase made by the customer
Write a function that takes this array of transactions as input and returns an object containing the total purchase amount for each customer. 
*/

const transactions = [
    { customerId: 'C01', purchaseAmount: 20 },
    { customerId: 'C02', purchaseAmount: 15 },
    { customerId: 'C01', purchaseAmount: 35 },
    { customerId: 'C03', purchaseAmount: 10 },
    { customerId: 'C02', purchaseAmount: 50 }
  ];
  
const calculateTotalAmounts = transactions => transactions.reduce((purchases, transaction) => {
   const {customerId, purchaseAmount} = transaction;
   purchases[customerId] = (purchases[customerId] || 0) + purchaseAmount ;
   return purchases
}, {})


const totalAmounts = calculateTotalAmounts(transactions);
console.log(totalAmounts);
// Output:
// {
//   C01: 55,
//   C02: 65,
//   C03: 10
// } 
  
  
  
  
  