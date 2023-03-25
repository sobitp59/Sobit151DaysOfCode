// Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of winner group members and show a nice message on the DOM congratulating all of them. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.


const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"]
          }
        });
      } else {
        reject({
          status: 404,
          message: "No Users found."
        });
      }
    }, 2000);
  });
};


// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.
  
// your code here
const output = document.getElementById('output');


fakeFetch('https://example.com/winner-team')
.then(({data : {data}}) => {
    output.textContent = ''
    const p = document.createElement('p');
    p.textContent = `Congratulation to the members of winning team ${data.map((name) =>  name).join(', ')} great work keep it up.`
    output.appendChild(p)
})
.catch((err) => {
    const ERROR = err.message;
    output.innerHTML = `<h2>${ERROR}</h2>`
})
