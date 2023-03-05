 // 07: Given an array of objects representing movies, use reduce() to calculate the total box office revenue of all the movies combined.

const movies = [
    { title: 'The Dark Knight', boxOffice: 1000000000 },
    { title: 'The Avengers', boxOffice: 1518812988 },
    { title: 'Avatar', boxOffice: 2787965087 },
    { title: 'Jurassic Park', boxOffice: 1039000000 }
];

const getBoxOfficeCollection = movies => movies.reduce((currCollection, currMovie) => {
    return currCollection + currMovie.boxOffice;
}, 0)

console.log(getBoxOfficeCollection(movies)); // 6345778075