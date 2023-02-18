//Exampple : 01
// function addressMaker(city, state) {
//     const newAddress = { city : city, state : state}
//     console.log(newAddress)
// }

function addressMaker(city, state) {
    const newAddress = {city, state}
    console.log(newAddress)
}

addressMaker('Austin', 'Texas'); // { city: 'Austin', state: 'Texas' }


//Example: 02
// function addressMaker(address) {
//     const newAddress = {
//         city: address.city,
//         state: address.state,
//         country: 'United States'
//     };
    
// }

function addressMakerNew({city, state}) {
    const newAddress = {
        city, state,
        country: 'United States'
    };
    console.log(newAddress)
}

addressMakerNew({city: 'Austin', state: 'Texas'});