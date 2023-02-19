/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
**/

const userData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            const user = {
                name : 'Sobit Prasad',
                email : 'sobit100@gmail.com',
                website : 'www.user.com'
            }

            if(error){
                reject("User Not Found!")
            }else{
                reject(user);
            }
        }, 2000)
    })
}

userData()
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})