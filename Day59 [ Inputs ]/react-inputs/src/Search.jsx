import React, { useState } from 'react';

const Search = () => {
    const [text, setText] = useState('')    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    
    const handleType = (e) => {
        setText(e.target.value);
    }
    
    
    
    return (
    <div className='box'>
        <h1>type and show</h1>
        <input onChange={handleType} type="text" placeholder='type here...'/>
        <h2>{text}</h2>
    
        <hr />
    
        <h1>name</h1>
        <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='enter first name'/>
        <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder='enter last name'/>
         <h1>{firstName} {lastName}</h1>
         <hr />
    
    </div>
  )
}

export default Search