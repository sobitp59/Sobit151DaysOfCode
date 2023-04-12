import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Category from './pages/Category'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
// import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Todo from './pages/Todo'
import Wishlist from './pages/Wishlist'


const getActiveStyle = ({isActive}) => ({
  color : isActive && 'orange',
  fontWeight : isActive && 'bold',
  padding: isActive && '1rem'
})

function App() {

  return (
    <div className="App">
      <h1>react router camp</h1>
      <div>
        <NavLink style={getActiveStyle} to='/'>home</NavLink> {' '}
        <NavLink style={getActiveStyle} to='/wishlist'>wishlist</NavLink> {' '}
        <NavLink style={getActiveStyle} to='/category'>category</NavLink> {' '}
        <NavLink style={getActiveStyle} to='/cart'>cart</NavLink> {' '}
        <NavLink style={getActiveStyle} to='/todo'>todo</NavLink> {' '}
      </div>
      <hr />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Navigate to='/' />}/>
        <Route path='/category/product/:productID' element={<ProductDetails />}/>
        <Route path='/wishlist' element={<Wishlist />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/todo' element={<Todo />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
