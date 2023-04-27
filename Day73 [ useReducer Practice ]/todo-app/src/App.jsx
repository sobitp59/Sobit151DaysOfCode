import { useEffect, useReducer } from "react";
import AddTodo from "./components/AddTodo";
import TodoLists from "./components/TodoLists";

let nextId = 4
const workTasks = [
  { id: 0, task: 'Finish project proposal', done: true },
  { id: 1, task: 'Send follow-up emails', done: false },
  { id: 2, task: 'Attend team meeting', done: false },
  { id: 3, task: 'Make progress on coding task', done: false }
];

const todoReducer = (todos, action) => {
  switch(action.type){
    case 'ADD_TODO': {
      return [...todos, {
        id : action.id,
        task : action.task,
        done : false
      }]
    }

    case 'DELETE_TODO' : {
      return [...todos].filter(({id}) => id !== action.id)
    }

    case 'EDIT_TODO': {
      return todos.map((todo) => {
        if(todo.id === action.task.id){
            return action.task;
          }else{
          return todo;
        }
      })
    }
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, workTasks);

  const onAddTodo = (task) => {
    dispatch({
      type : 'ADD_TODO',
      task : task,
      id : nextId++ 
    })
    
  }

  const onDeleteTodo = (taskId) => {
    dispatch({
      type : 'DELETE_TODO',
      id : taskId
    })
  }
  
  const onEditTodo = (task) => {
    dispatch({
      type : 'EDIT_TODO',
      task : task
    })
  }


  return (
    <>
      <h1>my awesome todoapp </h1>

      <AddTodo 
        onAddTodo={onAddTodo}
      />
      <TodoLists 
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
      />
    
    </>
  )
}

export default App
