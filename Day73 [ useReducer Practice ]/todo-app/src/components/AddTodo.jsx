import { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
  const [todo, setTodo]= useState('')

    return (
    <div>
        <input onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="enter your task 🧧" type="text" />
        <button onClick={() => {
            if(todo.length > 0){
                setTodo('')
                onAddTodo(todo)
            }
        }}>add task</button>
    </div>
  )
}

export default AddTodo