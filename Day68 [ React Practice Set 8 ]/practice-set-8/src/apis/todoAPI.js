export const fetchTodos = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/todos') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              todos: [
                {
                  id: 1,
                  title: 'Complete practice set 7',
                  description: 'Practice set 7 of React',
                  isCompleted: true,
                },
                {
                  id: 2,
                  title: 'Attend revision session',
                  description: 'Revision session of React',
                  isCompleted: false,
                },
                {
                  id: 3,
                  title: 'Watch recording',
                  description: 'Live session recording of React',
                  isCompleted: true,
                },
                {
                  id: 4,
                  title: 'Attend DSH',
                  description: 'Doubt Solving Hours of React',
                  isCompleted: false,
                },
                {
                  id: 5,
                  title: 'Complete practice set 8',
                  description: 'Practice set 8 of React',
                  isCompleted: false,
                },
                {
                  id: 6,
                  title: 'Watch a movie',
                  description: 'Watch an old movie from my watchlist',
                  isCompleted: true,
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Todos not found.',
          })
        }
      }, 2000)
    })
  }