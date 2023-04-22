import Header from "./components/Header";

import { Route, Routes } from 'react-router-dom';
import EmailDetails from "./components/EmailDetails";
import { EmailContextProvider } from "./contexts/EmailContext";
import InboxPage from "./pages/InboxPage";
import SentPage from "./pages/SentPage";
import SentEmailDetails from "./components/SentEmailDetails";

const App = () => {
 
  /*
    <HomePage />
      <Header /> (Counter) (Counter)
      <Sent />
        <UniquePage />
      <Inbox /> 
        <Email /> button if mail not read
  */
 
 
  return (
    <div>
        <Header />
          <EmailContextProvider>

          <Routes>
            <Route path="/inbox" element={<InboxPage />}/>
            <Route path="/inbox/:emailID" element={<EmailDetails />}/>
            <Route path="/sent/:emailID" element={<SentEmailDetails />}/>
            <Route path="/sent" element={<SentPage />}/>
          </Routes>
        </EmailContextProvider>
    </div>
  )
}

export default App