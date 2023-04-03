import React, { useState } from 'react';

const Vegetables = ({vegetables}) => {
    const [isFresh, setIsFresh] = useState(false);
  const pickdate = '2023-03-30';

  const getFreshVegatbles = () => setIsFresh(prevState => !prevState)
  return (
    <div className='box'>

        <h1>vegetables</h1>
        <ul>
            {vegetables.map(({id, name, pickDate}) => {
                return <li style={{color : (isFresh && pickdate === pickDate) && 'green'}} key={id}>{name} {pickDate}</li>
            })}
        </ul>
        <button onClick={getFreshVegatbles}>highligt fresh vegetables</button>
    </div>
  )
}

export default Vegetables