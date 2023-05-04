import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const getActive = ({isActive}) => ({
    backgroundColor : isActive && 'rgb(132, 0, 255)',
    color : isActive && 'white'
  })

  return (
    <nav className='email__navbar'>
        <NavLink style={getActive} className='email__navlink' to={'/'}>inbox</NavLink> 
        <NavLink style={getActive} className='email__navlink' to={'/trash'}>trash</NavLink> 
        <NavLink style={getActive} className='email__navlink' to={'/spam'}>spam</NavLink>
    </nav>
  )
}

export default Navbar