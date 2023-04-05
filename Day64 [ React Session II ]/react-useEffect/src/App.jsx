import Cart from "./components/Cart"
import Counter from "./components/Counter"
import Employee from "./components/Employee"
import Items from "./components/Items"
import ProductList from "./components/ProductList"
import Products from "./components/Products"
import Transaction from "./components/Transaction"

function App() {

  return (
    <div className="App">
      <h1>react useeffect</h1>
      <Employee />
      <Products />
      <Transaction />
      <Counter />
      <ProductList />
      <Items />
      <Cart />
    </div>
  )
}

export default App
