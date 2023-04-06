import React, { useState } from 'react'

const Todo = ({todo}) => {
    const [tasks, setTasks] = useState(todo)

    const deleteTask = (e) => {
        const filterTask = tasks.filter((task) => task.id !== Number(e.target.id))
        setTasks(filterTask)
    }

    return (
    <div className='box'>
        <h1>todo;</h1>
        <div>
            {
                tasks.map(({id, task , isDone}) => {
                    return(
                        <div style={{display : 'flex', justifyContent : 'center', alignItems : 'center', gap:'10px'}}>
                            <p style={{textDecoration : isDone && 'line-through'}} key={id}>{task}</p>
                            <button id={id} onClick={(e) => deleteTask(e)}>x</button>
                        </div>
                    ) 
                })
            }
        </div>
    </div>
  )
}

export default Todo