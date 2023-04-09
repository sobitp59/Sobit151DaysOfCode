export const fetchCart = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/wishlist") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              wishlist: [
                { name: "Colors", price: 100, quantity: 4 },
                { name: "Phone", price: 40, quantity: 3 },
                { name: "Phone", price: 700, quantity: 3 },
                { name: "Phone", price: 80, quantity: 3 },
                { name: "Phone", price: 2000, quantity: 3 },
                { name: "Keyboard", price: 150, quantity: 2 },
                { name: "Laptop", price: 5000, quantity: 1 },
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
  