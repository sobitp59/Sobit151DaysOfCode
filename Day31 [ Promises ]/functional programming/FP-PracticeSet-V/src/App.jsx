import AnimeList from "./components/AnimeList";
import CarList from "./components/CarList";
import Cookbook from "./components/Cookbook";
import Employee from "./components/Employee";
import Library from "./components/Library";
import MovieList from "./components/MovieList";
import OnlineStore from "./components/OnlineStore";
import ProductList from "./components/ProductList";
import Recipe from "./components/Recipe";
import ShoppingCart from "./components/ShoppingCart";
import Students from "./components/Students";

function App() {

  return (
    <div className="App">
      <h1>practice set5 [functional programming]</h1>
      <hr />
       <ShoppingCart />
      <hr />
       <MovieList />
       <hr />
       <ProductList />
       <hr />
       <Library />
       <hr />
       <Employee />
       <hr />
       <Recipe />
       <hr />
       <CarList />
       <hr />
       <Students />
       <hr />
       <AnimeList />
       <hr />
       <OnlineStore />
       <hr />
       <Cookbook />
    </div>
  )
}

export default App
