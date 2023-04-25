import { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { VideosContext } from "../contexts/VideosContext";


const VideoCard = ({video}) => {
    const {likedVideos, loadLikedVideos, unLikeVideo, watchLaterVideos, loadWatchLaterVideos, removeWatchLaterVideo} = useContext(VideosContext);
    // const {loadWatchLaterVideos, removeWatchLaterVideo, watchLaterVideos} = useContext(VideosContext)

  return (
            <li key={video.id} className="video__card">
            <img src={video.thumbnail} alt="" />
            <h3>{video.title}</h3>
            <Link to={`/videos/video/${video.id}`}>watch here</Link>
            {
                !likedVideos.find(({id}) => id === video.id) ? <button onClick={() => loadLikedVideos(video.id)}>like</button> : <button onClick={() => unLikeVideo(video.id)}>unlike</button>
            }
            {
              !watchLaterVideos.find(({id}) => id === video.id) ? <button onClick={() => loadWatchLaterVideos(video.id)}>add to watchlater</button> : <button onClick={() => removeWatchLaterVideo(video.id)}>remove from watchlater</button>   
            }
            </li>
  )
}

export default VideoCard