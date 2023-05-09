import { useState } from "react"


const ImageCard = ({image}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <>  
        <img className={`image ${loaded ? 'loaded' : 'loading'}`} data-src={image?.download_url} src={''} onLoad={() => setLoaded(true)} />
    </>
  )
}

export default ImageCard