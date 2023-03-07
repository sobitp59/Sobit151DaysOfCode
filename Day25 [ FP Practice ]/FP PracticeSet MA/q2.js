const company = {
    details: {
      name: "Acme Corp",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
    },
    employees: [
      {
        name: "Alice",
        age: 30,
        address: {
          street: "123 Main St",
          zip: "12345",
        },
      },
      {
        name: "Bob",
        age: 25,
        address: {
          street: "456 Main St",
          zip: "23456",
        },
      },
      {
        name: "Charlie",
        age: 35,
        address: {
          street: "789 Main St",
          zip: "34567",
        },
      },
    ],
  };


//  create an array of objects with the key as employee name and value as street name


const createObject = company => {
    const {details : {name, address} , employees} = company;
    return employees.reduce((empArray, emp) => {
        empArray.push( {[emp.name] : emp.address.street} )
        return empArray
    }, [{[name] : address}])
    // console.log(details, employees)
}

console.log(createObject(company));

// [
//     { 'Acme Corp': '123 Main St' },
//     { Alice: '123 Main St' },      
//     { Bob: '456 Main St' },        
//     { Charlie: '789 Main St' }     
//   ]
  