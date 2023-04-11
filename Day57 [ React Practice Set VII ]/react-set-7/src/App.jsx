import Company from "./components/Company"
import FilterProducts from "./components/FilterProducts"
import Movies from "./components/Movies"
import MoviesGenre from "./components/MoviesGenre"
import ProductRating from "./components/ProductRating"
import Quote from "./components/Quote"
import User from "./components/User"
import Weather from "./components/Weather"

function App() {


  return (
    <div className="App">
      <h1>hello react set 7</h1>
      <Weather />
      <User />
      <Movies />
      <Company />
      <Quote />
      <MoviesGenre />
      <FilterProducts />
      <ProductRating />
    </div>
  )
}

export default App
