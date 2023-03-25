// Use this URL - https://example.com/welcome to make a fake fetch call and display a welcome message to the user on the DOM. Welcome message (if provided) should be used else the default message of Welcome to the servershould be shown. Message should be only shown if the user is logged in. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.


const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/welcome") {
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


fakeFetch('https://example.com/welcome')
.then(() => {
  output.textContent = '';
  output.textContent = 'welcome to the server!'
})
.catch(({message}) => {
  output.textContent = '';
  const errorPara = document.createElement('p');
  errorPara.textContent = `${message}! Requested size too large.`;
  output.style.background = 'rgba(255, 0, 0, 0.113)'
  errorPara.style.color = 'red'
  output.appendChild(errorPara)
})
