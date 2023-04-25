import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { VideosContext } from '../contexts/VideosContext';

const Header = () => {
  const {likedVideos, watchLaterVideos} = useContext(VideosContext);


  return (
    <div>
        <header style={{borderBottom : '2px solid', padding : '20px 0'}}>
            <NavLink to={'/'}>home</NavLink> {'  '}
            <NavLink to={'/videos'}>videos</NavLink> {' '}
            <NavLink to={'/likedvideos'}>liked videos({likedVideos.length})</NavLink> {' '}
            <NavLink to={'/watchlater'}>watch later({watchLaterVideos.length})</NavLink>
        </header>
    </div>
  )
}

export default Header