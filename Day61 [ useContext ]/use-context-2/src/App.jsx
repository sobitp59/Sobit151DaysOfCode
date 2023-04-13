import './App.css'
import Heading from './components/app-one/Heading'
import Section from './components/app-one/Section'
// import { ImageContext } from './components/app-two/ImageContext'
import ImagePost from './components/app-two/ImagePost'


function App() {

  return (
    <div className="App">

     <Section>
      <Heading>my profile</Heading>
      <Post title='post' body='this is post 2'/>
      <AllPosts/>
     </Section>
        <ImagePost />
    </div>
  )
}
// function App() {

//   return (
//     <div className="App">
//      <h1>App.jsx Component</h1>

//      <Section level={1}>
//       <Heading>title</Heading>
      
//       <Section level={2}>
//         <Heading>heading</Heading>
//         <Heading>heading</Heading>
//         <Heading>heading</Heading>
      
//           <Section level={3}>
//             <Heading >sub-heading</Heading>
//             <Heading >sub-heading</Heading>
//             <Heading >sub-heading</Heading>
//           </Section>
      
//       </Section>
      
//       <Heading>sub-sub-heading</Heading>
//       <Heading>sub-sub-sub-heading</Heading>
      
//       <Section level={4}>
//         <Heading>sub-sub-sub-sub-heading</Heading>
//         <Heading>sub-sub-sub-sub-heading</Heading>
//         <Heading>sub-sub-sub-sub-heading</Heading>
//       </Section>
     
//      </Section>
//     </div>
//   )
// }

export default App



const Post = ({title, body}) => {
  return(
    <Section>
      <Heading>{title}</Heading>
      <p><i>{body}</i></p>
    </Section>
  )
}

const AllPosts = () => {
  return(
    <Section>
      <Heading>all posts</Heading>
      <RecentPosts />
    </Section>
  )
}

const RecentPosts = () => {
  return(
    <Section>
      <Heading>recent posts</Heading>
      <Post title='html' body='html is the most used programming language'/>
      <Post title='css' body='css is used in backend development'/>
    </Section>
  )
}