export const fetchForunAPI = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/questions') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              questions: [
                {
                  id: 1,
                  question:
                    'What is the difference between null and undefined in JavaScript?',
                  answer:
                    'Null means a variable has been declared but has no value. Undefined means a variable has not been declared or has not been assigned a value.',
                },
                {
                  id: 2,
                  question:
                    'What is the difference between let and var in JavaScript?',
                  answer:
                    'Let is block-scoped and var is function-scoped. Variables declared with let can only be accessed within the block they are declared, while variables declared with var can be accessed anywhere within the function they are declared.',
                },
                {
                  id: 3,
                  question: 'What is an arrow function in JavaScript?',
                  answer:
                    "An arrow function is a concise way to write a function in JavaScript. It uses the '=>' operator and does not have its own 'this' keyword, so it inherits 'this' from the parent scope.",
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Questions not found.',
          })
        }
      }, 2000)
    })
  }