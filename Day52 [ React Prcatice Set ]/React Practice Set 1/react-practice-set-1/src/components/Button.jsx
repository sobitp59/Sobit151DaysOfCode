import React from 'react'

const Button = ({backgroundColor, color, borderRadius, padding}) => {
  return (
    <div className='box'>
        <button style={
            {backgroundColor : backgroundColor,
            color : color,
            borderRadius : borderRadius,
            padding : padding     
        }}>start</button>

        {/* suggested by abhay
          <button style={{backgroundColor, color, borderRadius, padding}}>
            start
          </button> 
        */}
    </div>
  )
}

export default Button