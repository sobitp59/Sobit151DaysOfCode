import Header from "./componnets/Header";

import { Route, Routes } from 'react-router-dom';
import FavoritesBooks from "./pages/FavoritesBooks";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import ReadBooks from "./pages/ReadBooks";

function App() {
  
  /*
    Header - all books, favorites, read, profile
    All books - contains all books
    Favorire -
  */ 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/favorites" element={<FavoritesBooks />}/>
        <Route path="/read" element={<ReadBooks />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route />
      </Routes>
    </div>
  )
}

export default App
