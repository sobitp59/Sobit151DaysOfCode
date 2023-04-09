import Chat from "./components/Chat"
import Comments from "./components/Comments"
import Products from "./components/Products"
import UserFeed from "./components/UserFeed"
import UserProfile from "./components/UserProfile"
import Users from "./components/Users"

function App() {

  return (
    <div className="App">
      <h1>React useEffect</h1>
      <Users />
      <Products /> 
      <UserProfile 
        heading="user profile"
        width='300px'
        height='300px'
      />
      <UserFeed /> 
      <Chat />
      <Comments />
    </div>
  )
}

export default App
