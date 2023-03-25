const delayedLoop = (num) => {
    let timeLeft = num;
    let timerId = setInterval(countdown,1000);
    
    function countdown(){
        if(timeLeft === 0){
            clearInterval(timerId);
        }else{
            console.log("hello")
            timeLeft--;
            }
    }
};

delayedLoop(3);
