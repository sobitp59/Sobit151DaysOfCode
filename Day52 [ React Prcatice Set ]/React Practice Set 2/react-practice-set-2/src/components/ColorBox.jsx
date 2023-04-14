import React, { useState } from 'react'

const colors = ['red', 'green', 'blue']

const ColorBox = () => {
    const [color, setColor] = useState('')

  return (
    <div className='box'>
        <h1>color</h1>
        {colors.map((colorBox) => <div style={{background : colorBox, visibility : color === colorBox ? 'hidden' : 'revert', width : '70px', height : '70px'}}></div> )}

        {colors.map((colorBtn) => <button onClick={() => setColor(colorBtn)} style={{background : colorBtn}}>{colorBtn}</button> )}
    </div>
  )
}

export default ColorBox