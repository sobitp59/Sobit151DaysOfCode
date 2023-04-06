import React, { useEffect, useState } from 'react';
import { fetchUserFeed } from '../database/userfeed';

const UserFeed = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const loadUserFeed = async () => {
        try {
            setIsLoading(true)
            const usersData = await fetchUserFeed('https://example.com/api/users');
            setUsers(usersData.data)
            setError(null)
        } catch (error) {
            setError(error.message)
            setIsLoading(false)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadUserFeed();
    }, [])
  
    return (
    <div className='box'>
        <h1>user feed</h1>
       { error && <h1>{error}</h1>}
        <h1>{isLoading && 'loading...'}</h1>
        <div>
            {
                users.map(({name, image, likes, comments}) => {
                    return(
                        <>
                            <img style={{width : '200px', height:'200px', borderRadius:'15px'}} src={image} alt={name} />
                            <h2>{name}</h2>
                            <h4>likes : {likes}</h4>
                            <h4>comments : {comments}</h4>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default UserFeed