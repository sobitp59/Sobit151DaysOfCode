// ASYNC - AWAIT
// const add = async (a, b) => {
//     return a + b;
// }

// console.log(add(2,3))

// const sum = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 add : a + b
//             });
//         }, 2000)
//     })
// }

// // const ADD = add(1,2);
// // console.log(ADD);


// // console.log(add(1,2))
// console.log(sum(1,2))
// const SUM = sum(1,2);
// console.log(SUM);

// const getToken = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 message : 'success',
//                 data : {
//                     token : 'ASE223HJD3SSHJ322123'
//                 }
//             })
//         }, 3000);
//     })
// }
// console.log('START')
// console.log(getToken().then(({data}) => console.log(data)))
// console.log('END')

async function getMovie(movieName){
   return new Promise((resolve, reject) => {
       if(movieName === 'inception'){
                resolve(99)
       }else{
                reject({data : 'movie not found!!'})
       }
   });
};

console.log('START')

async function response(){
    const responseData = await getMovie('inception')
    console.log('inside response start')
    console.log(responseData)
    console.log('inside response end')
}
response()

console.log('END')

