// Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here
const delayedAlert = (message, duration) => {
    return setTimeout(() => console.log(message), duration);
}



delayedAlert('Hello, world!', 2000);
// Should display an alert box with the message, Hello, world!