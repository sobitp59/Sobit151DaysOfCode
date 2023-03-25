// Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/photo") {
        resolve({
          status: 200,
          data: {
            photo: {
              link: "https://source.unsplash.com/featured/300x201",
              title: "Random Image"
            }
          }
        });
      } else {
        reject({
          status: 404,
          message: "No order found"
        });
      }
    }, 2000);
  });
};

// your code here

// Output: an image on the DOM
const output = document.getElementById('output');


fakeFetch('https://example.com/photo')
.then(({data : {photo}}) => {
  output.textContent = ''
  const image = document.createElement('img');
  image.setAttribute('src', `${photo.link}`)
  image.setAttribute('alt', `a random image from unsplash`)
  output.appendChild(image)
})
.catch((err) => {
    const ERROR = err.message;
    output.textContent = `${ERROR} : some error occurs`
})
