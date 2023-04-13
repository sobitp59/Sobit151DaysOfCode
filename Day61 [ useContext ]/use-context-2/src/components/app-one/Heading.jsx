import React, { useContext } from 'react';
import { LevelContext } from './LevelContext';

const Heading = ({children}) => {
    const level = useContext(LevelContext);
  return (
    <div>
        { level === 1 ? 
            <h1>{children}{level}</h1> : 
          level === 2 ? 
            <h2>{children}{level}</h2> : 
          level === 3 ? 
            <h3>{children}{level}</h3> : 
          level === 4 ? 
            <h4>{children}{level}</h4> : 
          level === 5 ? 
            <h5>{children}{level}</h5> : 
          level === 6 ? 
            <h6>{children}{level}</h6> :
            <p>not a valid level</p> 
        }
    </div>
  )
}

export default Heading