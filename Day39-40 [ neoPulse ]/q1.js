// Q1
// Create an object movie with properties name, director, and rating. Create a function getMovieDetails that takes a movie object as a parameter and returns if the movie has rating more than 4.

const movie = {
    name : 'movie name',
    director : 'director name',
    rating : 5
}

const getMovieDetails = ({rating}) => {
    return rating > 4;
}

console.log(getMovieDetails(movie));