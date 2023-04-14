import React from 'react';
import { NavLink } from 'react-router-dom';

const getActive = ({isActive}) => ({
    color : isActive ? 'blue' : 'black',
    borderBottom : isActive && "2px solid blue"
})

const Header = () => {
  return (
    <header>
        <h1>shopper's Point</h1>
        <NavLink style={getActive} to={'/'}>home</NavLink>{'  '}
        <NavLink style={getActive} to={'/cart'}>cart</NavLink>
    </header>
  )
}

export default Header