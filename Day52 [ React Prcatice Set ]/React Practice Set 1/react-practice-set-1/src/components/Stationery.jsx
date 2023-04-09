import React from 'react'

const Stationery = ({headerTitle, stationeryItems}) => {
  return (
    <div className='box'>
        <h1>{headerTitle}</h1>
        <ul>
            {
                stationeryItems.map((item) => (
                    <li>{item}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Stationery