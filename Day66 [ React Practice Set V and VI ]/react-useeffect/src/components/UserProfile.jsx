import React, { useEffect, useState } from 'react'
import { fetchUserProfile } from '../database/userprofile'

const UserProfile = ({heading, width, height}) => {
    const [userProfile, setUserProfile] = useState({})

    const getUserProfile = async () => {
        const userProfile = await fetchUserProfile('https://example.com/api/user')
        setUserProfile(userProfile.data);
    }

    useEffect(() => {
        getUserProfile()
    })

    const {name, image, likes, comments} = userProfile;
  
  
    return (
    <div className='box'>
        <h1>{heading}</h1>
        <div>
            <img width={width} height={height} src={image} alt={name} />
            <h2>name : {name}</h2>
            <h3>like : {likes}</h3>
            <h3>comments : {comments}</h3>
        </div>
    </div>
  )
}

export default UserProfile