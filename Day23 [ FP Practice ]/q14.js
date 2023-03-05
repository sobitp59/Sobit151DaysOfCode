// 14: Given an array of objects representing books, use reduce() to create a new array that contains only the titles of the books.

const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
];

const getBooksTitle = books => books.reduce((booksTitle, {title}) => {
    booksTitle.push(title)
    return booksTitle
},[])

console.log(getBooksTitle(books));
// [ 'To Kill a Mockingbird', '1984', 'The Catcher in the Rye' ]

