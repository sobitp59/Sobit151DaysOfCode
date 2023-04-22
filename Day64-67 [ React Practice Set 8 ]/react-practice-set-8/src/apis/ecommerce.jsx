export const fetchProducts = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/products') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              products: [
                {
                  id: 1,
                  name: 'Apple iPhone 13 Pro Max',
                  description:
                    '6.7-inch Super Retina XDR display with ProMotion. Ceramic Shield front cover. A15 Bionic chip. 5G capable. Pro camera system. ',
                  price: 1099,
                  quantity: 10,
                  category: 'Smartphones',
                  brand: 'Apple',
                },
                {
                  id: 2,
                  name: 'Samsung Galaxy S21 Ultra',
                  description:
                    '6.8-inch Dynamic AMOLED 2X display. Gorilla Glass Victus front and back. Exynos 2100 or Snapdragon 888 chipset. 5G capable. Quad camera system.',
                  price: 1199,
                  quantity: 8,
                  category: 'Smartphones',
                  brand: 'Samsung',
                },
                {
                  id: 3,
                  name: 'Apple MacBook Air',
                  description:
                    '13.3-inch Retina display with True Tone. M1 chip. 8-core CPU. 7-core GPU. Up to 18 hours of battery life. ',
                  price: 999,
                  quantity: 5,
                  category: 'Laptops',
                  brand: 'Apple',
                },
                // and so on...
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