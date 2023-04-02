import Button from "./components/Button"
import Employee from "./components/Employee"
import EmployeeCard from "./components/EmployeeCard"
import Image from "./components/Image"
import Product from "./components/Product"
import Stationery from "./components/Stationery"
import Student from "./components/Student"

// q2
const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'

// q3
const items = ['pen', 'pencil', 'ruler', 'eraser']

// q4
const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers'

// q5, q6
const products = [
  { name: 'Perk', quantity: 10, sales: 7 },
  { name: 'Pepsi', quantity: 10, sales: 20 },
  { name: 'Coke', quantity: 18, sales: 50 },
  { name: 'Maggi', quantity: 41, sales: 22 },
  { name: '5Star', quantity: 7, sales: 9 },
]

// q7
const student = {
  name: 'John Doe',
  english: 90,
  maths: 80,
  computers: 70,
}

function App() {

  return (
    <div className="App">
     <h1>React Practice Set 1</h1>
     
     {/* q1 */}
     <EmployeeCard
      designation="software engineer"
      name="sobit prasad"
      workexperience="1yr"
     />

     {/* q2 */}
    <Button 
      backgroundColor={backgroundColor}
      color={color}
      borderRadius={borderRadius}
      padding={padding}
    />

    {/* q3 */}
    <Stationery
      headerTitle="stationery items"
      stationeryItems={items}
    />

    {/* q4 */}
    <Image
      url={imageLink}
      caption={caption}
    />

    {/* q5, q6 */}
    <Product products={products} />

    {/* q7 */}
    <Student student={student}/>

    {/* q8 */}
    <Employee />





    </div>
  )
}

export default App
