import React, { useEffect, useState } from 'react'
import { fetchVideoLable } from '../database/videolabel'

const VideoLable = () => {
    const [video, setVideo] = useState({})

    const loadVideoLable = async() => {
        const response = await fetchVideoLable('https://example.com/api/getvideo')
        console.log(response.data.videos);
        setVideo(response.data.videos);
    }

    useEffect(() => {
        loadVideoLable()
    }, [])

    
    const addLabel = () => {
        setVideo((prevVideoData) => ({...prevVideoData, label : 'motivational'}))
    }
    
    const {title,thumbnail, views, likes, label} = video;

  return (
    <div className='box'>
        <h1>video label</h1>
        {
            <>
                <h1>{title}</h1>
                <img src={thumbnail} alt={title} />
                <p><b>likes</b> : {likes}</p>
                <p><b>views</b> : {views}</p>
                {label && (<p><b>label</b> : {label}</p>)}
            </>
        }
        <button onClick={addLabel}>add label</button>
    </div>
  )
}

export default VideoLable