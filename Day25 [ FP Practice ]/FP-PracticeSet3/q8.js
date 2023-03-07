// Write an ES6 function that takes an array of objects containing game information (title, developer, genre) and returns an array with all the games of a certain genre.

const games = [
    {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
    {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
    {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
    {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
  ];
  
// Your code here
const filterByGenre = (games, genreName) => games.filter(({genre}) => genre === genreName)

  
const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);
// Output: [{title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"}]
