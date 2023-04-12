import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Learn = () => {
  return (
    <div>
        <h1>learnpage</h1>
        <Link to='/learn/courses'>courses</Link>
        {'  '}
        <Link to='/learn/pricing'>pricing</Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro aliquam magni quam! Quas ex aperiam cumque! Sequi, veniam! Deserunt eaque sit veniam quam, esse aspernatur nulla, nostrum placeat, eos laboriosam omnis? Porro inventore sit eveniet sapiente? Voluptas non, minus aspernatur nam unde facilis debitis natus!</p>
        <hr />
        <Outlet />
        <hr />
    </div>
  )
}

export default Learn