export const fetchUsers = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/users/status') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              users: [
                { name: 'Raju', status: 'Online' },
                { name: 'Pankaj', status: 'Offline' },
                { name: 'Sakshi', status: 'Offline' },
                { name: 'Kishore', status: 'Offline' },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'No users Found',
          })
        }
      }, 2000)
    })
  }