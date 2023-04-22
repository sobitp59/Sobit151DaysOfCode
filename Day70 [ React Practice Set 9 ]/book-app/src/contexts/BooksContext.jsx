import { createContext, useEffect, useState } from "react";
import { fetchBooks } from "../apis/booksAPI";

const BooksContext = createContext();

const BooksContextProvider = ({children}) => {
    const [books, setBooks] = useState([])
    const [favoriteBooks, setFavoriteBooks] = useState([])
    const [booksRead, setBooksRead] = useState([])
    const [user, setUser] = useState({})


    const getAllBooks = async() => {
        const response = await fetchBooks('https://example.com/api/books');
        console.log(response)
        setBooks(response.data.books);
        setUser(response.data.user);
    }   

    const addToFavoriteBooks = (id) => {
        const getBook = [...books].find(book => book.id === id)
        setFavoriteBooks(prevBooks => [...prevBooks, getBook])
    }

    const getBooksRead = (id) => {
        console.log(id)
        const getBook = [...books].find(book => book.id === id);
        setBooksRead(prev => [...prev, getBook]);
    }
    
    useEffect(() => {
        getAllBooks();

    }, [])

    useEffect(() => {
        const getReadBooks = books.filter(book => book.read);
        setBooksRead([...getReadBooks])
    }, [books])

    
    return(
        <BooksContext.Provider value={{books, user, addToFavoriteBooks, favoriteBooks,booksRead, getBooksRead}}>
            {children}
        </BooksContext.Provider>
    )
}

export { BooksContext, BooksContextProvider };

