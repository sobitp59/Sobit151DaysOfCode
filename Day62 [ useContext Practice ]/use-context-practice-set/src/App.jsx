import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Cart from './pages/Cart'
import ProductsListingPage from './pages/ProductsListingPage'

function App() {

  return (
    <div className="App">
        <Header/>
          <Routes>
          <Route path='/' element={<ProductsListingPage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default App
