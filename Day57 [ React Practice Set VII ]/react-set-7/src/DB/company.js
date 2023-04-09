export const fetchCompany = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/users") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { name: "John Doe", email: "john@example.com", website: "example.com", company: "ABC Inc" },
              { name: "Jane Doe", email: "jane@example.com", website: "example.com", company: "XYZ Corp" },
              { name: "Bob Smith", email: "bob@example.com", website: "example.com", company: "ABC Inc" },
              { name: "Alice Brown", email: "alice@example.com", website: "example.com", company: "ACME Corp" },
              { name: "Charlie Green", email: "charlie@example.com", website: "example.com", company: "XYZ Corp" },
            ]
          });
        } else {
          reject({
            status: 404,
            message: "Users list not found."
          });
        }
      }, 2000);
    });
  };