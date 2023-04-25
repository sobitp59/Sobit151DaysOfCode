import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import VideoDetails from './components/VideoDetails';
import Home from './pages/Home';
import Liked from './pages/Liked';
import Videos from './pages/Videos';
import WatchLater from './pages/WatchLater';

function App() {

  return (
    <div>
      <div>
          <Header />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/videos/video/:videoID' element={<VideoDetails />} />
          <Route path='/likedvideos' element={<Liked />} />
          <Route path='/watchlater' element={<WatchLater />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
