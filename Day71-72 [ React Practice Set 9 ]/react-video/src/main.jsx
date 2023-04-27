
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { VideosContextProvider } from './contexts/VideosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <VideosContextProvider>
    <Router>
      <App />
    </Router>
    </VideosContextProvider>,
)
