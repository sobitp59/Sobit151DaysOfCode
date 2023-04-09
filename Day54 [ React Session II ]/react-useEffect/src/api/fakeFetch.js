export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/employees") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              employees: [
                { id: "E1", name: "Arpit Jain", workExperience: 6 },
                { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
                { id: "E3", name: "Priya Shetty", workExperience: 9 },
                { id: "E4", name: "Aman Sen", workExperience: 1 },
                { id: "E5", name: "Nayan Sethi", workExperience: 4 },
                { id: "E6", name: "Tanvi Jani", workExperience: 5 },
                { id: "E7", name: "Bhargav Jain", workExperience: 6 }
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Employee list not found."
          });
        }
      }, 2000);
    });
  };
  