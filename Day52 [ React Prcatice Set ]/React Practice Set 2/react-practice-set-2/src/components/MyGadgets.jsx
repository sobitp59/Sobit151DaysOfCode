import React, { useState } from 'react';

const MyGadgets = ({productlist}) => {
    const [isExpensive,setIsExpensive] = useState(false)

    const getExpensiveProducts = () => setIsExpensive(prevState => !prevState);
    
    return (
    <div className='box'>
        <h1>my gadgets</h1>
        <ol>
            {productlist.map(({name, description, price}) => {
                return <li style={{backgroundColor : price > 50000 && isExpensive && 'lightgreen'}}>{name} - {description} - {price}</li>
            })}
        </ol>
        <button onClick={getExpensiveProducts}>highlight expensive products</button>
    </div>
  )
}

export default MyGadgets