import React, { useState } from 'react'

const todoDB = [
    {id : 1, task : 'task1', isDone : true },
    {id : 2, task : 'task2', isDone : false },
    {id : 3, task : 'task3', isDone : false },
    {id : 4, task : 'task4', isDone : true },
    {id : 5, task : 'task5', isDone : true },
    {id : 6, task : 'task6', isDone : false },
    {id : 7, task : 'task7', isDone : false },
    {id : 8, task : 'task8', isDone : true },
    {id : 9, task : 'task9', isDone : false },
    {id : 10, task :'task10 ', isDone : true },
]

const TodoTask = ({todo : {id, isDone, task}, handleTodoClick}) => {
    const handeClick = () => {
        handleTodoClick(id)
    }
    return(
        <>
        <li style={{textDecoration : isDone ? 'line-through' : '',color : isDone ? 'blue' : 'red', cursor : 'pointer'}} onClick={handeClick} key={id}><b>{task}</b> </li>
        </>
    )
}


const Todo = () => {
    const [todos, setTodods]= useState(todoDB)

    const handleTodoClick = (id) => {
        const newTodos =  todos.map((todo) => ({
            ...todo,
            isDone : id === todo.id ? !todo.isDone : todo.isDone
        }))
        console.log(newTodos)

        setTodods(newTodos)
    }

    const {open, close}= todos.reduce((openClosTask, {isDone}) => {
        isDone ? openClosTask.close++ : openClosTask.open++;
        return openClosTask;
    }, {open : 0, close : 0})

  return (
    <div>
        <h1>todo</h1>
        <p><b>open</b>: {open} | <b>close</b> : {close}</p>
        <ul>
            {
                todos.map((todo) => {
                    return <TodoTask todo={todo} handleTodoClick={handleTodoClick}/>
                })
            }
        </ul>
    </div>
  )
}

export default Todo