import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const ReadBooks = () => {
  const {booksRead} = useContext(BooksContext);

  return (
    <div>
        <div>
            <h2> read books</h2>
        </div>
        <ul className='books'>
            {
                booksRead.map((book) => {
                    return(
                        <li key={book.id} className='book__card'>
                            <img className='book__image' src={book.image} alt="" />
                            <p>{book.title}</p>
                            <p><strong>author: </strong> {book.author}</p>
                            <p><strong>price: </strong> ${book.price}</p>
                            
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ReadBooks