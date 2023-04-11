export const fetchProducts = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
           data: {
              products: [
                { 
                  name: "Product 1",
                  description: "This is the first product",
                  price: 25.99, 
                  quantity: 10 
                },
                { 
                  name: "Product 2",
                  description: "This is the second product",
                  price: 19.99, 
                  quantity: 15 
                },
                { 
                  name: "Product 3",
                  description: "This is the third product",
                  price: 35.50, 
                  quantity: 5 
                },
                { 
                  name: "Product 4",
                  description: "This is the fourth product",
                  price: 49.99, 
                  quantity: 20 
                }
              ]
            }
            
          });
        } else {
          reject({
            status: 404,
            message: "Product list not found."
          });
        }
      }, 2000);
    });
  };