import React, { useState } from 'react';
import books from '../database/books';

const Books = () => {
    const [booksData, setBooksData] = useState(books)
    
    // array of books of different genre
    const booksGenreArray = books.reduce((booksGenre, {genre}) => {
      if(!booksGenre.includes(genre)){
            booksGenre.push(genre)
        }
        return booksGenre
    }, [])

    // get books on selected genre
    const getBooksByGenre = (bookGenre) => {
        console.log(bookGenre)
        const filterBooks = books.filter(({genre}) => genre === bookGenre)
        setBooksData(filterBooks)
    }

    // to get all books
    const getAllBooks = () => {
        setBooksData(books)
    }

    return (
    <div className='box'>
        <h1>books</h1>
        
        {<button onClick={getAllBooks}>All Genre</button>}
        {
            booksGenreArray.map((genre) => {
                return <button onClick={() => getBooksByGenre(genre)}>{genre}</button>
            })
        }

        <div>
            {
                booksData.map(({id, title, author}) => {
                    return (
                        <div key={id}>
                            <h2>{title}</h2>
                            <p>{author}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Books