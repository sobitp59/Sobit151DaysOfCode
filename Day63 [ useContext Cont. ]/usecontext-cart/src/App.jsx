import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { CartContextProvider } from './contexts/CartContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { WishlistContextProvider } from './contexts/WishlistContext';
import Cart from './pages/Cart';
import { default as ErrorPage, default as SuccessPage } from './pages/ErrorPage';
import ProductsDetailPage from './pages/ProductsDetailPage';
import ProductsListings from './pages/ProductsListings';
import Wishlist from './pages/Wishlist';

function App() {
  
  return (
    <div className="App">
      
        <ProductsProvider>
        <CartContextProvider>
        <WishlistContextProvider>
        <Header />

      <Routes>
          <Route path='/' element={<ProductsListings />}/>
          <Route path='/product/:productID' element={<ProductsDetailPage />}/>
          <Route path='/wishlist' element={<Wishlist />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<ErrorPage />}/>
      </Routes>

        </WishlistContextProvider>  
        </CartContextProvider>
        </ProductsProvider>
    
    </div>
  )
}

export default App
