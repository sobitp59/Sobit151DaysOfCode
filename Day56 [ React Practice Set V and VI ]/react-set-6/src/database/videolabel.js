export const fetchVideoLable = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/getvideo') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              videos: {
                title: 'The Power of Habit',
                thumbnail: 'https://picsum.photos/250/130',
                views: 1000000,
                likes: 50000,
              },
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Video not found.',
          })
        }
      }, 2000)
    })
  }