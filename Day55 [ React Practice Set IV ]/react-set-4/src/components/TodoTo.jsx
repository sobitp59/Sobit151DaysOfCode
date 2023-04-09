import React, { useState } from 'react';

const TodoTo = ({todo}) => {
    const [tasks, setTasks] =  useState(todo)
    

    const handleDone = (id) => {
        const updateTask = tasks.map((task) => {
            if(task.id === id){
                return {
                    ...task,
                    isDone : !task.isDone
                }
            }
            return task;
        })
        setTasks(updateTask)
    }
    
    return (
    <div className='box'>
        <h1>todoto</h1>
        <div>
            {
                tasks.map(({id, task, isDone}) => {
                    return (
                        <div  style={{display : 'flex', justifyContent : 'center', alignItems : 'center', gap:'10px'}}>
                           
                           <p style={{color : isDone && 'red', textDecoration : isDone && 'line-through'}} key={id}>{task}</p>
                        
                            <button onClick={() => handleDone(id)}>mark as done</button>
                        
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TodoTo