import React, { useState } from 'react';
import { fakeFetch } from '../api/fakeFetch';

const Employee = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

  const handleData = async () => {
    try {
        setIsLoading(false)
        const data = await fakeFetch('https://example.com/api/employees');
        if(data.status === 200){
            console.log(data.data.employees)
            setProducts(data.data.employees)
        }
        setIsLoading(true)
    } catch (error) {   
        console.log(error.message)
        setError(error.message)
    }
  }
    
  return (
    <div className='box'>
        <h1>awesome employee</h1>
        <button onClick={handleData}>fetch emplyee data</button>
        
           <ul style={{listStyle : 'none'}}>
            {
                isLoading ? (
                    products.map(({id, name, workExperience}) => {
                                return <li key={id}>{name} : {workExperience}</li>
                        })
                ) : (
                    <li>{error}</li>
                )
            }
           </ul>
        
    </div>
  )
}

export default Employee
// if
// isLoading &&
//     products.map(({id, name, workExperience}) => {
//         return <li key={id}>{name} : {workExperience}</li>
//     })