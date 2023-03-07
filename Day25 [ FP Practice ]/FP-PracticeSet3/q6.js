// Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the first book object that has more than 500 pages.

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
  // Your code here
  const findBookWithMoreThan500Pages = books => books.find(({pageCount}) => pageCount > 1000);
  
  
  const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
  console.log(bookWithMoreThan500Pages); 
  // Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }
