import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App

/*
  Header
  HomePage
   - welcome and naviaget to menu page
  MenuPage
   - search bar
   - filter
   - sort 
   - all items
  CartPage
   - all items added
   - total price
   - total delivery time
   - apply coupon
*/