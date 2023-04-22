import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BooksContext } from '../contexts/BooksContext';

const Header = () => {
  const {favoriteBooks, booksRead} = useContext(BooksContext);

  return (
    <div>
    <div>
        <h1>open books</h1>
    </div>     
    <nav>
        <Link to={'/'}>all books</Link> {' '}
        <Link to={'/favorites'}>favorites({favoriteBooks.length})</Link> {' '}
        <Link to={'/read'}>read({booksRead.length})</Link> {' '}
        <Link to={'/profile'}>profile</Link>
    </nav>
    <hr />
    </div>
  )
}

export default Header