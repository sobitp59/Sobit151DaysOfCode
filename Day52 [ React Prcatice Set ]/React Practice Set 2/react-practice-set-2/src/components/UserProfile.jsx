import React from 'react'

const UserProfile = ({user : {name, age, email}}) => {
  return (
    <div className='box'>
        <h1>user profile</h1>
        <p>name : {name}</p>
        <p>age : {age}</p>
        <p>email : {email}</p>
    </div>
  )
}

export default UserProfile