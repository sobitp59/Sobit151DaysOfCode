import React from 'react';

const product = {
    id: "AC1023",
    name: "Air Conditioner",
    price: 29600,
    specification: "1 Ton, 4 Star Rating",
    warranty: "5 Years Compressor Warranty"
};

const AirConditioner = () => {
  return (
    <div className='box'>
        <h1>air-conditioner</h1>
        <ul style={{listStyle : 'none'}}>
            <li>name : {product.name}</li>
            <li>price : {product.price}</li>
            <li>price : {product.specification}</li>
            <li>warranty : {product.warranty}</li>
        </ul>
    </div>
  )
}

export default AirConditioner