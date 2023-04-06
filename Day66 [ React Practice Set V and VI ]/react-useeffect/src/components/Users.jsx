import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../database/users'


const Users = () => {
    const [users, setUsers] = useState([])
    
    const getUsers = async () => {
        
        try {
            const users = await fetchUsers('https://example.com/api/users/status');
            if(users.status === 200){
                console.log(users.data.users);
                setUsers(users.data.users)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
    <div className='box'>
        <h1>awesome users</h1>
        <div>
            {
                users.map(({name, status}) => {
                    return <p style={{color : status === 'Online' ? 'green' : status === 'Offline' && 'red' }}>{name} : {status}</p>
                })
            }
        </div>
    </div>
  )
}

export default Users