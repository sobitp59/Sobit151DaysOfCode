// Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari"
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

// Output on the DOM should be:
// Hello Kajal Kumari your order status is delivery pending.
// your code here
const output = document.getElementById('output');


fakeFetch('https://example.com/order/status/OR00A12')
.then(({data : {order}}) => {
    output.textContent = '';
    const {orderId, status, userName} = order;
    output.textContent = `${userName} your order status having OrderId ${orderId} is ${status}.`
})
.catch((err) => {
    const ERROR = err.message;
    output.textContent = `${ERROR} : some error occurs`
})
