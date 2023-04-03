import React from 'react'

const ImageCard = ({src, width, height}) => {
  return (
    <div className='box'>
        <h1>image</h1>
        <img src={src} width={width} height={height} />
    </div>
  )
}

export default ImageCard