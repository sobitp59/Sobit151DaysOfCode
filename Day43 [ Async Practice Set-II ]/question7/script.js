// Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.


const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        reject({
          status: 500,
        message: "Internal Server Error"
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

// Output on the DOM should be (in red color): 
// Oops. Unexpected Error. Please try again.
const output = document.getElementById('output');


fakeFetch('https://example.com/api/users')
.then(() => {
  output.textContent = '';
  output.textContent = 'you are logged in!'
})
.catch(({message}) => {
  output.textContent = '';
  const errorPara = document.createElement('p');
  errorPara.textContent = `OOPS! ${message}! Please try again later.`;
  output.style.background = 'rgba(255, 0, 0, 0.213)'
  errorPara.style.color = 'red'
  output.appendChild(errorPara)
})
