import React, { useState } from 'react'

// const red = '#EE4B2B'
// const blue = '#89CFF0'
// const green = '#7FFFD4'

const colors = {
    red : '#EE4B2B',
    blue : '#89CFF0',
    green : '#7FFFD4'
}

const ColorPicker = () => {
    const [hexColor, setHexColor] = useState('')
    const colorsArray = Object.keys(colors)

    return (
    <div className='box'>
        <div style={{display : 'flex', flexDirection : 'column'}}>
            {colorsArray.map((color) => {
                return(
                    <>
                        <button onClick={() => setHexColor(colors[color])}>{color}</button>
                        {hexColor === colors[color] && <h2>{colors[color]}</h2> } 
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default ColorPicker