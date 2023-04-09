import React, { useEffect, useState } from 'react';
import { fetchUser } from '../DB/user';

const User = () => {
    const [user, setUser] = useState({});
    const [showAddress, setShowAddress] = useState(true)

    const loadUserProfile = async () => {
        const response = await fetchUser('https://example.com/api/user');
        console.log(response.data);
        setUser(response.data);
    }

    useEffect(() => {
        loadUserProfile()
    }, [])

    const toggleAddress = () => {
        setShowAddress(prev => !prev)
    }

    const {name, email, phone, address : {city, street, suite, zipcode} = {}} = user;

  return (
    <div className='box'>
        <h1>user profile</h1>
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
        </div>
        <button onClick={toggleAddress}>{showAddress ? 'hide' : 'show'} address</button>
        {
            showAddress && (
                <>
                    <h2>{city}</h2>
                    <h2>{street}</h2>
                    <h2>{suite}</h2>
                    <h2>{zipcode}</h2>
                </>
            )
        }
    </div>
  )
}

export default User