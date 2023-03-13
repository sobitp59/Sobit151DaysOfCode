import React from 'react';

const watchlist = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont"
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola"
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan"
    },
    {
      id: 4,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      director: "Peter Jackson"
    },
    {
      id: 5,
      title: "Pulp Fiction",
      director: "Quentin Tarantino"
    }
];

const MovieList = () => {


    
  return (
    <div>
        <h2>movie watchlist</h2>
        <ul>
            {watchlist.map(({id, title, director}) => {
                return <li key={id}>{title} : {director}</li>
            })}
        </ul>
    </div>
  )
}

export default MovieList;

// 1. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title and director. Write a React component that takes the array of movies as input and returns an unordered list of movies, where each list item displays the movie's title and director.
