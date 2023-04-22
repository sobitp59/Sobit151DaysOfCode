import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const FavoritesBooks = () => {
  const {favoriteBooks} = useContext(BooksContext);
    
  return (
  <div>
      <div>
          <h2> favorite books</h2>
      </div>
      <ul className='books'>
          {
              favoriteBooks.map((book) => {
                  return(
                      <li key={book.id} className='book__card'>
                          <img className='book__image' src={book.image} alt="" />
                          <p>{book.title}</p>
                          <p><strong>author: </strong> {book.author}</p>
                          <p><strong>price: </strong> ${book.price}</p>
                          {/* <button disabled={book.read}>{book.read ? 'already read' : 'mark as read'}</button>
                          {!favoriteBooks.includes(book) ? <button onClick={() => addToFavoriteBooks(book.id)}>add to fav</button> : <button>go to fav</button>} */}
                          
                      </li>
                  )
              })
          }
      </ul>
  </div>
)
}

export default FavoritesBooks