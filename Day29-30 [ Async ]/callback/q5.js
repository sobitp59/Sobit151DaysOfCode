// SETTIMEOUT - predict the output
// setTimeout(() => console.log("A"), 0);
// setTimeout(() => console.log("C"), 0);
// setTimeout(() => console.log("B"), 0);
// A C B

// setTimeout(() => console.log("A"), 1000);
// setTimeout(() => console.log("B"), 400);
// setTimeout(() => console.log("C"), 1300);
// B A C



console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// A C B