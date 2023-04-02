import Gadgets from "./Gadgets"
import About from "./components/About"
import Article from "./components/Article"
import ColorPicker from "./components/ColorPicker"
import Greeting from "./components/Greeting"
import MyGadgets from "./components/MyGadgets"
import Product from "./components/Product"
import Products from "./components/Products"
import Todo from "./components/Todo"
import UserProfile from "./components/UserProfile"

// q3
const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
}

// q4
const products = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  {
    id: 3,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 5,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 6,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
]

// q5
const product = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  { id: 3, name: 'mobile', description: 'iPhone 13', price: 61000 },
  {
    id: 4,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 5, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 6,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 7,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 8, name: 'mobile', description: 'iPhone 12', price: 90000 },
]

// q6
const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

// q7
const heading = 'About Me'
const name = 'Sobit' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'

// q8
const productlist = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  {
    id: 3,
    name: 'speakers',
    description: 'Bose L1 Pro32 Portable',
    price: 256000,
  },
  { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
  {
    id: 5,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 7,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 8,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
]


// q9
const red = '#EE4B2B'
const blue = '#89CFF0'
const green = '#7FFFD4'

// q10
const todoItems = [
  {
    id: 1,
    title: 'Complete practice set',
    description: 'Practice set 1 of React',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Attend revision session',
    description: 'Revision session of React',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Watch recording',
    description: 'Live session recording of React',
    isCompleted: true,
  },
  {
    id: 4,
    title: 'Attend DSH',
    description: 'Doubt Solving Hours of React',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Complete practice set',
    description: 'Practice set 2 of React',
    isCompleted: false,
  },
]

function App() {

  return (
    <div className="App">
      <h1>react practice set 2</h1>
      {/* q1 */}
      <Greeting name="sobit"/>
    
      {/* q2 */}
      <Product name="mac book pro" price="₹1,20,000"/>
    
      {/* q3 */}
      <UserProfile user={userData}/>
    
      {/* q4 */}
      <Gadgets products={products}/>

      {/* q5 */}
      <Products product={product}/>

      {/* q6 */}
      <Article title={title} content={content}/>

      {/* q7 */}
      <About heading={heading} name={name} learning={learning}/>
      
      {/* q8 */}
      <MyGadgets productlist={productlist}/>

      {/* q9 */}
      <ColorPicker red={red} green={green} blue={blue}/>

      {/* q10 */}
      <Todo todoItems={todoItems}/>
    </div>
  )
}

export default App
