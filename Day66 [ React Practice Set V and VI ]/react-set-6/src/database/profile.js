export const fetchProfile = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/profile') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              profiles: {
                name: 'John',
                age: 30,
                gender: 'male',
                email: 'john@example.com',
                occupation: 'Software Engineer',
              },
            },
          })
        } else {
          reject({
            status: 404,
            message: 'User Profile not found.',
          })
        }
      }, 2000)
    })
  }