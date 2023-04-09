export const fetchMovies = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/movies") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { title: "The Dark Knight", year: 2008, rating: 9.0 },
              { title: "Inception", year: 2009, rating: 8.8 },
              { title: "Interstellar", year: 2010, rating: 8.6 },
              { title: "Tenet", year: 2009, rating: 7.5 },
              { title: "Real Steal", year: 2007, rating: 7.5 },
            ],
          });
        } else {
          reject({
            status: 404,
            message: "Movies list not found.",
          });
        }
      }, 2000);
    });
  };