// You can use your own images if you wish

export const fetchUserFeed = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/users') {
          resolve({
            status: 200,
            message: 'Success',
            data: [
              {
                name: 'Saroj',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 500,
                comments: 10,
              },
              {
                name: 'Meeta',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 200,
                comments: 1,
              },
              {
                name: 'Alia',
                image:
                  'https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg',
                likes: 100,
                comments: 5,
              },
            ],
          })
        } else {
          reject({
            status: 404,
            message: 'users data not found.',
          })
        }
      }, 2000)
    })
  }