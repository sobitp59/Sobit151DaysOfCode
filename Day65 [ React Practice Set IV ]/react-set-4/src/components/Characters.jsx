import React, { useState } from 'react'
import characters from '../database/characters'

const Characters = () => {
    const [character, setCharacter] = useState([])

    // const getHeroes = () => {
    //     const {heroes} = characters;
    //     setCharacter(heroes)
    // }
    
    // const getVillains = () => {
    //     const {villains} = characters;
    //     setCharacter(villains)
    // }

    const printCharacters = (character) => {
        setCharacter(characters[character])
    }
    
    return (
    <div className='box'>
        <h1>characters</h1>
        <button onClick={() => printCharacters('heroes')}>get heroes</button>
        <button onClick={() => printCharacters('villains')}>get villains</button>
        <div>
            {
                character.map(({name, powers, costume}) => {
                    return(
                        <>
                            <h2>{name}</h2>
                            <p>{powers}</p>
                            <p>{costume}</p>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Characters