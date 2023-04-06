export const fetchProducts = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/products') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              products: [
                { name: 'Color Pencils', price: 50, quantity: 40 },
                { name: 'Sketchpens', price: 110, quantity: 20 },
                { name: 'Erasor', price: 20, quantity: 20 },
                { name: 'Sharpner', price: 22, quantity: 30 },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Items list not found.',
          })
        }
      }, 2000)
    })
  }