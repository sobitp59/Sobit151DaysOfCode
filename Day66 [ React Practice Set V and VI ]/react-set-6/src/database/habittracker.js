const fetchHabit = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/habits') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              habits: [
                {
                  title: 'Drinking enough water',
                  desc: 'Aim to drink 5-6L of water each day to stay hydrated',
                  daysFollowed: 7,
                  daysSkipped: 3,
                },
                {
                  title: 'Exercise',
                  desc: 'Track your workouts and aim to exercise a certain number of days per week',
                  daysFollowed: 10,
                  daysSkipped: 4,
                },
                {
                  title: 'Meditation',
                  desc: 'Track your daily meditation practice and try to increase the length of your sessions over time',
                  daysFollowed: 30,
                  daysSkipped: 7,
                },
                {
                  title: 'Gratitude',
                  desc: 'Write down something you are grateful for each day',
                  daysFollowed: 11,
                  daysSkipped: 5,
                },
                {
                  title: 'Saving Money',
                  desc: 'Track your expenses and set a goal to save a certain amount of money each month',
                  daysFollowed: 40,
                  daysSkipped: 15,
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Habits not found.',
          })
        }
      }, 2000)
    })
  }

export default fetchHabit;