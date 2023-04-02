import React, { useState } from 'react'

const Article = ({title, content}) => {
    const [hide, setHide] = useState(true)
  
    const handleClick = () => {
        setHide(prev => !prev)
    }
    return (
    <div className='box'>
        <h1>{title}</h1>
        <button onClick={handleClick}>know more</button>
        <p style={{cursor : 'pointer', display : hide ? 'none' : 'block'}}>{content}</p>
    </div>
  )
}

export default Article