const fetchTodo = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/todos') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              todos: [
                {
                  title: 'Go Outside',
                  desc: 'lorem ipsum dolor sit amit',
                  todos: ['shopping', 'cricket', 'walking'],
                },
                {
                  title: "Let's Work",
                  desc: 'lorem ipsum dolor sit amit',
                  todos: ['Feature update', 'Team Meet', 'Code Walkthrough'],
                },
                {
                  title: 'Home Work',
                  desc: 'lorem ipsum dolor sit amit',
                  todos: ['Fix tap', 'Wedding function'],
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Todo list not found.',
          })
        }
      }, 2000)
    })
  }

  export default fetchTodo