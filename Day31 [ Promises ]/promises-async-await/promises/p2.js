// 01
const getImage = (file) => {
    return new Promise((resolve, reject) => {
        try {
            const data = `${file} access!!`;
            resolve(data);
        } catch (error) {
            reject(new Error(error))
        }
    })

    // try {
    //     return Promise.resolve(`${file} accessed!!`)
        
    // } catch (error) {
    //     return Promise.reject(`naya`)
        
    // }
}

console.log(getImage("./image.png"));
// Promise {<fulfilled>: './image.png access!!'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "./image.png access!!"

getImage("./image2.png")
.then(data => console.log(data))
.catch(error => console.log(error))
.finally(() => console.log('all done!!'))