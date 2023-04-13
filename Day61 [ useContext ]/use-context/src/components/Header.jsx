import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartItems } from '../Context'

const Header = ({}) => {
    const {cart} = useContext(CartItems)

  return (
    <div>
        <nav>
            <Link to='/'>home</Link> {' '}
            <Link to='/cart'>cart({cart.length
            })</Link>
        </nav>
    </div>
  )
}

export default Header