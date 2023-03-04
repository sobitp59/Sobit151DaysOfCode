//6.
// Write a function that takes the above object and returns a new array containing the company names for people having names starting with A.

const obj = {
        details: [{name: 'Ankit', company: 'Chalo'},
              {name: 'Rohan', company: 'Razorpay'},
              {name: 'Shivam', company: 'No Broker'}                            ]
        }

// const getNames = ({details}) => details.filter(({name}) => name.startsWith('A'));
const getNames = obj => {
      const {details} = obj;
      return details.filter(({name}) => name.startsWith('A'))
}
console.log(getNames(obj));
// [ { name: 'Ankit', company: 'Chalo' } ]