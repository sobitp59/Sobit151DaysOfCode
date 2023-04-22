import React, { useContext } from 'react';
import Task from '../components/Task';
import { TodosContext } from '../contexts/TodoContext';

const HomePage = () => {
    const {tasks} = useContext(TodosContext);
    console.log(tasks)

  return (
    <div>
        <h1>awesome tasks</h1>
        <ul>
            { 
                tasks.map((task) => <Task key={task.id} {...task} mark/>)
            }
        </ul>
    </div>
  )
}

export default HomePage