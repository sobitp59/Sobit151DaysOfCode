import Bakery from "./components/Bakery"
import Habit from "./components/Habit"
import HabitTracker from "./components/HabitTracker"
import Product from "./components/Product"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import SocialMedia from "./components/SocialMedia"
import Todo from "./components/Todo"
import VIdeo from "./components/VIdeo"
import VideoLable from "./components/VideoLable"

function App() {

  return (
    <div className="App">
     <h1>react set 6</h1>
     <Product />
     <Todo />
    <HabitTracker />
    <VIdeo />
    <Bakery />
    <Habit />
    <Projects />
    <Profile />
    <VideoLable />
    <SocialMedia />
    </div>
  )
}

export default App
