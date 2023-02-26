const obj = {
    country: "India",
    playerDetails: {
        name: "Virat",
        age: 33
},
}

const {playerDetails: {age: myAge=30, position: myPosition=3}}= obj
console.log(myAge, myPosition); // 33 3