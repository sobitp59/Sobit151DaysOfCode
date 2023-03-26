// const cart = ['momo', 'pizza', 'burger'];

// - - - - - - - CALLBACK HELL - - - - - - - - - - - - - //
// // Create Order
// api.CreateOrder(cart, function(){
//     // Procced To Payment
//     api.ProceedToPayement(function(){
//         // Show Summary Page
//         api.ShowSummaryPage(function(){
//             // Update Wallet
//             api.uppdateWallet(function(){
//                 // Give Ratings
//                 api.GiveRating()
            
//             })
        
//         })
    
//     })

// })

// - - - - - - - PROMISES - - - - - - - - - - - - - //
// const promise = api.CreateOrder(cart);
// promise
// .then(() => api.ProceedToPayement())
// .then(() => api.ShowSummaryPage())
// .then(() => api.uppdateWallet())
// .then(() => api.GiveRating())



// - - - - - - - - CREATING PROMISES - - - - - - - - - - - // 
const cart = ['pizza', 'samosa','momo', 'cake'];
// const cart = [];

// CreateOrder API to create order
const CreateOrder = (cart) => {
    return new Promise((resolve, reject) => {
        // validating cart
        const orderId = '20A12SE324B';
        if(cart.length > 0 && orderId){
            setTimeout(() => {
                resolve({
                    message : 'success',
                    status : 200,
                    data : [...cart],
                    orderId : orderId
                })
            }, 2000)
        }else{
            reject({
                message : 'failed',
                status : 400,
                error : 'Cart is not valid' 
            })
        }
    })

}

// ProceedToPayment API to pay for the order
const ProceedToPayment = (orderId) => {
    return new Promise((resolve, reject) => {
        if(orderId){
            setTimeout(() => {
                resolve({
                    message : 'success',
                    status : 200,
                    data : {
                        paymentMessage : 'payment successful!',
                        orderId : orderId
                    }
                })
            }, 4000)
        }else{
            reject({
                message : 'failed',
                status : 404,
                error : 'payment failed!'
            })
        }
    })
}

// show message API
const ShowMessage = (message) => {
    return new Promise((resolve, reject) => {
        if(message === 'success'){
            setTimeout(() => {
                resolve({
                    message : 'success',
                    status : 200,
                    data : 'thankyou for ordering! your 🥗 item is on the way...'
                })
            }, 2000)
        }else{
            reject({
                message : 'failed',
                status : 404,
                data : 'restaurant is closed!'
            })
        }
    })
}




// consuming promises
CreateOrder(cart)
.then(({data, orderId}) => {
    console.log(`1. you have added ${data.map((item) => item)} in the cart`);
    return orderId;
})
.then((orderId) => {
    console.log('2. making payment...')
    
    return ProceedToPayment(orderId)
    .then(({message, data : {paymentMessage, orderId}}) => {
        console.log(`3. ${paymentMessage}. Your order ID is ${orderId}`);
        return message
    })
    .catch(({error}) => {
        console.log(error)
    })
})
.then((message) => {
    return ShowMessage(message)
    .then(({data}) => {
        console.log(`4. ${data}`);
    })
})
.catch((error) => {
    console.log(error);
})



// - - - - - - - - CONSUMING PROMISES - - - - - - - - - - - // 

// BEFORE PROMISES
// function fetchData(url, callback) {
    //     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         callback(xhr.responseText);
//       }
//     };
//     xhr.open('GET', url, true);
//     xhr.send();
//   }

//   fetchData('https://jsonplaceholder.typicode.com/posts/1', function(data) {
//     console.log(data);
// });
    
    


// AFTER PROMISES
// const URL = 'https://api.github.com/users/sobitp59';

// const user = fetch(URL);

// user
// .then((data) => console.log(data))
