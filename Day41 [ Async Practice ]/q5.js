async function userOne(){
    console.log('this is userone');
    
    setTimeout(() =>{
        console.log('setTimeout 1');
    })
    
    return 'sobit prasad';
}

async function getUserOne(){

    return new Promise(async (resolve, reject) => {
        console.log('getting userone...');
        const userdata = await userOne();
        console.log('USERONE: ' + userdata);
        
        setTimeout(() => {
            console.log('setTimeout 2');
        }, 2000);

        resolve('this is RESOLVED PROMISE')
    })

}  

console.log('S T A R T')
console.log(getUserOne().then(data => console.log(data)))
console.log('E N D')
