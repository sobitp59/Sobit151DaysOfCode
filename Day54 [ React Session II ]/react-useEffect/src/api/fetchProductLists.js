export const fetchProductLists = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              products: [
                { name: "Colors", price: 100, quantity: 2 },
                { name: "Laptop", price: 5000, quantity: 4 },
                { name: "TV", price: 2000, quantity: 2 }
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found."
          });
        }
      }, 2000);
    });
  };
  