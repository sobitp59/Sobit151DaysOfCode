export const fetchUserProfile = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/user') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              name: 'Saroj',
              image:
                'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg',
              likes: 500,
              comments: 10,
            },
          })
        } else {
          reject({
            status: 404,
            message: 'user data not found.',
          })
        }
      }, 2000)
    })
  }