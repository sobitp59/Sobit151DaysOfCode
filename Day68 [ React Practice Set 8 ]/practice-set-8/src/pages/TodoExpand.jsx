import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TodosContext } from '../contexts/TodoContext';

const TodoExpand = () => {
    const {todoID} = useParams();
    const {tasks} = useContext(TodosContext);

    const todo =  [...tasks].filter((task) => task.id === Number(todoID) )
    console.log(todo)
    const [{title, description, isCompleted}] = todo;

    return (
    <div>
        <h1>todo description</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{isCompleted ? 'done' : 'open'}</p>
    </div>
  )
}

export default TodoExpand