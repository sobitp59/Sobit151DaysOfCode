// Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.


const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true
          }
        });
      } else {
        reject({
          status: 404,
          message: "Status not found"
        });
      }
    }, 2000);
  });
};

// your code here

// Output on the DOM should be:
// Verified
  
// your code here
const output = document.getElementById('output');


fakeFetch('https://example.com/login')
.then(({data : {auth}}) => {
    if(auth){
      output.textContent = `congratulations!
      you are verified 🎊
      `
    }
})
.catch((err) => {
    const ERROR = err.message;
    output.textContent = `${ERROR} : some error occurs`
})





// for (const user of userData) {
//     console.log(user)
// }



// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com