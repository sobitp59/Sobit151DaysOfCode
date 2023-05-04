import { NavLink } from 'react-router-dom';
import { useProducts } from '../userreducer_usecontext/ProductContext';

const Header = () => {
    const {state} = useProducts()
  return (
    <div>
        <h1>my awesome cart</h1>
        <NavLink to={'/'}>home</NavLink> { ' || ' }
        <NavLink to={'/cart'}>cart {state?.cart.length}</NavLink>
        <hr />
    </div>
  )
}

export default Header