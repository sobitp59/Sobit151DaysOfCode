import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodosContext } from '../contexts/TodoContext';

const Task = ({id, title, description, isCompleted, expandTodo, mark }) => {
  const {markTodoAsDone, markTodoAsUndone} = useContext(TodosContext)

  return (
    <li style={{textDecoration : isCompleted && 'line-through'}}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{isCompleted ? 'done' : 'open'}</p>

        { mark && !isCompleted ? 
          <button onClick={() => markTodoAsDone(id)}>mark as done</button> :
          !mark  || isCompleted && <button onClick={() => markTodoAsUndone(id)}>mark as undone </button> 
        }
        
        {expandTodo && <Link to={`/todos/${id}`}>expand todo </Link> }
        <hr />
    </li>
  )
}

export default Task