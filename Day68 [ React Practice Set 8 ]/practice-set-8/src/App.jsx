import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Task from './components/Task';
import { TodosContextProvider } from './contexts/TodoContext';
import CloseTasks from './pages/CloseTasks';
import HomePage from './pages/HomePage';
import OpenTasks from './pages/OpenTasks';
import TodoExpand from './pages/TodoExpand';

function App() {

  return (
    <div className="App">
        <TodosContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/opentasks' element={<OpenTasks/>}/>
          <Route path='/todos/:todoID' element={<TodoExpand/>}/>
          <Route path='/closetasks' element={<CloseTasks/>}/>
        </Routes>
        </TodosContextProvider>
    </div>
  )
}

export default App
