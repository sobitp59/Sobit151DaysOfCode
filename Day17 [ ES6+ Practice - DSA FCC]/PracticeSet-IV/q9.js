// Destructure the following code to get the desired outputs. Avoid using in-built methods.

// Your ES6 code here
const book = { 
    title: 'JavaScript: The Definitive Guide',  
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
    publisher: {name: 'O\'Reilly Media', location: 'CA'}
};

const {title, authors : [ {name : author1}, {name : author2} ], publisher : {name : publisherName}} = book; 

console.log(title);
console.log(author1);
console.log(author2);
console.log(publisherName);
