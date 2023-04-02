import React from 'react'

const Gadgets = ({products}) => {
  return (
    <div className='box'>
        <h1>my awesome gadgets</h1>
        <ol>
            {
                products.map(({id, name, description, price}) => {
                    return <li key={id} style={{border : price > 50000 && '2px solid red'}}> NAME : {name} DESCRIPTION : {description} PRICE : {price}</li>
                })
            }
        </ol>
    </div>
  )
}

export default Gadgets