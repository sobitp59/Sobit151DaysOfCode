import React, { useEffect, useState } from 'react';
import { fetchSocialMedia } from '../database/socialmedia';


const SocialMedia = () => {
    const [userProfile, setUserProfile] = useState({})
    const [isFollowed, setIsFollowed] = useState(false);
    
    const loadUserProfile = async () => {
        const response = await fetchSocialMedia('https://example.com/api/profile');
        console.log(response.data.profile);
        setUserProfile(response.data.profile);
    }

    useEffect(() => {
        loadUserProfile()
    }, [])

    const {name, age, followedBy, followers, gender, occupation, email} = userProfile;
  
    const followUser = () => {
        setIsFollowed(true)
        setUserProfile((prev) => ({
            ...prev,
            followers : prev.followers + 1
        }))
    }

    return (
    <div className='box'>
        <h1>mediagram</h1>
        {
            <>
                <h2>{name}</h2>
                <p>age : {age}</p>
                <p>gender : {gender}</p>
                <p>occupation : {occupation}</p>
                <p>email : {email}</p>
                <p>followers : {followers}</p>
                <p>followedBy : {followedBy}</p>
                <button disabled={isFollowed ? true : false} onClick={followUser}>follow {name}</button>
            </>
        }
    </div>
  )
}

export default SocialMedia