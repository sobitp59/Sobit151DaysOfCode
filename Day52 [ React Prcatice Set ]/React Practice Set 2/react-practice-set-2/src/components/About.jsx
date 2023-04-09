import React, { useState } from 'react'


const About = ({heading, name, learning}) => {
    const [hide, setHide] = useState(true)
    
    const handleClick = () => [
        setHide(prevState => !prevState)
    ]
    
    return (
    <div className='box'>
        <h1>{heading}</h1>
        <h2>{name}</h2>
        <button onClick={handleClick}>know more</button>
        <p style={{display : hide ? 'none' : 'block'}}>{learning}</p>
    </div>
  )
}

export default About