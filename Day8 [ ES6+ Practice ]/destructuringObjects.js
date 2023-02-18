//01
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



//02
const student = {
    studentName: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

//Not Possible :  const studentName, age, diceGame = student.studentName, student.age, student.projects.diceGame; 

const {studentName, age, projects : {diceGame}} = student;
console.log(studentName, age, diceGame)