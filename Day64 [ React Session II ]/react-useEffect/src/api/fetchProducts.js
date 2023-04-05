export const fetchProducts = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              products: [
                { id: "P1", name: "Hat", price: 30, quantity: 10 },
                { id: "P2", name: "Bottle", price: 50, quantity: 4 },
                { id: "P3", name: "Tiffin", price: 100, quantity: 3 },
                { id: "P4", name: "Pencil", price: 10, quantity: 6 }
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Products list not found."
          });
        }
      }, 2000);
    });
  };
  