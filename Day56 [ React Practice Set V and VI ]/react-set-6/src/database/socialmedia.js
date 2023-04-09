export const fetchSocialMedia = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/profile') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              profile: {
                name: 'John',
                age: 30,
                gender: 'male',
                email: 'john@example.com',
                occupation: 'Software Engineer',
                followers: 450,
                followedBy: 400,
              },
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Profile not found.',
          })
        }
      }, 2000)
    })
  }