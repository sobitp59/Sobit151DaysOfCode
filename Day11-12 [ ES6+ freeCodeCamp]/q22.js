// Promises

const makeServerRequest = new Promise((resolve, reject) => {
    const connection = true;
    if(connection){
        resolve("data successfully fetched!")
    }else{
        reject("failed to fetch data!")
    }
})

makeServerRequest.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})