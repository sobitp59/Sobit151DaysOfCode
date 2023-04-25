import { useContext } from "react";
import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import { VideosContext } from "../contexts/VideosContext";

const Liked = () => {
    const {likedVideos} = useContext(VideosContext);
    console.log(likedVideos)
  return (
    <div>
            <ul>
                {
                    likedVideos.map((video) =>  {
                        return(
                            <li key={video.id} className="video__card">
                            <img src={video.thumbnail} alt="" />
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                            <Link to={video.url} target='_blank'>watch here</Link>
                            {/* <button onClick={() => loadLikedVideos(video.id)}>like</button> */}
                            {/* <button>add to watch later</button> */}
                            </li>
                        )
                    })
                }
            </ul>
        
    </div>
  )
}

export default Liked