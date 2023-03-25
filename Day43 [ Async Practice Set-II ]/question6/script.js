// Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.


const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 }
          ]
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};

// Your Code here

// Output on the DOM should be:
// Total: INR 2600
const output = document.getElementById('output');


fakeFetch('https://example.com/api/productlist')
.then(({data}) => {
  output.textContent = '';
  const totalPrice = data.reduce((total, {quantity, price}) => total + (price * quantity), 0)
  output.textContent = `Total : INR ${totalPrice} 💸`
})
.catch((err) => {
    const ERROR = err.message;
    output.textContent = `${ERROR} : some error occurs`
})
