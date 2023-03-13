

// 01 : PENDING
new Promise(() => {});
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]]: undefined


// 02 : RESOLVED
new Promise((res, rej) => res('success!!'));
// Promise {<resolved> : 'success!!'} 
// [[Prototype]]: Promise
// [[PromiseState]]: "resolved"
// [[PromiseResult]]: "success!!"


// 03 : REJECTED
new Promise((res, rej) => rej('failure!!'));
// Promise {<rejected> : 'failure!!'} 
// [[Prototype]]: Promise
// [[PromiseState]]: "rejected"
// [[PromiseResult]]: "failure!!"