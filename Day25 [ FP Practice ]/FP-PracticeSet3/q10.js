// Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 700 pages.

const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  
// Your code here
const getTitlesWithMoreThan500Pages = books => books.reduce((titleArray, {title, pageCount}) => {
    pageCount > 700 ? titleArray.push(title) : titleArray
    return titleArray
}, [])  
  
  
const booksWithMoreThan500Pages = getTitlesWithMoreThan500Pages(books);
console.log(booksWithMoreThan500Pages); 
// Output: ["The Lord of the Rings"]

// const arr = [1,2,3]

// function aded(arr){
//   if(true){
//     return arr.push(6)
//   }
// }

// console.log(aded(arr))