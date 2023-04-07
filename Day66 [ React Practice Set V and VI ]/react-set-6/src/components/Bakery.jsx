import React, { useEffect, useState } from 'react'
import fetchbakery from '../database/bakery'

const Bakery = () => {
    const [posts, setPosts] = useState([])

    const loadData = async () => {
        const response = await fetchbakery('https://example.com/api/posts')
        console.log(response.data.posts);
        setPosts(response.data.posts)
    }

    useEffect(() => {
        loadData()
    }, [])
  
    const showBakery = () => {
        const filteredPosts = [...posts].filter(({category}) => category === 'Bakery')
        setPosts(filteredPosts)
    }


    return (
    <div className='box'>
        <h1>my bakery</h1>
        <div>
            {
                posts.map(({caption,src, views,likes, category}) => {
                    return(
                        <>
                            <img src={src} alt={caption} />
                            <h2>{caption} <span style={{fontStyle : 'italic'}}>{category}</span> </h2>
                            <p>views : {views} likes : {likes}</p>
                        </>
                    )
                })
            }
        </div>
        <button onClick={showBakery}>show bakery</button>
    </div>
  )
}

export default Bakery