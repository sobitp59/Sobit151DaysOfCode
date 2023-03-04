// 5. 
// Write a function that takes the above object and returns a new array containing the company names.


const obj = {details:[{name: 'Ankit', company: 'Chalo'},
                     {name: 'Rohan', company: 'Razorpay'},
                     {name: 'Shivam', company: 'No Broker'}
                    ]}


const getCompanyNames = ({details}) => details.map(({company}) => company);
console.log(getCompanyNames(obj))                

// Output: ['Chalo', 'Razorpay', 'No Broker']