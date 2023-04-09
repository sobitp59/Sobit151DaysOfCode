export const fetchComments = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/comments') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              comments: [
                {
                  name: 'Raju',
                  text: 'Hello how are you long time no see!!!',
                },
                { name: 'Pankaj', text: 'Party when??' },
                { name: 'Sakshi', text: 'Where are you currently staying' },
                { name: 'Kishore', text: 'Hello Buddy!!' },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'No comments Found',
          })
        }
      }, 2000)
    })
  }