import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('inside 1 useeffect')
    }, [])
    
    const handleCount = () => {
        console.log('inside handeCount');
        return setCount(prevCount => prevCount + 1);
    }
    
    console.log('insisde main function')

    useEffect(() => {
        console.log('inside 2 useeffect')
    }, [])

  return (
    <div className='box'>
        <h1>counter</h1>
        <h3>{count}</h3>
        <button onClick={handleCount}>count on click</button>
    </div>
  )
}

export default Counter