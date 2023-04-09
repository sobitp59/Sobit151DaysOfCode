const fetchProduct = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/products') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              products: [
                {
                  name: 'Shoes',
                  price: 3000,
                  desc: 'lorem ipsum dolor sit amit',
                  src: 'https://picsum.photos/200/200',
                },
                {
                  name: 'Tshirt',
                  price: 500,
                  inStock: false,
                  desc: 'lorem ipsum dolor sit amit',
                  src: 'https://picsum.photos/201/201',
                },
                {
                  name: 'Trekking Bag',
                  price: 2000,
                  inStock: true,
                  desc: 'lorem ipsum dolor sit amit',
                  src: 'https://picsum.photos/205/205',
                },
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
export default fetchProduct  