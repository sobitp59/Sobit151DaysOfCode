import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/videos')
    }
  return (
    <div>
        <h1>welcome to video library</h1>
        <h2>to browse all the videos, click the button below or go to videos tab </h2>
        <button onClick={handleExplore}>explore button</button>
    </div>
  )
}

export default Home