import React from 'react'

const Button = ({backgroundColor, color, borderRadius, padding}) => {
  return (
    <div className='box'>
        <button style={
            {backgroundColor : backgroundColor,
            color : color,
            borderRadius : borderRadius,
            padding : padding     
        }}
        >start
        </button>
    </div>
  )
}

export default Button