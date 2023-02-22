// Use getters and setters to Control Access to an Object

class Book {
    constructor(author){
        this._author = author;
    }

    // getter
    get writer(){
        return this._author;
    }

    //setter
    set writer(updateAuthor){
        this._author = updateAuthor;
    }
}

const novel = new Book('Anonymous');
console.log(novel.writer);
novel.writer = 'Mitch Albom';
console.log(novel.writer);



// ex2
class Thermostat{
    constructor(fahrenheit){
        this._fahrenheit = fahrenheit;
    }

    get temperature(){
        return 5/9 * (this._fahrenheit - 32)
    }

    set temperature(celcius){
        this._fahrenheit = celcius * 9.0 / 5 + 32
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp)