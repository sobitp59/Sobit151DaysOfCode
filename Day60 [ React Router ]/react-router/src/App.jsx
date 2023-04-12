import './App.css'
// Router Stuff
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'



// Components
import CheckoutPage from './components/CheckoutPage'
import Course from './components/Course'
import Courses from './components/Courses'
import Home from './components/Home'
import Learn from './components/Learn'
import Pricing from './components/Pricing'


function App() {

  return (
    <Router>
    <div className="App">
      <h1>React Router</h1>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Navigate replace to='/' />} />
        <Route path='/learn' element={<Learn />}>
          <Route path='courses' element={<Courses />}>
            <Route path=':courseID' element={<Course />}/>
          </Route>
          <Route path='pricing' element={<Pricing />}/>
          <Route />
        </Route>
        <Route path='/checkout' element={<CheckoutPage />}/>
      </Routes>
    
    </div>
    </Router>
  )
}

export default App
