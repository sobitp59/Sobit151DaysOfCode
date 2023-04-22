import React, { useContext } from 'react';
import { BooksContext } from '../contexts/BooksContext';

const Profile = () => {
  const {user} = useContext(BooksContext);
  const {name, img, bio} = user;
  return (
    <div className='profile'>
      <img className='profile__photo' src={img} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  )
}

export default Profile