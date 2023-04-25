export const fetchVideos = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/videos') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              videos: [
                {
                  id: 1,
                  title: 'Introduction to React',
                  description:
                    'Learn the basics of React in this introductory tutorial',
                  url: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
                  thumbnail:
                    'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg',
                  duration: '12:35',
                },
                {
                  id: 2,
                  title: 'JavaScript for Beginners',
                  description:
                    'Get started with JavaScript with this beginner-friendly tutorial',
                  url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
                  thumbnail:
                    'https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg',
                  duration: '20:17',
                },
                {
                  id: 3,
                  title: 'Python Crash Course',
                  description:
                    'Learn Python basics in this crash course for beginners',
                  url: 'https://www.youtube.com/watch?v=Z1Yd7upQsXY',
                  thumbnail:
                    'https://i.ytimg.com/vi/Z1Yd7upQsXY/hqdefault.jpg',
                  duration: '15:42',
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Video list not found.',
          })
        }
      }, 2000)
    })
  }