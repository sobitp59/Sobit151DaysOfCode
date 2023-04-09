import React from 'react'

const Greeting = ({name}) => {
  return (
    <div className='box'>
        <h1>Greeting</h1>
        <p>hello! {name}</p>
    </div>
  )
}

export default Greeting