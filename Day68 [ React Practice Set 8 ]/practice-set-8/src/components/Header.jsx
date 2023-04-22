import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { TodosContext } from '../contexts/TodoContext';

const Header = () => {
  const {openTasks, closeTasks} = useContext(TodosContext);

  return (
    <nav className='navbar'>
        <NavLink to={'/'}>opendo</NavLink>
        <NavLink to={'/'}>home</NavLink>
        <NavLink to={'/opentasks'}>open ({openTasks.length})</NavLink>
        <NavLink to={'/closetasks'}>close ({closeTasks.length})</NavLink>
    </nav>
  )
}

export default Header