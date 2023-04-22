import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <div>
            <h1>openmail</h1>
        </div>
        <div>
            <Link to={'/inbox'}>inbox</Link> {' '}
            <Link to={'/sent'}>sent</Link>
        </div>
    </div>
  )
}

export default Header