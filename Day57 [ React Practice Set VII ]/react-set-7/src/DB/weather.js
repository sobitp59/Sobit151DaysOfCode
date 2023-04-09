export const fetchWeather = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/weather") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              temperature: 21,
              humidity: 50,
              windSpeed: 10
            }
          });
        } else {
          reject({
            status: 404,
            message: "Weather data not found."
          });
        }
      }, 2000);
    });
  };