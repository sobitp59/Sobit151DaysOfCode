// Write an ES6 function that takes an array of objects containing customer information (name, age, gender) and returns an array with only the customers who are of gender Male.

const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
  ];
  
  // Your code here
  const getMaleCustomers = customers => customers.filter(({gender}) => gender === 'Male')

  
  const maleCustomers = getMaleCustomers(customers);
  console.log(maleCustomers); 
  // Output: [{ name: 'John', age: 25, gender: 'Male' }, { name: 'Bob', age: 40, gender: 'Male' }]
