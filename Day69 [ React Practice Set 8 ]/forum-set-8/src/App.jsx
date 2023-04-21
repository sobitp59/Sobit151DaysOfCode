import Header from "./pages/Header";

import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Answer from "./pages/Answer";

function App() {

  return (
    <>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />}/>
          <Route path="/questions/answer/:answerID" element={<Answer />}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
