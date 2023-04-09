import React, { useState } from 'react'

const Game = () => {
    const [lives, setLives] = useState(5)
    const [onLifeZero, setOnLifeZero] = useState('')
    
    const handleLife = () => {
        setLives(prevValue => {
           
            if(prevValue === 0){
                setOnLifeZero('GAME OVER')
                return 0;
            }else{
                return prevValue - 1;
            }
        })
    }

    return (
    <div className='box'>
        <h1>game</h1>
        <h1>current lives : {lives}</h1>
        <button onClick={handleLife}>lose a life</button>
        <h3>{onLifeZero}</h3>
    </div>
  )
}

export default Game