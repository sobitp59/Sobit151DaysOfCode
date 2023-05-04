import { Route, Routes } from 'react-router-dom';
import Inbox from '../pages/Inbox';
import Spam from '../pages/Spam';
import Trash from '../pages/Trash';
import EmailDetails from './EmailDetails';


const RoutesNavigate = () => {
  return (
    <Routes>
        <Route path='/' element={<Inbox />} />
        <Route path='/spam' element={<Spam /> }/>
        <Route path='/trash' element={<Trash /> } />
        <Route path='/email/:emailID' element={<EmailDetails /> } />
    </Routes>
  )
}

export default RoutesNavigate