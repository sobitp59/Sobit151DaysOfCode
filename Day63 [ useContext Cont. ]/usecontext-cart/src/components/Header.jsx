import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';

const Header = () => {
  const {cartProducts} = useContext(CartContext);
  const {wishlists} = useContext(WishlistContext);

  const getActiveStyle = ({isActive}) => ({
      color: isActive && 'rgb(250, 25, 92)',
      fontWeight : isActive && 'bold',
      background: isActive && 'rgba(250, 25, 92, 0.055)',
      padding: isActive && '2px 6px',
      borderRadius: isActive && '6px',
    })
  

  return (
    <div>
        <nav className='navbar'>
            <h1>

            <NavLink className='navbar__logo' to={'/'}> <span className='logo'><i class="fa-solid fa-feather"></i></span>openstore</NavLink>        
            </h1>
            <NavLink style={getActiveStyle} className='navbar__link' to={'/'}>home</NavLink>        
            <NavLink style={getActiveStyle} className='navbar__link' to={'/wishlist'}>wishlist <span className='navbar__count'>{wishlists.length}</span></NavLink>        
            <NavLink style={getActiveStyle} className='navbar__link' to={'/cart'}>cart <span className='navbar__count'>{cartProducts.length}</span> </NavLink>        
        </nav>
    </div>
  )
}

export default Header