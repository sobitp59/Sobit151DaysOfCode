import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VideosContext } from '../contexts/VideosContext';

const VideoDetails = () => {
    // const {videos} = useContext(VideosContext);
    const {videos, loadLikedVideos, likedVideos, unLikeVideo, watchLaterVideos, loadWatchLaterVideos, removeWatchLaterVideo} = useContext(VideosContext);

    const {videoID} = useParams()
    const navigate = useNavigate()

    const goBackToVideos = () => {
        navigate('/videos')
    }

    const video = videos.find(({id}) => id === Number(videoID))
    


  return (
    <div>
        <h3> videos/video/{videoID} </h3>
        <button onClick={goBackToVideos}>go back</button>
        <div>
            <p key={video.id} className="video__card">
            <img src={video.thumbnail} alt="" />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <i><strong>duration : </strong>{video.duration}</i>
            <Link to={video.url} target='_blank'>watch here</Link>
            {
                !likedVideos.find(({id}) => id === video.id) ? <button onClick={() => loadLikedVideos(video.id)}>like</button> : <button onClick={() => unLikeVideo(video.id)}>unlike</button>
            }
            {
              !watchLaterVideos.find(({id}) => id === video.id) ? <button onClick={() => loadWatchLaterVideos(video.id)}>add to watchlater</button> : <button onClick={() => removeWatchLaterVideo(video.id)}>remove from watchlater</button>   
            }
            </p>
        </div>
    </div>
  )
}

export default VideoDetails