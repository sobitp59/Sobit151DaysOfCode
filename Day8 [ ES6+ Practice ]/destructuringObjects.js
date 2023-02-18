const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
};

// const name = player.name;
const { name } = player;
console.log(name); // Lebron James

// const club = player.club;
const { club } = player;
console.log(club);

// const city = player.address.city;
const { address : {city} } = player;
console.log(city);

