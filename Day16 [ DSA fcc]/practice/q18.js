const obj = { 'firstName': 'Elon', 'lastName': 'Musk' };
   const country = 'USA';

   const newObj = { ...obj, country, companies: ['Paypal', 'Tesla', 'SpaceX'] };
console.log(newObj);

// {
//     firstName: 'Elon',
//     lastName: 'Musk',
//     country: 'USA',
//     companies: [ 'Paypal', 'Tesla', 'SpaceX' ]
//   }
  