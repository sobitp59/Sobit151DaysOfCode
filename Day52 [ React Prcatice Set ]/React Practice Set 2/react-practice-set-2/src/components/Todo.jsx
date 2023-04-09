import React from 'react'

const Todo = ({todoItems}) => {
  return (
    <div className='box'>
        <h1>todo</h1>
        <div>
            {todoItems.map(({id, title, description, isCompleted}) => {
                return <div key={id} style={{color : isCompleted ? 'green' : 'red'}}>
                    <h1>{title}</h1> 
                    <p>{description}</p>
                    </div>
            })}
        </div>
    </div>
    
  )
}

export default Todo