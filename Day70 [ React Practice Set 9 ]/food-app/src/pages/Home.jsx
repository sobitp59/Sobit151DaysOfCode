 import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    // const value = useContext(FoodContext)

    const gotoMenu = () => {
        navigate('/menu')
    }

    return (
    <div>
        <h1>Welcome to neoG Food Ordering App</h1>
        <p>eat deliciously</p>
        <button onClick={gotoMenu}>see menu</button>
    </div>
  )
}

export default Home