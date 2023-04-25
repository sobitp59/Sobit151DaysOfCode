import { createContext, useEffect, useState } from "react";
import { fetchVideos } from "../api/videosAPI";

const   VideosContext = createContext();

const VideosContextProvider = ({children}) => {
    const [videos, seVideos] = useState([])
    const [likedVideos, setLikedVideos] = useState([])
    const [watchLaterVideos, setWatchLaterVideos] = useState([])

    const loadVideos = async () => {
        const response = await fetchVideos('https://example.com/api/videos');
        console.log(response)
        seVideos(response.data.videos)
    }

    const loadLikedVideos = (videoid) => {
        const video = [...videos].find(({id}) => id === videoid);
        setLikedVideos((prev) => [...prev, video]);
    }

    const unLikeVideo = (videoid) => {
        const videos = [...likedVideos].filter(({id}) => id !== videoid);
        setLikedVideos(videos)
    }

    const loadWatchLaterVideos = (videoid) => {
        const video = [...videos].find(({id}) => id === videoid);
        setWatchLaterVideos((prev) => [...prev, video]);
    }

    const removeWatchLaterVideo = (videoid) => {
        const videos = [...likedVideos].filter(({id}) => id !== videoid);
        setWatchLaterVideos(videos)
    }



    useEffect(() => {
        loadVideos()
    }, [])


    return(
        <VideosContext.Provider value={{videos, likedVideos, loadLikedVideos, unLikeVideo, loadWatchLaterVideos, removeWatchLaterVideo, watchLaterVideos}}>
            {children}
        </VideosContext.Provider>
    )
}

export { VideosContext, VideosContextProvider };

