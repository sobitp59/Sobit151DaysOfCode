import React, { useEffect, useState } from 'react'
import fetchVideos from '../database/video'

const VIdeo = () => {
    const [videos, setVideos] = useState([])
  
    const loadVideos = async () => {
        const reponse = await fetchVideos('https://example.com/api/videos')
        console.log(reponse.data.videos);
        setVideos(reponse.data.videos)
    }

    useEffect(() => {
        loadVideos()
    }, [])

    const deleteVideo = () => {
        setVideos((prevVideos) => {
            const newVideos = [...prevVideos]
            newVideos.shift()
            return newVideos
        })
    }

    return (
    <div className='box'>
        <h1>video</h1>
        <div>
            {
                videos.map(({title, thumbnail, views, likes}) => {
                    return(
                        <>
                            <h2>{title}</h2>
                            <img src={thumbnail} alt={title}/>
                            <h3>views : {views}</h3>
                            <h3>likes : {likes}</h3>
                        </>
                    )
                })
            }
        </div>
        <button onClick={deleteVideo}>delete video</button>
    </div>
  )
}

export default VIdeo