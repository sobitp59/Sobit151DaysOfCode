import { Route, Routes } from 'react-router-dom';
import EmailDetails from './components/EmailDetails';
import Filters from './components/Filters';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Inbox from "./pages/Inbox";
import Spam from "./pages/Spam";
import Starred from './pages/Starred';
import Trash from "./pages/Trash";

function App() {

  return (
    <div className='email'>
      <Header />
      <Filters />

      <div className='email__body'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Inbox /> }/>
        <Route path='/mail/:emailID' element={<EmailDetails /> }/>
        <Route path="/spam" element={<Spam /> }/>
        <Route path="/trash" element={<Trash /> }/>
        <Route path="/star" element={<Starred /> }/>
      </Routes>
      </div>
    </div>
  )
}

export default App
