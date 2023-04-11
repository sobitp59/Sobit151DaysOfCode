export const fetchMovieGenre = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/movies") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              {
                title: "The Godfather",
                year: 1972,
                genre: "Crime"
              },
              {
                title: "The Shawshank Redemption",
                year: 1994,
                genre: "Drama"
              },
              {
                title: "The Dark Knight",
                year: 2008,
                genre: "Action"
              },
              {
                title: "Forrest Gump",
                year: 1994,
                genre: "Comedy"
              },
              {
                title: "The Matrix",
                year: 1999,
                genre: "Science Fiction"
              },
              {
                title: "Jurassic Park",
                year: 1993,
                genre: "Science Fiction"
              },
              {
                title: "Star Wars: Episode IV - A New Hope",
                year: 1977,
                genre: "Science Fiction"
              },
              {
                title: "The Terminator",
                year: 1984,
                genre: "Action"
              },
              {
                title: "Die Hard",
                year: 1988,
                genre: "Action"
              },
              {
                title: "Pulp Fiction",
                year: 1994,
                genre: "Crime"
              }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "Movies list not found."
          });
        }
      }, 2000);
    });
  };