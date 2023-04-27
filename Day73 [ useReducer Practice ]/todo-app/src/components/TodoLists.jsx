import { useState } from "react";


const TodoLists = ({todos, onEditTodo, onDeleteTodo}) => {
  return (
    <div className="todos">
        { todos.map((todo) => <ToDo 
                key={todo.id}
                todo={todo}
                onDelete={onDeleteTodo}
                onEdit={onEditTodo}
            /> )}
    </div>
  )
}


const ToDo = ({todo, onDelete, onEdit}) => {
    const [isEditing, setIsEditing] = useState(false);
    let updatedTodo;
    if(isEditing){
        updatedTodo = (
            <>
                <input type="text" value={todo.task} onChange={(e) => {
                    onEdit({...todo, task : e.target.value})
                }}/>
                <button onClick={() => setIsEditing(false)}>save</button> 
            </>
            )
    }else{
        updatedTodo = (
            <>
                <span style={{textDecoration : todo.done && 'line-through'}}>{todo.task}</span>
                <button onClick={() => setIsEditing(true)}>edit</button>
            </>
        )
    }
    return(
        <label >
            <input type="checkbox" checked={todo.done} onChange={(e) => {
                onEdit({...todo, done : e.target.checked})
            }}/>
            
            <span style={{textDecoration : todo.done && 'line-through'}}>{updatedTodo}</span>

            <button onClick={() => onDelete(todo.id)}>delete</button>
        </label>
    )
}

export default TodoLists