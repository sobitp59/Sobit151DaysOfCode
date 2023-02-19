// Promise 💜 
const buyMovieTickets = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isError = false;
            if(isError){
                reject("Sorry! Your payment is failed.");
            }else{
                resolve("Congrats! Your payment is successful.")
            } 
        }, 3000)
    })
}

buyMovieTickets()
.then((success) => {
    console.log(success)
})
.catch((error) => {
    console.log(error)
})