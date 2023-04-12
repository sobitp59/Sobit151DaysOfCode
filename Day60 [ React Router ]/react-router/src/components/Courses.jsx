import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Courses = () => {
    const courseLists = ['reactjs', 'nextjs', 'vuejs', 'nodejs', 'dsa', 'mongodb']


  return (
    <div>
        <h1>courses</h1>
        

        <Outlet />
        {
            courseLists.map((course) => {
                return(
                    <NavLink 
                        style={({isActive}) => {
                            return {color : isActive ? 'blue' : 'gray'}
                        }}
                        to={`/learn/courses/${course}`}>{course}{'  '}</NavLink>
                )
            })
        }
        {' '}
        <NavLink to={`/learn/courses/explore`}>explore</NavLink>
        

        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit ea quae totam adipisci neque quisquam quasi, fuga rem aut.</p>
        <h3>course 1</h3>
        <h3>course 2</h3>
        <h3>course 3</h3>
        <h3>course 4</h3>
    </div>
  )
}

export default Courses