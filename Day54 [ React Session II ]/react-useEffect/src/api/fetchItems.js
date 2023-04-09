export const fetchItems = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/cart") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              cart: [
                { name: "Hat", price: 30, quantity: 10 },
                { name: "Bottle", price: 60, quantity: 4 },
                { name: "Tiffin", price: 100, quantity: 3 }
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Cart list not found."
          });
        }
      }, 2000);
    });
  };
  