import React, { useContext, useEffect, useState } from 'react';
import Task from '../components/Task';
import { TodosContext } from '../contexts/TodoContext';


const CloseTasks = () => {
  const {closeTasks} = useContext(TodosContext);
  console.log(closeTasks)
  
  return (
    <div>
        <h1>close tasks</h1>
        <ul>
            { 
                closeTasks.map((task) => <Task key={task.id} {...task} expandTodo/>)
            }
        </ul>
    </div>
  )
}

export default CloseTasks