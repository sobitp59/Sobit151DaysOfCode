import { useContext } from "react";
import VideoCard from "../components/VideoCard";
import { VideosContext } from "../contexts/VideosContext";


const Videos = () => {
    const {videos} = useContext(VideosContext);
    console.log(videos)
  return (
    <div>
        <h1>all videos</h1>
        <div>
            <ul>
                {
                    videos.map((video) =>  <VideoCard video={video} key={video.id}/>)
                }
            </ul>
        </div>
    </div>
  )
}

export default Videos