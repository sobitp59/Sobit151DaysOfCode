import React from 'react';

const Cars = ({cars}) => {
    const categorisedData = cars.reduce((carsCategory, {category}) => {
                if(carsCategory[category]){
                    carsCategory[category] += 1;
                }else{
                    carsCategory[category] = 1;
                }
                return carsCategory
            }, {})
    
    return (
    <div className='box'>
        <h1>awesome cars</h1>
       <ul>
        {
            Object.keys(categorisedData).map((category) => {
                return <li>{category} : {categorisedData[category]}</li>
            })
        }
       </ul>
    </div>
  )
}

export default Cars