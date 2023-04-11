export const fetchProductRating = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              products: [
                { name: "Color Pencils", price: 50, quantity: 40, rating: 4.5 },
                { name: "Sketchpens", price: 110, quantity: 20, rating: 3.8 },
                { name: "Eraser", price: 20, quantity: 20, rating: 4.2 },
                { name: "Sharpener", price: 22, quantity: 30, rating: 4.7 }
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