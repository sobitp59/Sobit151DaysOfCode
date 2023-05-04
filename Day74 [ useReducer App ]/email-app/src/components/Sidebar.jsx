import { NavLink } from "react-router-dom"

const Sidebar = () => {

  const getActive = ({ isActive }) =>
  isActive
    ? {
        color: '#fff',
        background: '#7600dc',
        width : '100%',
        height : '100%'
      }
    : { color: '#545e6f', background: '#f0f0f0' }

  return (
    <div className="email__sidebar">
        <NavLink className='email__navlink' style={getActive} to={'/'}>inbox</NavLink>
        <NavLink  className='email__navlink' style={getActive} to={'/trash'}>trash</NavLink>
        <NavLink  className='email__navlink' style={getActive} to={'/spam'}>spam</NavLink>
        <NavLink  className='email__navlink' style={getActive} to={'/star'}>star</NavLink>
    </div>
  )
}

export default Sidebar
