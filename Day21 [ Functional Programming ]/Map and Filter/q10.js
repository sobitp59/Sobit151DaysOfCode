// Suppose you have an array of objects representing customers in a store, with
// properties for name, age, purchases, and loyalty. Each purchases property is 
// itself an array of objects representing individual purchases, with properties 
// for item and price. You want to create a new array with the names of all customers
// over 40 years old who have spent at least $1000 in total, sorted in descending order by 
// their loyalty level (which is a number between 1 and 5, with 5 being the most loyal).

const getLoyalOldCustomers = customers => customers
                                          .filter(({age}) => age >= 45)
                                          .filter(({purchases}) => {
                                            let total = 0;
                                            purchases.map(({price}) => total += price);
                                            return total > 1000;
                                          })
                                          .sort((a,b) => b.loyalty - a.loyalty)
                                          .map(({name}) => name)



const customers = [
    {
      name: 'Alice',
      age: 45,
      purchases: [
        { item: 'iPhone', price: 799 },
        { item: 'MacBook Pro', price: 1499 },
        { item: 'AirPods', price: 159 }
      ],
      loyalty: 4
    },
    {
      name: 'Bob',
      age: 38,
      purchases: [
        { item: 'Hoodie', price: 49 },
        { item: 'Sneakers', price: 99 },
        { item: 'Sunglasses', price: 149 }
      ],
      loyalty: 2
    },
    {
      name: 'Charlie',
      age: 53,
      purchases: [
        { item: 'Frying pan', price: 29 },
        { item: 'Blender', price: 79 },
        { item: 'Knife set', price: 89 }
      ],
      loyalty: 5
    },
    {
      name: 'David',
      age: 47,
      purchases: [
        { item: 'Tennis racket', price: 129 },
        { item: 'Golf clubs', price: 299 },
        { item: 'Fitness tracker', price: 99 }
      ],
      loyalty: 3
    },
    {
      name: 'Eve',
      age: 61,
      purchases: [
        { item: 'iPad', price: 329 },
        { item: 'Apple Watch', price: 599 },
        { item: 'Smart keyboard', price: 179 }
      ],
      loyalty: 4
    }
  ];

console.log(getLoyalOldCustomers(customers));
// Output: [ 'Alice', 'Eve' ]  
// getLoyalOldCustomers(customers);





