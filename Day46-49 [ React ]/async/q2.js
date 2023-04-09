// const delayedLoop = num => {
//     let i = 1; //1 2 3 4
    
//     for(i; i <= num; i++){
//         setTimeout(() => {
//             console.log(i);
//         },1000);
//     }

//     setTimeout(() => {
//         console.log(i, 'outside');
//     },1000)

// };

// delayedLoop(3);

// 4
// 4 
// 4
// 4 outside

const delayedLoop = num => {
    for(let i = 1; i <= num; i++){
        setTimeout(() => {
            console.log(i);
        },1000);
    }

    setTimeout(() => {
        console.log(i, 'outside');
    },1000)
};

delayedLoop(3);
