import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>page not found</h1>
        <Link to={'/'}>go to home page</Link>
    </div>
  )
}

export default NotFound