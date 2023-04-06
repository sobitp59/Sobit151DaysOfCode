import React, { useState } from 'react'

const Welcome = () => {
    const [font, setFont] = useState(18)
    
    const increaseFont = () => {
        setFont(prev => prev + 1)
    }

    const decreaseFont = () => {
        setFont(prev => prev - 1)
    }
    
    return (
    <div className='box'>
        <h1 style={{fontSize : `${font}px`}}>Welcome</h1>
        <button onClick={increaseFont}>+</button>
        <button onClick={decreaseFont}>-</button>
    </div>
  )
}

export default Welcome