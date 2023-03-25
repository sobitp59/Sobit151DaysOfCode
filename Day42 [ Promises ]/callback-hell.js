// 0: IMPORTANCE OF CALLBACKS
    // - ASYNCHRONOUS IN JAVASCRIPT WAS POSIBLE BECAUSE OF CALLBACKS

// 1: ISSUES WITH CALLBACKS
    // - CALLACK HELL
    // - INVERSION OF CONTROL
    
    

// CALLBACK HELL - PYRAMID OF DOOM
const cart = ['watches', 'shoes', 'pants', 'jeans'];

API.createOrder(cart, function(){
        API.proceedPayment(function(){
            API.showOrderSummary(function(){
                API.updateWallet();
            });
        })
    });



// CALLBACK HELL -- LEADS TO UNMAINATABLE CODE 
// INVERSION OF CONTROL -- WE LOOSE CONTROL ON OUR PROGRAMS
