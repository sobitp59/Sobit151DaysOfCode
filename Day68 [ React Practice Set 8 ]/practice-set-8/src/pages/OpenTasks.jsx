import React, { useContext, useEffect, useState } from 'react';
import Task from '../components/Task';
import { TodosContext } from '../contexts/TodoContext';


const OpenTasks = () => {
    const {openTasks} = useContext(TodosContext);
  
    return (
    <div>
        <h1>open tasks</h1>
        <ul>
            { 
                openTasks.map((task) => <Task key={task.id} {...task} expandTodo/>)
            }
        </ul>
    </div>
  )
}

export default OpenTasks