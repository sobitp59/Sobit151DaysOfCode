//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

const getJoke = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log('Here is the Joke: ')
    console.log(data.value)
    console.log('How was it? Rate here: ')
}
getJoke()
