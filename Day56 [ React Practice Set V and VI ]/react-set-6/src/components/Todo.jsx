import React, { useEffect, useState } from 'react'
import fetchTodo from '../database/todo'


const Todo = () => {
    const [tasks, setTask] = useState([])

    const loadTodo = async () => {
        const response = await fetchTodo('https://example.com/api/todos')
        console.log(response.data.todos);
        setTask(response.data.todos)
    }

    useEffect(() => {
        loadTodo()
    }, [])

    return (
    <div className='box'>
        <h1>my todo</h1>
        <div>
            {
                tasks.map(({title, desc, todos}) => {
                    return(
                        <div>
                            <h1>{title}</h1>
                            <p>{desc}</p>
                            <ol>{todos.map(todo => <li>{todo}</li> )}</ol>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Todo