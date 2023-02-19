// ASYNC AWAIT 🚀

const photos = [];

// Without Async-Await
// const photosUpload = () => {
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             photos.push('Profile Pic');
//             resolve('Photo uploaded!');
//         }, 3000)
//     })

//     let result = uploadStatus;
//     console.log(result)
//     console.log(photos.length)
// }

// With Async-Await
const photosUpload = async () => {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push('Profile Pic');
            resolve('Photo uploaded!');
        }, 3000)
    })

    let result = await uploadStatus;
    console.log(result)
    console.log(photos.length)
}

photosUpload()