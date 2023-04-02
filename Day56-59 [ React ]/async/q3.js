const first = () => {
    for(let i=0; i<=3; i++){
        setTimeout(() => {
            var j = i++;
            console.log(j);
        },1000)
    }
};

first();