import React from 'react';

const animeWatchlist = [
    {
      id: 1,
      title: "Fullmetal Alchemist: Brotherhood",
      director: "Yasuhiro Irie",
      runtime: 64
    },
    {
      id: 2,
      title: "Attack on Titan",
      director: "Tetsurō Araki",
      runtime: 25
    },
    {
      id: 3,
      title: "Death Note",
      director: "Tetsurō Araki",
      runtime: 37
    },
    {
      id: 4,
      title: "Naruto Shippuden",
      director: "Hayato Date",
      runtime: 500
    },
    {
      id: 5,
      title: "Demon Slayer: Kimetsu no Yaiba",
      director: "Haruo Sotozaki",
      runtime: 26
    }
  ];
  

const AnimeList = () => {
  return (
    <div>
        <h2>anime watchlist</h2>
        <ul>
            {animeWatchlist.map(({id, title, director, runtime}) => {
                return <li key={id}>{title} - {director} - {runtime}</li>
            })}
        </ul>
    </div>
  )
}

export default AnimeList;

// 8. Create an array of objects representing animes in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component that takes the array of animes as input and generates an ordered list of animes, where each list item displays the movie's title, director, and runtime.