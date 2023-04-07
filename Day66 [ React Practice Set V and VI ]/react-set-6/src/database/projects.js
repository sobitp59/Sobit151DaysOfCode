export const fetchProjects = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/projects') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              projects: [
                {
                  title: 'E-commerce Website',
                  description:
                    'A fully functional e-commerce website with shopping cart and checkout functionality.',
                  technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                  completed: false,
                },
                {
                  title: 'Weather App',
                  description:
                    'A web application that displays the current weather and forecast for a given location.',
                  technologies: ['React', 'Node.js', 'OpenWeatherMap API'],
                  completed: true,
                },
                {
                  title: 'Task Manager',
                  description:
                    'A web application that allows users to create, manage and track tasks.',
                  technologies: ['Vue.js', 'Firebase'],
                  completed: false,
                },
                {
                  title: 'Blog Website',
                  description:
                    'A blog website that allows users to create, read, update and delete blog posts.',
                  technologies: ['React JS', 'MongoDB'],
                  completed: true,
                },
                {
                  title: 'Mobile Game',
                  description:
                    'A mobile game developed for iOS and Android platforms.',
                  technologies: ['Unity', 'C#'],
                  completed: false,
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Projects not found.',
          })
        }
      }, 2000)
    })
  }