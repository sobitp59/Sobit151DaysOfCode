// the callback hwll
// good part : helpsasynchronous
// bad part: callback hell and inversion of control


// CALLBACK HELL 👿
// food order
const cart = ['momo', 'pizza', 'burger'];

// Create Order
api.CreateOrder(cart, function(){
    // Procced To Payment
    api.ProceedToPayement(function(){
        // Show Summary Page
        api.ShowSummaryPage(function(){
            // Update Wallet
            api.uppdateWallet(function(){
                // Give Ratings
                api.GiveRating()
            
            })
        
        })
    
    })

})

// INVERISON OF CONTROL : we loose the control of code while using callback 