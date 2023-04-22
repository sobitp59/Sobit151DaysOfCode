import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BooksContext } from '../contexts/BooksContext';


const HomePage = () => {
    const {books,favoriteBooks, addToFavoriteBooks, getBooksRead,booksRead} = useContext(BooksContext);
    const navigate = useNavigate();

    const goToFavoritePage = () => {
        navigate('/favorites')
    }

    return (
    <div>
        <div>
            <h2> all books</h2>
        </div>
        <ul className='books'>
            {
                books.map((book) => {
                    return(
                        <li key={book.id} className='book__card'>
                            <img className='book__image' src={book.image} alt="" />
                            <p>{book.title}</p>
                            <p><strong>author: </strong> {book.author}</p>
                            <p><strong>price: </strong> ${book.price}</p>
    
                            {!booksRead.includes(book) ? <button onClick={() => getBooksRead(book.id)}> mark as read</button> : <button disabled>already read</button>}


                            {!favoriteBooks.includes(book) ? <button onClick={() => addToFavoriteBooks(book.id)}>add to fav</button> : <button onClick={goToFavoritePage}>go to fav</button>}
                            
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default HomePage