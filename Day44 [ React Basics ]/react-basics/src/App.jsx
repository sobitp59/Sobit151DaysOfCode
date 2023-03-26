import React from 'react'
import AirConditioner from './AirConditioner'
import EmployeeCard from './EmployeeCard'
import './index.css'
import ProductCard from './ProductCard'
import Sum from './Sum'

// experienced emplyees
const employees = [
  { id: "E1", name: "Arpit Jain", workExperience: 6 },
  { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
  { id: "E3", name: "Priya Shetty", workExperience: 9 },
  { id: "E4", name: "Aman Sen", workExperience: 1 }
];

// food cart
const mycart = [
  {
    id: 1,
    name: "aloo parantha",
    price: 80
  },
  {
    id: 2,
    name: "Onion Capsicum Pizza",
    price: 180
  },
  {
    id: 3,
    name: "Pav bhaji",
    price: 40
  },
  {
    id: 4,
    name: "French Toast",
    price: 100
  }
];

// products
import CountCard from './CountCard'
import EmployeeExperience from './EmployeeExperience'
import FoodCart from './FoodCart'
import { clothes, fruits, phones } from './products'

const App = () => {
  return (
    <div className='main-app'>
        < Sum numberOne={232} numberTwo={323}/>
        <EmployeeCard />
        <AirConditioner />
        
        <ProductCard 
          product={fruits} 
          productName='fruits'
          maxPrice={50}
        />
        <ProductCard 
          product={phones} 
          productName='phones'
          maxPrice={20000}
        />
        <ProductCard 
          product={clothes} 
          productName='clothes'
          maxPrice={500}
        />
        <EmployeeExperience employeeList={employees}/>
        <FoodCart food={mycart}/>

        <CountCard />



    </div>
  )
}

export default App