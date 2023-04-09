import React from 'react'

const Image = ({url, caption}) => {
  return (
    <div className='box'>
        <img style={{width : '100%'}} src={url} alt={caption}/>
        <p>{caption}</p>
    </div>    
  )
}

export default Image