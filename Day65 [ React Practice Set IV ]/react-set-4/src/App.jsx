import Books from "./components/Books"
import Characters from "./components/Characters"
import Game from "./components/Game"
import Todo from "./components/Todo"
import TodoTo from "./components/TodoTo"
import Veg from "./components/Veg"
import Welcome from "./components/Welcome"
import todoItems from "./database/todo"

function App() {

  return (
    <div className="App">
        <h1>react practice set 4</h1>
        <Characters />
        <Welcome />
        <Veg />
        <Todo todo={todoItems}/>
        <TodoTo todo={todoItems}/>
        <Books />
        <Game />
    </div>
  )
}

export default App
