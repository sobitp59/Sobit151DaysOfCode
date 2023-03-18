// Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.


// Your Code here

const delayedLoop = (duration) => {
    console.log(duration)
    for(let time = 1; time <= duration; time++ ){
        setTimeout(() => {
            console.log('hello!')
        }, time * 1000);
    }
}


delayedLoop(3);
// should print Hello three times after 1 second each
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second