export const fetchUser = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/user") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              name: "John Doe",
              email: "john.doe@example.com",
              phone: "+1 555-555-5555",
              address: {
                street: "123 Main St",
                suite: "Suite 456",
                city: "Anytown",
                zipcode: "12345"
              }
            }
          });
        } else {
          reject({
            status: 404,
            message: "User not found."
          });
        }
      }, 2000);
    });
  };