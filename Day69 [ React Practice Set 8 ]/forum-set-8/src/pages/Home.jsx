import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <h2>welcome sobit</h2>
        <Link to={'/questions'}>show questions lists</Link>
    </>
  )
}

export default Home