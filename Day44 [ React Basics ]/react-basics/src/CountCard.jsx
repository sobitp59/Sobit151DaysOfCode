import React, { useState } from 'react';

const CountCard = () => {
  const [count, setCount] = useState(0)
  
  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  }
  
  const decreaseCount = () => {
    setCount(prevCount => prevCount - 1);
  }
  
  const resetCount = () => {
    setCount(0);
  }

  



  return (
    <div className='box'>
      <h1>countbox</h1>
      <h3 style={{textAlign : 'center'}}>{count}</h3>
      <button onClick={increaseCount}> increase </button>
      <button onClick={decreaseCount}> decrease </button>
      <button onClick={resetCount}> resetcount </button>
    </div>
  )
}

export default CountCard