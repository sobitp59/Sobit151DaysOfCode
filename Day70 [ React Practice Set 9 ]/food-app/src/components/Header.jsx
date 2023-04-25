import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodContext } from '../contexts/FoodContext';

const Header = () => {
  const {cartItems} = useContext(FoodContext);
  return (
    <div className='header'>
        <div>
            <Link className='logo' to={'/'}><span className="material-symbols-outlined logo-nav">ramen_dining</span>openfood</Link> {' '}
        </div>
        <nav className='header__navbar'>
            <Link to={'/'}>home</Link> {' '}
            <Link to={'/menu'}>menu</Link> {' '}
            <Link to={'/cart'}><span className="material-symbols-outlined">
shopping_cart
</span>({cartItems.reduce((total, {quantity}) => total + quantity , 0)})</Link> {' '}
            <hr />
        </nav>
    </div>
  )
}

export default Header
