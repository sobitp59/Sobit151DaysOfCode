import React, { useEffect, useState } from 'react'
import { fetchProfile } from '../database/profile'

const Profile = () => {
    const [user, setUser] = useState([])

    const loadProfile = async () => {   
        const response = await fetchProfile('https://example.com/api/profile')
        setUser(response.data.profiles);
    }

    useEffect(() => {
        loadProfile()
    }, [])

    const {name, age, email, occupation} = user;

    const changeName = () => {
        setUser(prevuser => ({...prevuser, name : 'Emily'}))
    }
  return (
    <div className='box'>
        <h1>user profile</h1>
        {
            <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
            <p>{occupation}</p>
            </>
        }
        <button onClick={changeName}>change name</button>
    </div>
  )
}

export default Profile