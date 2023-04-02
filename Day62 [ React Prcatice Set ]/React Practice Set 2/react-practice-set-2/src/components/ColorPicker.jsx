import React, { useState } from 'react'

const ColorPicker = ({red, green, blue}) => {
    const [hexColor, setHexColor] = useState('')


    const getHexColor = (color) => {
        setHexColor(color)
    }

    return (
    <div className='box'>
        <h1>color picker</h1>
        
        <h2>{hexColor}</h2>
        <button onClick={(e) => getHexColor(red)}>Red Color</button>
        
        <button onClick={(e) => getHexColor(green)}>Green Color</button>
    
        
        <button onClick={(e) => getHexColor(blue)}>Blue Color</button>
    
    </div>
  )
}

export default ColorPicker