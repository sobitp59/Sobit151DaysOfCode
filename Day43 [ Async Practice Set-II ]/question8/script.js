// Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.


const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allbooks") {
        reject({
          status: 400,
          message: "Bad Request"
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success"
          }
        });
      }
    }, 2000);
  });
};

// Your Code here

// Output on the DOM should be: 
// Bad Request! Requested size too large.

const output = document.getElementById('output');


fakeFetch('https://example.com/api/allbooks')
.then(() => {
  output.textContent = '';
  output.textContent = 'you are logged in!'
})
.catch(({message}) => {
  output.textContent = '';
  const errorPara = document.createElement('p');
  errorPara.textContent = `OOPS! ${message}! Please try again later.`;
  output.style.background = 'rgba(255, 0, 0, 0.113)'
  errorPara.style.color = 'red'
  output.appendChild(errorPara)
})
