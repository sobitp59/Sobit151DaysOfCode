import React, { useContext, useState } from 'react'
import { ImageContext } from './ImageContext'
import { places } from './app'
import { getImageUrl } from './utils'

const ImagePost = () => {
    const [isLarge, setIsLarge] = useState(false)
    const ImageSize = isLarge ? 150 : 100;

  return (
    <ImageContext.Provider value={{ImageSize : ImageSize}}>
    <div>
        <h1>image posts</h1>
        <label>
            <input type="checkbox" checked={isLarge} onChange={(e) => setIsLarge(e.target.checked)}/>
            get large image
        </label>
        <div>
            { places.map((place) => <Place place={place} /> )}
        </div>
    </div>
    </ImageContext.Provider>
  )
}

export default ImagePost

const Place = ({place}) => {
    return(
    <section key={place.id}>
        <h2>{place.name}</h2>
        <p>{place.description}</p>
        <PlaceImage place={place} />
    </section>
    )
}

const PlaceImage = ({place}) => {
    const {ImageSize} = useContext(ImageContext)
    console.log(ImageSize)
    return <img src={getImageUrl(place)} alt={place.name} width={ImageSize} height={ImageSize} /> 
}